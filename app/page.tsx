import Link from "next/link";
import Image from "next/image";
import Footer from "../components/Footer";
import Navigation from "../components/Navigation";
import { Metadata } from "next";
import fs from "fs";
import path from "path";
import matter from "gray-matter";

export const metadata: Metadata = {
  title: "Home",
  description:
    "Kiet Nguyen is a software engineer specializing in scalable systems and microservices. Explore insights about modern web development, technology, and engineering best practices.",
  openGraph: {
    title: "Kiet Nguyen - Software Engineer",
    description:
      "Software engineer specializing in scalable systems and microservices. Explore insights about modern web development and technology.",
    url: "https://kietnguyen.me",
    images: ["/kietnguyen-profile.png"],
  },
};

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-2xl mx-auto px-8">
        <Navigation />
        <section className="mb-32">
          <div className="flex flex-col md:flex-row md:items-start md:space-x-12 space-y-8 md:space-y-0">
            <div className="w-40 h-40 md:w-48 md:h-48 rounded-full overflow-hidden mx-auto md:mx-0 flex-shrink-0 bg-gray-100">
              <Image
                src="/kietnguyen-profile.png"
                alt="Kiet Nguyen"
                width={192}
                height={192}
                className="w-full h-full object-cover"
                priority
              />
            </div>

            <div className="flex-1">
              <h1 className="text-1xl md:text-1xl mb-4 leading-tight text-center md:text-left font-bold">
                kiet nguyen
              </h1>
              <p className="text-gray-700 mb-6 text-center md:text-left font-light lowercase tracking-wide">
                software engineer, coffeeholic
              </p>
              <p className="text-sm text-gray-400 font-mono mb-6 text-center md:text-left">
                Ho Chi Minh City, VietNam
              </p>

              <div className="flex space-x-4 justify-center md:justify-start">
                <a
                  href="mailto:kietnguyen.me@gmail.com"
                  className="group flex flex-col items-center"
                  title="Email"
                >
                  <div className="w-8 h-8 flex items-center justify-center rounded-full bg-gray-100 group-hover:bg-gray-200 transition-colors">
                    <svg
                      className="w-4 h-4 text-gray-600"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                      />
                    </svg>
                  </div>
                </a>

                <a
                  href="https://linkedin.com/in/kiet-nguyen-tuan"
                  className="group flex flex-col items-center"
                  target="_blank"
                  rel="noopener noreferrer"
                  title="LinkedIn"
                >
                  <div className="w-8 h-8 flex items-center justify-center rounded-full bg-gray-100 group-hover:bg-gray-200 transition-colors">
                    <svg
                      className="w-4 h-4 text-gray-600"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                    </svg>
                  </div>
                </a>

                <a
                  href="https://github.com/iamkiet"
                  className="group flex flex-col items-center"
                  target="_blank"
                  rel="noopener noreferrer"
                  title="GitHub"
                >
                  <div className="w-8 h-8 flex items-center justify-center rounded-full bg-gray-100 group-hover:bg-gray-200 transition-colors">
                    <svg
                      className="w-4 h-4 text-gray-600"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                    </svg>
                  </div>
                </a>

                <Link
                  href="/resume"
                  className="group flex flex-col items-center"
                  title="Resume"
                >
                  <div className="w-8 h-8 flex items-center justify-center rounded-full bg-gray-100 group-hover:bg-gray-200 transition-colors">
                    <svg
                      className="w-4 h-4 text-gray-600"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                      />
                    </svg>
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </section>
        <section className="mb-32">
          <div className="text-left">
            <h2 className="text-lg font-medium mb-6 uppercase tracking-wider">
              latest posts
            </h2>
            <div className="space-y-6">
              {(() => {
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
                              line &&
                              !line.startsWith("#") &&
                              !line.startsWith("---")
                          )
                          ?.slice(0, 120) || "",
                    };
                  })
                  .sort(
                    (a, b) =>
                      new Date(b.date).getTime() - new Date(a.date).getTime()
                  );
                return posts.slice(0, 3).map((post) => (
                  <Link key={post.slug} href={`/blog/${post.slug}`}>
                    <article className="border-b border-gray-100 pb-6 mt-8 group">
                      <div className="flex items-start gap-4">
                        <div className="flex-shrink-0 mt-1">
                          <svg
                            className="w-4 h-4 text-gray-400"
                            fill="currentColor"
                            viewBox="0 0 640 512"
                          >
                            <path d="M392.8 1.2c-17-4.9-34.7 5-39.6 22l-128 448c-4.9 17 5 34.7 22 39.6s34.7-5 39.6-22l128-448c4.9-17-5-34.7-22-39.6zm80.6 120.1c-12.5 12.5-12.5 32.8 0 45.3L562.7 256l-89.4 89.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l112-112c12.5-12.5 12.5-32.8 0-45.3l-112-112c-12.5-12.5-32.8-12.5-45.3 0zm-306.7 0c-12.5-12.5-32.8-12.5-45.3 0l-112 112c-12.5 12.5-12.5 32.8 0 45.3l112 112c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L77.3 256l89.4-89.4c12.5-12.5 12.5-32.8 0-45.3z" />
                          </svg>
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="flex justify-between items-start mb-2">
                            <h3 className="text-sm group-hover:text-gray-600 transition-colors cursor-pointer">
                              {post.title}
                            </h3>
                            <time className="text-xs text-gray-400 font-mono flex-shrink-0 ml-4">
                              {post.date}
                            </time>
                          </div>
                          <p className="text-xs text-gray-500 leading-relaxed">
                            {post.excerpt}
                          </p>
                        </div>
                      </div>
                    </article>
                  </Link>
                ));
              })()}
              <div className="pt-4">
                <Link
                  href="/blog"
                  className="text-sm text-gray-400 hover:text-gray-600 transition-colors font-mono"
                >
                  view all posts →
                </Link>
              </div>
            </div>
          </div>
        </section>
        <Footer />
      </div>
    </div>
  );
}
