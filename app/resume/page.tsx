import { Metadata } from "next";
import Link from "next/link";
import Footer from "../../components/Footer";
import workHistory from "./work-history";
import WorkExperienceBlock from "../../components/WorkExperienceBlock";

export const metadata: Metadata = {
  title: "Resume",
  description:
    "Todaywegrind is the digital home of Kiet Nguyen—sharing insights on coding, coffee, software engineering, web development, and the modern developer lifestyle. Discover tips, stories, and resources for passionate programmers.",
  keywords: [
    "todaywegrind",
    "kiet nguyen",
    "resume",
    "software engineering",
    "microservices",
    "kotlin",
    "react",
    "web development",
    "developer blog",
    "cloud architecture",
  ],
  openGraph: {
    title: "Resume - Kiet Nguyen",
    description:
      "Todaywegrind is the digital home of Kiet Nguyen—sharing insights on coding, coffee, software engineering, web development, and the modern developer lifestyle. Discover tips, stories, and resources for passionate programmers.",
    url: "https://todaywegrind.com/resume",
    type: "profile",
  },
};

export default function Resume() {
  return (
    <div className="min-h-screen bg-gray-100">
      <nav className="max-w-4xl mx-auto my-4 px-4 bg-gray-100">
        <Link
          href="/"
          className="text-gray-600 hover:text-black transition-colors text-sm"
        >
          ← Back to Home
        </Link>
      </nav>

      <div className="max-w-4xl mx-auto px-4 border-b-4 border-black">
        <div className="bg-gray-700 text-white p-6 rounded-t-lg">
          <h1 className="text-3xl font-bold mb-1 uppercase tracking-wide">
            KIET NGUYEN
          </h1>
          <p className="text-lg text-gray-300">Software Engineer</p>
        </div>

        <div className="bg-gray-200 p-6">
          <p className="text-gray-800 text-sm leading-relaxed">
            Software engineer (8+ YOE) with a strong foundation in designing,
            highly experienced in all phases of the software development
            lifecycle, from concept and architecture to deployment and
            optimization. I enjoy designing scalable systems, improving
            performance, and automating processes. Known for being
            detail-oriented, collaborative, and committed to building
            high-quality solutions.
          </p>
        </div>

        <div className="bg-white p-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
            <div className="space-y-8">
              <div>
                <div className="space-y-1 text-sm">
                  <p>
                    <span className="font-semibold text-black">Since:</span>{" "}
                    1996
                  </p>
                  <p>
                    <span className="font-semibold text-black">Phone:</span>{" "}
                    0372011123
                  </p>
                  <p>
                    <span className="font-semibold text-black">Address:</span>{" "}
                    Tan Binh Dict, HCMC
                  </p>
                  <p>
                    <span className="font-semibold text-black">Email:</span>{" "}
                    kietnguyen.me@gmail.com
                  </p>
                </div>
              </div>

              <div className="border-t-4 border-black w-24"></div>

              <div>
                <h2 className="text-lg font-bold text-black mb-3 uppercase">
                  Educational
                </h2>
                <div>
                  <h3 className="font-semibold text-black text-sm">
                    Bachelor of Science in Information Technology
                  </h3>
                  <p className="text-black text-sm">
                    University of Science, Viet Nam National University HCMC
                  </p>
                </div>
              </div>

              <div>
                <h2 className="text-lg font-bold text-black mb-4 uppercase">
                  Certificates
                </h2>
                <div className="space-y-2 text-sm">
                  <div>
                    <p className="text-black">
                      HackerRank - SQL (Advanced) Certificate
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-8">
              <div>
                <h2 className="text-lg font-bold text-black mb-4 uppercase">
                  Skills and Proficiencies
                </h2>
                <div className="space-y-2 text-sm">
                  <div className="flex">
                    <div className="flex-shrink-0">
                      <p className="text-black mr-2">•</p>
                    </div>
                    <div className="ml-2">
                      <p className="text-black">
                        <span className="font-semibold">
                          Programming language:
                        </span>{" "}
                        JavaScript, Python, Kotlin
                      </p>
                    </div>
                  </div>
                  <div className="flex">
                    <div className="flex-shrink-0">
                      <p className="text-black mr-2">•</p>
                    </div>
                    <div className="ml-2">
                      <p className="text-black">
                        <span className="font-semibold">Technology:</span>{" "}
                        Docker, K8s, Jenkins, Grafana, Kibana, Redash, ArgoCD,
                        NewRelic, Datadog, Auth0, Snyk, New Relic
                      </p>
                    </div>
                  </div>
                  <div className="flex">
                    <div className="flex-shrink-0">
                      <p className="text-black mr-2">•</p>
                    </div>
                    <div className="ml-2">
                      <p className="text-black">
                        <span className="font-semibold">Message Queue:</span>{" "}
                        Kafka, RabbitMQ
                      </p>
                    </div>
                  </div>
                  <div className="flex">
                    <div className="flex-shrink-0">
                      <p className="text-black mr-2">•</p>
                    </div>
                    <div className="ml-2">
                      <p className="text-black">
                        <span className="font-semibold">Cloud Platform:</span>{" "}
                        AWS, GCP
                      </p>
                    </div>
                  </div>
                  <div className="flex">
                    <div className="flex-shrink-0">
                      <p className="text-black mr-2">•</p>
                    </div>
                    <div className="ml-2">
                      <p className="text-black">
                        <span className="font-semibold">Base:</span> OOP, Data
                        structure
                      </p>
                    </div>
                  </div>
                  <div className="flex">
                    <div className="flex-shrink-0">
                      <p className="text-black mr-2">•</p>
                    </div>
                    <div className="ml-2">
                      <p className="text-black">
                        <span className="font-semibold">Grown:</span> training
                        and evaluating developer
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Additional Links */}
              <div>
                <h2 className="text-lg font-bold text-black mb-4 uppercase">
                  Additional Links
                </h2>
                <div className="space-y-2 text-sm">
                  <div className="flex">
                    <div className="flex-shrink-0">
                      <p className="text-black mr-2">•</p>
                    </div>
                    <div className="ml-2">
                      <p className="text-black">
                        <span className="font-semibold">GitHub:</span>
                        <span className="text-gray-700 ml-1">
                          github.com/iamkiet
                        </span>
                      </p>
                    </div>
                  </div>
                  <div className="flex">
                    <div className="flex-shrink-0">
                      <p className="text-black mr-2">•</p>
                    </div>
                    <div className="ml-2">
                      <p className="text-black">
                        <span className="font-semibold">LinkedIn:</span>
                        <span className="text-gray-700 ml-1">
                          linkedin.com/in/kiet-nguyen-tuan
                        </span>
                      </p>
                    </div>
                  </div>
                  <div className="flex">
                    <div className="flex-shrink-0">
                      <p className="text-black mr-2">•</p>
                    </div>
                    <div className="ml-2">
                      <p className="text-black">
                        <span className="font-semibold">Blog:</span>
                        <span className="text-gray-700 ml-1">
                          https://todaywegrind.com/blog
                        </span>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white p-6 shadow-sm">
          <h2 className="text-lg font-bold text-black mb-4 uppercase tracking-wide">
            Work History
          </h2>
          <div>
            {workHistory.map((exp, idx) => (
              <WorkExperienceBlock
                key={idx}
                company={exp.company}
                role={exp.role}
                period={exp.period}
                project={exp.project}
                architecture={exp.architecture}
                techStack={exp.techStack}
                position={exp.position}
                achievements={exp.achievements}
              />
            ))}
          </div>
        </div>

        <Footer />
      </div>
    </div>
  );
}
