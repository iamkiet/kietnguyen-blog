import fs from "fs";
import path from "path";

type WorkItem = {
  company: string;
  role: string;
  period: string;
  project: string;
  architecture: string;
  techStack: string;
  position: string;
  achievements: string[];
};

function parseMarkdownWorkHistory(markdown: string): WorkItem[] {
  const lines = markdown.split(/\r?\n/);
  const items: WorkItem[] = [];

  let current: Partial<WorkItem> | null = null;
  let i = 0;

  // Skip optional frontmatter and title lines
  if (lines[i]?.startsWith("---")) {
    i++;
    while (i < lines.length && !lines[i].startsWith("---")) i++;
    if (lines[i]?.startsWith("---")) i++;
  }
  if (lines[i]?.toLowerCase().startsWith("title:")) i++;

  const companyRe = /^- \*\*(.+)\*\*/;
  const kvRe = /^\s{2}-\s*([^:]+):\s*(.*)$/; // two spaces + "- Key: Value"
  const achievementStartRe = /^\s{2}-\s*Achievements:\s*$/;
  const achievementItemRe = /^\s{4}-\s*(.*)$/; // four spaces + "- text"

  while (i < lines.length) {
    const line = lines[i];

    const companyMatch = companyRe.exec(line);
    if (companyMatch) {
      if (current) {
        // finalize previous
        items.push(finalizeCurrent(current));
      }
      current = { company: companyMatch[1].trim(), achievements: [] };
      i++;
      continue;
    }

    if (!current) {
      i++;
      continue;
    }

    if (achievementStartRe.test(line)) {
      i++;
      while (i < lines.length && achievementItemRe.test(lines[i])) {
        const m = achievementItemRe.exec(lines[i]);
        if (m && current.achievements) current.achievements.push(m[1].trim());
        i++;
      }
      continue;
    }

    const kv = kvRe.exec(line);
    if (kv) {
      const key = kv[1].trim().toLowerCase();
      const value = kv[2].trim();
      switch (key) {
        case "role":
          current.role = value;
          // derive position from parentheses if present, else fall back to role
          {
            const paren = /^(.*?)\s*\(([^)]+)\)\s*$/.exec(value);
            current.position = paren ? paren[2].trim() : value;
            current.role = paren ? paren[1].trim() : value;
          }
          break;
        case "period":
          current.period = value;
          break;
        case "project":
          current.project = value;
          break;
        case "architecture":
          current.architecture = value;
          break;
        case "tech stack":
        case "tech-stack":
        case "techstack":
          current.techStack = value;
          break;
        case "position":
          current.position = value;
          break;
        default:
          break;
      }
      i++;
      continue;
    }

    // blank line or unrecognized content
    i++;
  }

  if (current) items.push(finalizeCurrent(current));
  return items;
}

function finalizeCurrent(raw: Partial<WorkItem>): WorkItem {
  return {
    company: raw.company || "",
    role: raw.role || "",
    period: raw.period || "",
    project: raw.project || "",
    architecture: raw.architecture || "",
    techStack: raw.techStack || "",
    position: raw.position || raw.role || "",
    achievements: raw.achievements || [],
  };
}

const mdPath = path.join(process.cwd(), "data", "work-history.md");
const mdContent = fs.readFileSync(mdPath, "utf8");
const workHistory = parseMarkdownWorkHistory(mdContent);

export default workHistory;
