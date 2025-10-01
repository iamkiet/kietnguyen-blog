import Link from "next/link";
import Image from "next/image";
import Footer from "../components/Footer";
import Navigation from "../components/Navigation";
import { Metadata } from "next";
import fs from "fs";
import path from "path";
import matter from "gray-matter";

export const metadata: Metadata = {
  title: "👋 Today We Grind! | Coding, Coffee & Developer Lifestyle",
  description:
    "Welcome to Today We Grind! Join Kiet Nguyen's journey of coding, coffee culture, and authentic developer lifestyle. Discover todaywegrindcoding tips, todaywegrindcoffee moments, and insights into the modern developer world.",
  openGraph: {
    title: "Today We Grind! | Coding, Coffee & Developer Lifestyle",
    description:
      "Welcome to Today We Grind! Join Kiet Nguyen's journey of coding, coffee culture, and authentic developer lifestyle. Discover todaywegrindcoding tips, todaywegrindcoffee moments, and insights into the modern developer world.",
    url: "https://todaywegrind.com",
    images: ["/kietnguyen-profile.png"],
  },
};

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-2xl mx-auto px-8">
        <Navigation />
        <section className="mb-28">
          <div className="flex flex-col md:flex-row md:items-start md:space-x-8 space-y-8 md:space-y-0 justify-center mx-auto w-fit">
            <div className="w-20 h-20 md:w-24 md:h-24 rounded-full overflow-hidden mx-auto md:mx-0 flex-shrink-0 bg-gray-100">
              <Image
                src="/kietnguyen-profile.png"
                alt="Kiet Nguyen - Today We Grind Developer Profile - Coding, Coffee & Developer Lifestyle"
                width={96}
                height={96}
                className="w-full h-full object-cover"
                priority
                sizes="(max-width: 768px) 80px, 96px"
                quality={90}
                placeholder="blur"
                blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R//2Q=="
              />
            </div>

            <div className="flex-1 md:text-left text-center">
              <h1 className="text-1xl md:text-1xl mb-4 leading-tight text-center md:text-left font-bold">
                today we grind
              </h1>
              <p className="text-gray-700 mb-6 text-center md:text-left font-light lowercase tracking-wide">
                coding, coffee, developer lifestyle
              </p>
              <p className="text-xs text-gray-500 mb-4 text-center md:text-left italic">
                todaywegrindcoding • todaywegrindcoffee • developer lifestyle
              </p>
              <p className="text-sm text-gray-400 font-mono mb-2 text-center md:text-left flex items-center justify-center md:justify-start gap-1">
                <span
                  role="img"
                  aria-label="location"
                  className="inline-block align-middle"
                >
                  📍
                </span>
                <span className="ml-1">
                  <span className="text-gray-600 hover:text-black transition-colors text-sm cursor-default rounded px-2 py-1">
                    Ho Chi Minh City, Viet Nam
                  </span>
                </span>
              </p>
              <div className="w-full flex flex-wrap gap-2 justify-center md:justify-start mt-4">
                <Link
                  href="/about"
                  className="px-4 py-2 bg-[#525a66] text-white text-xs font-mono rounded-full hover:bg-gray-700 transition-colors"
                >
                  meet kiet
                </Link>
                <Link
                  href="/"
                  className="px-4 py-2 bg-[#525a66] text-white text-xs font-mono rounded-full hover:bg-gray-700 transition-colors"
                >
                  gallery
                </Link>
                <Link
                  href="/"
                  className="px-4 py-2 bg-[#525a66] text-white text-xs font-mono rounded-full hover:bg-gray-700 transition-colors"
                >
                  journey
                </Link>
                <a
                  href="mailto:kietnguyen.me@gmail.com"
                  className="px-4 py-2 bg-[#525a66] text-white text-xs font-mono rounded-full hover:bg-gray-700 transition-colors"
                  title="Copy my mail"
                >
                  email
                </a>
                <a
                  href="https://github.com/iamkiet"
                  className="px-4 py-2 bg-[#525a66] text-white text-xs font-mono rounded-full hover:bg-gray-700 transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                  title="GitHub"
                >
                  github
                </a>
                <a
                  href="https://linkedin.com/in/kiet-nguyen-tuan"
                  className="px-4 py-2 bg-[#525a66] text-white text-xs font-mono rounded-full hover:bg-gray-700 transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                  title="LinkedIn"
                >
                  linkedin
                </a>
                <Link
                  href="/resume"
                  className="px-4 py-2 bg-[#525a66] text-white text-xs font-mono rounded-full hover:bg-gray-700 transition-colors flex items-center gap-1"
                  title="Resume"
                >
                  <span
                    role="img"
                    aria-label="apple burger"
                    className="inline-block align-middle"
                  >
                    🍔
                  </span>
                  resume
                </Link>
              </div>
            </div>
          </div>
        </section>
        <section className="mb-28">
          <div className="text-left">
            <h2 className="text-lg font-medium mb-6 tracking-wider">
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
