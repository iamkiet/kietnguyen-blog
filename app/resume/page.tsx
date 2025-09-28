import { Metadata } from "next";
import Link from "next/link";
import Footer from "../../components/Footer";
import workHistory from "./work-history";
import WorkExperienceBlock from "../../components/WorkExperienceBlock";

export const metadata: Metadata = {
  title: "Resume",
  description:
    "Professional resume of Kiet Nguyen - Senior Software Engineer with 5+ years experience in microservices, Kotlin, React, and cloud architecture.",
  keywords: [
    "kiet nguyen resume",
    "software engineer resume",
    "microservices",
    "kotlin developer",
    "react developer",
  ],
  openGraph: {
    title: "Resume - Kiet Nguyen",
    description:
      "Professional resume of Kiet Nguyen - Senior Software Engineer with expertise in microservices and modern web development.",
    url: "https://kietnguyen.me/resume",
    type: "profile",
  },
};

export default function Resume() {
  return (
    <div className="min-h-screen bg-gray-100 pt-2">
      <nav className="max-w-4xl mx-auto my-4 px-4">
        <Link
          href="/"
          className="text-gray-600 hover:text-black transition-colors text-sm"
        >
          ← Back to Home
        </Link>
      </nav>

      <div className="max-w-4xl mx-auto px-4">
        <div className="bg-gray-800 text-white p-6 rounded-t-lg">
          <h1 className="text-3xl font-bold mb-1 uppercase tracking-wide">
            KIET NGUYEN
          </h1>
          <p className="text-lg text-gray-300">Software Engineer</p>
        </div>

        <div className="bg-gray-200 p-6">
          <p className="text-gray-800 text-sm leading-relaxed">
            Software engineer with a strong foundation in designing, highly
            experienced in all phases of the software development lifecycle,
            from concept and architecture to deployment and optimization. I
            enjoy designing scalable systems, improving performance, and
            automating processes. Known for being detail-oriented,
            collaborative, and committed to building high-quality solutions.
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
                  <div className="flex items-center">
                    <div className="flex-shrink-0 mr-3">
                      <div className="w-5 h-4 flex items-center justify-center">
                        <span className="text-black font-mono text-xs font-bold">
                          &lt;/&gt;
                        </span>
                      </div>
                    </div>
                    <div>
                      <p className="text-black">
                        HackerRank - SQL (Advanced) Certificate
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Languages */}
              <div>
                <h2 className="text-lg font-bold text-black mb-4 uppercase">
                  Languages
                </h2>
                <div className="space-y-1 text-sm">
                  <div className="flex">
                    <div className="flex-shrink-0">
                      <p className="text-black mr-2">•</p>
                    </div>
                    <div className="ml-2">
                      <p className="text-black">Vietnamese</p>
                    </div>
                  </div>
                  <div className="flex">
                    <div className="flex-shrink-0">
                      <p className="text-black mr-2">•</p>
                    </div>
                    <div className="ml-2">
                      <p className="text-black">English</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Side (50%) - Skills and Additional Links */}
            <div className="space-y-8">
              {/* Skills and Proficiencies */}
              <div>
                <h2 className="text-lg font-bold text-black mb-4 uppercase">
                  Skills and Proficiencies
                </h2>
                <div className="space-y-3 text-sm">
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
                          kietnguyen.me/blog
                        </span>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Work History Section - Full Width */}
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
