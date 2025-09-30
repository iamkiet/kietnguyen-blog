import Link from "next/link";

import fs from "fs";
import path from "path";
import matter from "gray-matter";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import rehypeHighlight from "rehype-highlight";

import Footer from "../../../components/Footer";
import Navigation from "../../../components/Navigation";
import ShareButtons from "@/components/ShareButtons";
import { Metadata } from "next";
import { Suspense } from "react";
import { notFound } from "next/navigation";

interface BlogPostProps {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({
  params,
}: BlogPostProps): Promise<Metadata> {
  const { slug } = await params;
  const filePath = path.join(process.cwd(), "data/blog", `${slug}.md`);
  const file = fs.readFileSync(filePath, "utf8");
  const { data, content } = matter(file);
  // Fallback: extract first H1 as title if frontmatter title is missing
  let title = data.title;
  if (!title) {
    const h1Match = content.match(/^# (.+)$/m);
    title = h1Match ? h1Match[1].trim() : "Kiet Nguyen - Software Engineer";
  }
  const description = data.description || "Todaywegrind - Blog by Kiet Nguyen";
  const url = `https://todaywegrind.com/blog/${slug}`;
  const image = "https://todaywegrind.com/sample.jpg";
  return {
    title,
    description,
    openGraph: {
      title,
      description,
      url,
      type: "article",
      images: [
        {
          url: image,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [image],
    },
  };
}

export default async function BlogPost({ params }: BlogPostProps) {
  const { slug } = await params;
  const filePath = path.join(process.cwd(), "data/blog", `${slug}.md`);
  if (!fs.existsSync(filePath)) return notFound();
  const file = fs.readFileSync(filePath, "utf8");
  const { data, content } = matter(file);
  // Fallback: extract first H1 as title if frontmatter title is missing
  let title = data.title;
  if (!title) {
    const h1Match = content.match(/^# (.+)$/m);
    title = h1Match ? h1Match[1].trim() : "Kiet Nguyen - Software Engineer";
  }

  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-2xl mx-auto px-8">
        <div className="pb-8">
          <Navigation />
        </div>
        <article className="mb-16">
          <header className="mb-12">
            <h1 className="text-3xl md:text-4xl font-light mb-4 leading-tight">
              {title}
            </h1>
            <div className="flex items-center space-x-4 text-sm text-gray-400 font-mono">
              <time>{data.date}</time>
              <span>•</span>
              <span>{data.readTime}</span>
            </div>
          </header>
          <div className="prose prose-gray max-w-none text-gray-700 leading-relaxed">
            <ReactMarkdown
              remarkPlugins={[remarkGfm]}
              rehypePlugins={[rehypeHighlight]}
              components={{
                h1: ({ children }) => (
                  <h1 className="text-2xl font-light mt-12 mb-6 first:mt-0 text-black">
                    {children}
                  </h1>
                ),
                h2: ({ children }) => (
                  <h2 className="text-xl font-light mt-8 mb-4 text-black">
                    {children}
                  </h2>
                ),
                h3: ({ children }) => (
                  <h3 className="text-lg font-light mt-6 mb-3 text-black">
                    {children}
                  </h3>
                ),
                p: ({ children }) => (
                  <p className="mb-4 leading-relaxed">{children}</p>
                ),
                ul: ({ children }) => (
                  <ul className="mb-4 space-y-2 ml-4 list-disc">{children}</ul>
                ),
                ol: ({ children }) => (
                  <ol className="mb-4 space-y-2 ml-4 list-decimal">
                    {children}
                  </ol>
                ),
                li: ({ children }) => (
                  <li className="text-gray-700">{children}</li>
                ),
                code: ({ children, ...props }) => {
                  const isInline = !(
                    props.className && props.className.includes("language-")
                  );
                  return isInline ? (
                    <code className="bg-gray-100 px-1 py-0.5 rounded text-sm font-mono">
                      {children}
                    </code>
                  ) : (
                    <code className="block bg-gray-50 p-4 rounded text-sm font-mono overflow-x-auto">
                      {children}
                    </code>
                  );
                },
                pre: ({ children }) => (
                  <pre className="bg-gray-50 p-4 rounded text-sm font-mono overflow-x-auto mb-4">
                    {children}
                  </pre>
                ),
                blockquote: ({ children }) => (
                  <blockquote className="border-l-4 border-gray-200 pl-4 my-4 italic text-gray-600">
                    {children}
                  </blockquote>
                ),
                table: ({ children }) => (
                  <table className="w-full border-collapse border border-gray-200 my-4">
                    {children}
                  </table>
                ),
                th: ({ children }) => (
                  <th className="border border-gray-200 px-4 py-2 bg-gray-50 text-left font-medium">
                    {children}
                  </th>
                ),
                td: ({ children }) => (
                  <td className="border border-gray-200 px-4 py-2">
                    {children}
                  </td>
                ),
                strong: ({ children }) => (
                  <strong className="font-medium text-black">{children}</strong>
                ),
                a: ({ href, children }) => (
                  <a
                    href={href}
                    className="text-black underline hover:text-gray-600 transition-colors"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {children}
                  </a>
                ),
                img: ({ src, alt }) => (
                  <img
                    src={typeof src === "string" ? src : ""}
                    alt={alt || ""}
                    className="rounded-lg mx-auto max-w-full h-auto"
                    style={{ objectFit: "contain" }}
                  />
                ),
              }}
            >
              {content}
            </ReactMarkdown>
          </div>
        </article>
        <ShareButtons slug={slug} title={title} />
        <div className="pb-8 text-center">
          <Link
            href="/blog"
            className="text-sm text-gray-400 hover:text-gray-600 transition-colors font-mono"
          >
            ← back to blog
          </Link>
        </div>
        <Footer />
      </div>
    </div>
  );
}
