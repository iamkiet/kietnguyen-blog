import Link from "next/link";

import fs from "fs";
import path from "path";
import matter from "gray-matter";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import rehypeHighlight from "rehype-highlight";
import Footer from "../../../components/Footer";
import Navigation from "../../../components/Navigation";

interface BlogPostProps {
  params: { slug: string };
}

export default function BlogPost({ params }: BlogPostProps) {
  const { slug } = params;
  const filePath = path.join(process.cwd(), "data/blog", `${slug}.md`);
  const file = fs.readFileSync(filePath, "utf8");
  const { data, content } = matter(file);

  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-2xl mx-auto px-8">
        <div className="pb-8">
          <Navigation />
        </div>
        <article className="mb-16">
          <header className="mb-12">
            <h1 className="text-3xl md:text-4xl font-light mb-4 leading-tight">
              {data.title}
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
                  <figure className="my-8 text-center">
                    <picture>
                      <source srcSet={typeof src === "string" ? src : ""} />
                      <img
                        src={typeof src === "string" ? src : ""}
                        alt={alt || ""}
                        className="rounded-lg mx-auto max-w-full h-auto"
                        style={{ objectFit: "contain" }}
                      />
                    </picture>
                    {alt && (
                      <figcaption className="text-sm text-gray-500 mt-2 italic">
                        {alt}
                      </figcaption>
                    )}
                  </figure>
                ),
              }}
            >
              {content}
            </ReactMarkdown>
          </div>
        </article>
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
