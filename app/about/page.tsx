import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Navigation from "../../components/Navigation";
import Footer from "../../components/Footer";

export const metadata: Metadata = {
  title: "About",
  description:
    "Learn more about Kiet Nguyen - Senior Software Engineer with expertise in microservices, cloud architecture, and modern web development. Passionate about building scalable systems and mentoring developers.",
  keywords: [
    "about kiet nguyen",
    "software engineer",
    "microservices expert",
    "kotlin developer",
    "react developer",
    "thoughtworks",
  ],
  openGraph: {
    title: "About - Kiet Nguyen",
    description:
      "Learn more about Kiet Nguyen - Senior Software Engineer with expertise in microservices and cloud architecture.",
    url: "https://kietnguyen.me/about",
    type: "profile",
  },
};

export default function About() {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-3xl mx-auto px-8">
        <Navigation />

        {/* Header */}
        <header className="mb-16">
          <h1 className="text-3xl md:text-4xl font-light mb-4 leading-tight">
            About Me
          </h1>
        </header>

        <main className="space-y-16">
          <section>
            <div className="flex flex-col md:flex-row md:space-x-12 space-y-8 md:space-y-0 items-start">
              <div className="w-32 h-32 md:w-40 md:h-40 rounded-full overflow-hidden mx-auto md:mx-0 flex-shrink-0 bg-gray-100">
                <Image
                  src="/kn-profile-2.png"
                  alt="Kiet Nguyen"
                  width={160}
                  height={160}
                  className="w-full h-full object-cover"
                  priority
                />
              </div>

              <div className="flex-1">
                <p className="text-gray-700 leading-relaxed mb-4">
                  Hi, I&apos;m Kiet Nguyen, a Senior Software Engineer currently
                  working at <strong>Thoughtworks</strong>. I specialize in
                  building scalable microservices architectures and have a
                  passion for creating robust, maintainable systems that solve
                  real-world problems.
                </p>
                <p className="text-gray-700 leading-relaxed mb-4">
                  With over 5 years of experience in software development,
                  I&apos;ve had the opportunity to work across the full stack,
                  from designing distributed systems to crafting user
                  interfaces. My journey has taken me through various domains,
                  but I&apos;m particularly drawn to the challenges of building
                  resilient, high-performance applications.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  When I&apos;m not coding, you&apos;ll find me exploring new
                  technologies, mentoring fellow developers, or enjoying a good
                  cup of Vietnamese coffee while pondering the next
                  architectural challenge.
                </p>
              </div>
            </div>
          </section>

          {/* Current Role */}
          <section>
            <h2 className="text-xl font-medium mb-6 text-black uppercase tracking-wider">
              Current Role
            </h2>
            <div className="bg-gray-50 p-6 rounded-lg">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="font-semibold text-black">
                    Senior Software Engineer
                  </h3>
                  <p className="text-gray-600">Thoughtworks</p>
                </div>
                <span className="text-sm text-gray-400 font-mono">
                  Nov 2024 - Present
                </span>
              </div>

              <p className="text-gray-700 leading-relaxed mb-4">
                Working as a Technical Anchor on an operations platform for a
                major Australian utility company. Leading technical decisions,
                mentoring team members, and driving architectural improvements
                across a complex microservices ecosystem.
              </p>

              <div className="space-y-2">
                <p className="text-sm">
                  <span className="font-semibold">Key Technologies:</span>{" "}
                  Kotlin, Spring Boot 3, NestJS, ReactJS, PostgreSQL, Kafka, AWS
                </p>
                <p className="text-sm">
                  <span className="font-semibold">Focus Areas:</span>{" "}
                  Microservices Architecture, Cloud Infrastructure, Performance
                  Optimization
                </p>
              </div>
            </div>
          </section>

          {/* Technical Expertise */}
          <section>
            <h2 className="text-xl font-medium mb-6 text-black uppercase tracking-wider">
              Technical Expertise
            </h2>

            <div className="space-y-8">
              <div>
                <h3 className="font-medium mb-4 text-black">
                  Languages & Frameworks
                </h3>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-black text-white text-xs font-mono rounded-full">
                    Kotlin
                  </span>
                  <span className="px-3 py-1 bg-black text-white text-xs font-mono rounded-full">
                    Java
                  </span>
                  <span className="px-3 py-1 bg-gray-800 text-white text-xs font-mono rounded-full">
                    JavaScript
                  </span>
                  <span className="px-3 py-1 bg-gray-800 text-white text-xs font-mono rounded-full">
                    TypeScript
                  </span>
                  <span className="px-3 py-1 bg-gray-600 text-white text-xs font-mono rounded-full">
                    Python
                  </span>
                  <span className="px-3 py-1 bg-gray-800 text-white text-xs font-mono rounded-full">
                    React
                  </span>
                  <span className="px-3 py-1 bg-gray-800 text-white text-xs font-mono rounded-full">
                    Next.js
                  </span>
                  <span className="px-3 py-1 bg-black text-white text-xs font-mono rounded-full">
                    Spring Boot
                  </span>
                </div>
              </div>

              <div>
                <h3 className="font-medium mb-4 text-black">
                  Infrastructure & Cloud
                </h3>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-gray-800 text-white text-xs font-mono rounded-full">
                    AWS
                  </span>
                  <span className="px-3 py-1 bg-gray-800 text-white text-xs font-mono rounded-full">
                    GCP
                  </span>
                  <span className="px-3 py-1 bg-gray-800 text-white text-xs font-mono rounded-full">
                    Docker
                  </span>
                  <span className="px-3 py-1 bg-gray-800 text-white text-xs font-mono rounded-full">
                    Kubernetes
                  </span>
                  <span className="px-3 py-1 bg-gray-600 text-white text-xs font-mono rounded-full">
                    Kafka
                  </span>
                  <span className="px-3 py-1 bg-gray-600 text-white text-xs font-mono rounded-full">
                    RabbitMQ
                  </span>
                  <span className="px-3 py-1 bg-gray-800 text-white text-xs font-mono rounded-full">
                    PostgreSQL
                  </span>
                  <span className="px-3 py-1 bg-gray-800 text-white text-xs font-mono rounded-full">
                    MongoDB
                  </span>
                  <span className="px-3 py-1 bg-gray-800 text-white text-xs font-mono rounded-full">
                    Jenkins
                  </span>
                  <span className="px-3 py-1 bg-gray-800 text-white text-xs font-mono rounded-full">
                    GitHub Actions
                  </span>
                </div>
              </div>

              <div className="text-xs text-gray-400 font-mono">
                <span className="inline-block w-3 h-3 bg-black rounded-full mr-2"></span>
                Expert
                <span className="inline-block w-3 h-3 bg-gray-800 rounded-full mr-2 ml-4"></span>
                Proficient
                <span className="inline-block w-3 h-3 bg-gray-600 rounded-full mr-2 ml-4"></span>
                Intermediate
              </div>
            </div>
          </section>

          {/* Philosophy & Approach */}
          <section>
            <h2 className="text-xl font-medium mb-6 text-black uppercase tracking-wider">
              Philosophy & Approach
            </h2>
            <div className="space-y-6">
              <div>
                <h3 className="font-medium mb-2 text-black">Code Quality</h3>
                <p className="text-gray-700 leading-relaxed text-sm">
                  I believe in writing code that tells a story. Clean, readable
                  code isn&apos;t just about following conventions—it&apos;s
                  about respecting the next developer (who might be you in six
                  months) and building systems that can evolve gracefully over
                  time.
                </p>
              </div>

              <div>
                <h3 className="font-medium mb-2 text-black">Architecture</h3>
                <p className="text-gray-700 leading-relaxed text-sm">
                  I approach system design with pragmatism over perfectionism.
                  Every architectural decision should serve a business purpose
                  and be sustainable for the team maintaining it. I&apos;m a
                  strong advocate for evolutionary architecture and continuous
                  improvement.
                </p>
              </div>

              <div>
                <h3 className="font-medium mb-2 text-black">Collaboration</h3>
                <p className="text-gray-700 leading-relaxed text-sm">
                  The best software is built by teams, not individuals. I value
                  mentoring junior developers, facilitating technical
                  discussions, and creating an environment where everyone feels
                  comfortable contributing ideas and asking questions.
                </p>
              </div>
            </div>
          </section>

          {/* Interests */}
          <section>
            <h2 className="text-xl font-medium mb-6 text-black uppercase tracking-wider">
              Beyond Coding
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="font-medium mb-3 text-black">Learning</h3>
                <p className="text-gray-700 leading-relaxed text-sm mb-2">
                  Currently exploring Rust for systems programming and diving
                  deeper into machine learning applications in software
                  engineering.
                </p>
                <p className="text-gray-700 leading-relaxed text-sm">
                  Always reading technical books and staying updated with the
                  latest developments in cloud-native technologies.
                </p>
              </div>

              <div>
                <h3 className="font-medium mb-3 text-black">Community</h3>
                <p className="text-gray-700 leading-relaxed text-sm mb-2">
                  Active in the local tech community, occasionally speaking at
                  meetups and helping organize coding workshops for newcomers.
                </p>
                <p className="text-gray-700 leading-relaxed text-sm">
                  Believe in giving back through mentoring and sharing
                  knowledge—hence this blog!
                </p>
              </div>
            </div>
          </section>

          {/* Contact */}
          <section className="border-t border-gray-100 pt-12">
            <h2 className="text-xl font-medium mb-6 text-black uppercase tracking-wider">
              Let&apos;s Connect
            </h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              I&apos;m always interested in discussing technology, sharing
              experiences, or exploring potential collaborations. Feel free to
              reach out!
            </p>

            <div className="flex space-x-4">
              <a
                href="mailto:kietnguyen.me@gmail.com"
                className="text-sm text-gray-600 hover:text-black transition-colors underline"
              >
                Email me
              </a>
              <a
                href="https://linkedin.com/in/kiet-nguyen"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-gray-600 hover:text-black transition-colors underline"
              >
                Connect on LinkedIn
              </a>
              <Link
                href="/resume"
                className="text-sm text-gray-600 hover:text-black transition-colors underline"
              >
                View my resume
              </Link>
            </div>
          </section>
        </main>

        <Footer />
      </div>
    </div>
  );
}
