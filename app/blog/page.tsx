import { Metadata } from "next";
import Link from "next/link";
import Footer from "../../components/Footer";
import Navigation from "../../components/Navigation";
import fs from "fs";
import path from "path";
import matter from "gray-matter";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Read the latest thoughts and insights about software engineering, microservices, web development, and technology best practices by Kiet Nguyen.",
  keywords: [
    "software engineering blog",
    "microservices",
    "kotlin",
    "react",
    "web development",
    "technology insights",
  ],
  openGraph: {
    title: "Blog - Kiet Nguyen",
    description:
      "Read the latest thoughts and insights about software engineering, microservices, and web development.",
    url: "https://todaywegrind.com/blog",
    type: "website",
  },
};

export default function Blog() {
  // Read all markdown files in data/blog
  const postsDirectory = path.join(process.cwd(), "data/blog");
  const filenames = fs
    .readdirSync(postsDirectory)
    .filter((f) => f.endsWith(".md"));
  const posts = filenames
    .map((filename) => {
      const filePath = path.join(postsDirectory, filename);
      const fileContents = fs.readFileSync(filePath, "utf8");
      const { data, content } = matter(fileContents);
      return {
        slug: data.slug,
        title: data.title,
        date: data.date,
        readTime: data.readTime,
        excerpt:
          content
            .split("\n")
            .find(
              (line: string) =>
                line && !line.startsWith("#") && !line.startsWith("---")
            )
            ?.slice(0, 120) || "",
      };
    })
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-3xl mx-auto px-8">
        <Navigation />

        {/* Blog Header */}
        <header className="mb-16">
          <h1 className="text-3xl md:text-4xl font-light mb-4 leading-tight">
            Blog
          </h1>
          <p className="text-gray-600 leading-relaxed">
            thoughts and insights about software engineering, technology, and
            development.
          </p>
        </header>

        {/* Blog Posts List */}
        <main className="mb-16">
          <div className="space-y-12">
            {posts.map((post) => (
              <article
                key={post.slug}
                className="border-b border-gray-100 pb-12 last:border-b-0"
              >
                <Link href={`/blog/${post.slug}`} className="block group">
                  <div className="flex items-start gap-6">
                    {/* Code Icon */}
                    <div className="flex-shrink-0 mt-1">
                      <svg
                        className="w-5 h-5 text-gray-400"
                        fill="currentColor"
                        viewBox="0 0 640 512"
                      >
                        <path d="M392.8 1.2c-17-4.9-34.7 5-39.6 22l-128 448c-4.9 17 5 34.7 22 39.6s34.7-5 39.6-22l128-448c4.9-17-5-34.7-22-39.6zm80.6 120.1c-12.5 12.5-12.5 32.8 0 45.3L562.7 256l-89.4 89.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l112-112c12.5-12.5 12.5-32.8 0-45.3l-112-112c-12.5-12.5-32.8-12.5-45.3 0zm-306.7 0c-12.5-12.5-32.8-12.5-45.3 0l-112 112c-12.5 12.5-12.5 32.8 0 45.3l112 112c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L77.3 256l89.4-89.4c12.5-12.5 12.5-32.8 0-45.3z" />
                      </svg>
                    </div>

                    <div className="flex-1 min-w-0">
                      <div className="mb-4">
                        <h2 className="text-xl font-light mb-3 group-hover:text-gray-600 transition-colors">
                          {post.title}
                        </h2>
                        <div className="flex items-center space-x-4 text-sm text-gray-400 font-mono mb-3">
                          <time>{post.date}</time>
                          <span>•</span>
                          <span>{post.readTime}</span>
                        </div>
                        <p className="text-gray-600 leading-relaxed">
                          {post.excerpt}
                        </p>
                      </div>
                      <div className="text-sm text-gray-400 font-mono group-hover:text-gray-600 transition-colors">
                        read more →
                      </div>
                    </div>
                  </div>
                </Link>
              </article>
            ))}
          </div>
        </main>

        {/* Back Link */}
        <div className="pb-8 text-center">
          <Link
            href="/"
            className="text-sm text-gray-400 hover:text-gray-600 transition-colors font-mono"
          >
            ← back to home
          </Link>
        </div>

        <Footer />
      </div>
    </div>
  );
}
