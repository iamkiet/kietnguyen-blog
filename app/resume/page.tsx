import { Metadata } from 'next';
import Link from 'next/link';
import Footer from '../../components/Footer';
import Navigation from '../../components/Navigation';

export const metadata: Metadata = {
  title: 'Resume',
  description: 'Professional resume of Kiet Nguyen - Senior Software Engineer with 5+ years experience in microservices, Kotlin, React, and cloud architecture.',
  keywords: ['kiet nguyen resume', 'software engineer resume', 'microservices', 'kotlin developer', 'react developer'],
  openGraph: {
    title: 'Resume - Kiet Nguyen',
    description: 'Professional resume of Kiet Nguyen - Senior Software Engineer with expertise in microservices and modern web development.',
    url: 'https://kietnguyen.me/resume',
    type: 'profile',
  },
};

export default function Resume() {

  return (
    <div className="min-h-screen bg-gray-100">
      <div className="max-w-4xl mx-auto px-8">
        <Navigation />
      </div>

      {/* Back to Home Button */}
      <nav className="max-w-4xl mx-auto mb-6 px-4">
        <Link href="/" className="text-gray-600 hover:text-black transition-colors text-sm">
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
            Software engineer with a strong foundation in designing, highly experienced in all phases of the software 
            development lifecycle, from concept and architecture to deployment and optimization. I enjoy designing scalable 
            systems, improving performance, and automating processes. Known for being detail-oriented, collaborative, and 
            committed to building high-quality solutions.
          </p>
        </div>

        <div className="bg-white p-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
            <div className="space-y-8">
              <div>
                <div className="space-y-1 text-sm">
                  <p><span className="font-semibold text-black">Since:</span> 1996</p>
                  <p><span className="font-semibold text-black">Phone:</span> 0372011123</p>
                  <p><span className="font-semibold text-black">Address:</span> Tan Binh Dict, HCMC</p>
                  <p><span className="font-semibold text-black">Email:</span> kietnguyen.me@gmail.com</p>
                </div>
              </div>

              <div className="border-t-4 border-black w-24"></div>

              <div>
                <h2 className="text-lg font-bold text-black mb-3 uppercase">
                  Educational
                </h2>
                <div>
                  <h3 className="font-semibold text-black text-sm">Bachelor of Science in Information Technology</h3>
                  <p className="text-black text-sm">University of Science, Viet Nam National University HCMC</p>
                </div>
              </div>

              {/* Certificates */}
              <div>
                <h2 className="text-lg font-bold text-black mb-4 uppercase">
                  Certificates
                </h2>
                <div className="space-y-2 text-sm">
                  <div className="flex items-center">
                    <div className="flex-shrink-0 mr-3">
                      {/* Code Icon */}
                      <div className="w-5 h-4 flex items-center justify-center">
                        <span className="text-black font-mono text-xs font-bold">&lt;/&gt;</span>
                      </div>
                    </div>
                    <div>
                      <p className="text-black">AWS Certified Solutions Architect</p>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <div className="flex-shrink-0 mr-3">
                      {/* Code Icon */}
                      <div className="w-5 h-4 flex items-center justify-center">
                        <span className="text-black font-mono text-xs font-bold">&lt;/&gt;</span>
                      </div>
                    </div>
                    <div>
                      <p className="text-black">HackerRank Problem Solving (Gold)</p>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <div className="flex-shrink-0 mr-3">
                      {/* Code Icon */}
                      <div className="w-5 h-4 flex items-center justify-center">
                        <span className="text-black font-mono text-xs font-bold">&lt;/&gt;</span>
                      </div>
                    </div>
                    <div>
                      <p className="text-black">Google Cloud Professional Developer</p>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <div className="flex-shrink-0 mr-3">
                      {/* Code Icon */}
                      <div className="w-5 h-4 flex items-center justify-center">
                        <span className="text-black font-mono text-xs font-bold">&lt;/&gt;</span>
                      </div>
                    </div>
                    <div>
                      <p className="text-black">Certified Kubernetes Administrator (CKA)</p>
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
                      <p className="text-black"><span className="font-semibold">Programming language:</span> JavaScript, Python, Kotlin</p>
                    </div>
                  </div>
                  <div className="flex">
                    <div className="flex-shrink-0">
                      <p className="text-black mr-2">•</p>
                    </div>
                    <div className="ml-2">
                      <p className="text-black"><span className="font-semibold">Technology:</span> Docker, K8s, Jenkins, Grafana, Kibana, Redash, ArgoCD, NewRelic, Datadog, Auth0, Snyk, New Relic</p>
                    </div>
                  </div>
                  <div className="flex">
                    <div className="flex-shrink-0">
                      <p className="text-black mr-2">•</p>
                    </div>
                    <div className="ml-2">
                      <p className="text-black"><span className="font-semibold">Message Queue:</span> Kafka, RabbitMQ</p>
                    </div>
                  </div>
                  <div className="flex">
                    <div className="flex-shrink-0">
                      <p className="text-black mr-2">•</p>
                    </div>
                    <div className="ml-2">
                      <p className="text-black"><span className="font-semibold">Cloud Platform:</span> AWS, GCP</p>
                    </div>
                  </div>
                  <div className="flex">
                    <div className="flex-shrink-0">
                      <p className="text-black mr-2">•</p>
                    </div>
                    <div className="ml-2">
                      <p className="text-black"><span className="font-semibold">Base:</span> OOP, Data structure</p>
                    </div>
                  </div>
                  <div className="flex">
                    <div className="flex-shrink-0">
                      <p className="text-black mr-2">•</p>
                    </div>
                    <div className="ml-2">
                      <p className="text-black"><span className="font-semibold">Grown:</span> training and evaluating developer</p>
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
                        <span className="text-gray-700 ml-1">github.com/kiet-nguyen</span>
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
                        <span className="text-gray-700 ml-1">linkedin.com/in/kiet-nguyen</span>
                      </p>
                    </div>
                  </div>
                  <div className="flex">
                    <div className="flex-shrink-0">
                      <p className="text-black mr-2">•</p>
                    </div>
                    <div className="ml-2">
                      <p className="text-black">
                        <span className="font-semibold">Portfolio:</span>
                        <span className="text-gray-700 ml-1">kietnguyen.dev</span>
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
                        <span className="text-gray-700 ml-1">blog.kietnguyen.dev</span>
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
            <div className="mb-3">
              <h3 className="text-base font-bold text-black">Thoughtworks</h3>
              <p className="text-gray-700 font-medium text-sm">Senior Software Engineer | Nov 2024 - Now</p>
            </div>
            
            <div className="mb-4 text-sm space-y-1">
              <p><span className="font-semibold">Project:</span> Operations Platform (Australia Electricity, Gas and Internet Provider)</p>
              <p><span className="font-semibold">Architecture:</span> Microservice</p>
              <p><span className="font-semibold">Tech-stack:</span> Kotlin (Spring Boot 3), NestJS, ReactJS, PostgreSQL, Kafka, Redis, Auth0, Docker, Jenkins, NewRelic, Snyk, Github Action, AWS</p>
              <p><span className="font-semibold">Role:</span> Technical Anchor</p>
            </div>

            <div className="text-sm space-y-1 text-gray-700">
              <div className="flex">
                <div className="flex-shrink-0 w-4">
                  <span className="font-semibold">-</span>
                </div>
                <div className="flex-1">
                  <p>Delivered a new microsite within a microservices setup, integrating SSO (Microsoft Entra ID), CI/CD (Jenkins, GitHub Actions), and AWS services.</p>
                </div>
              </div>
              <div className="flex">
                <div className="flex-shrink-0 w-4">
                  <span className="font-semibold">-</span>
                </div>
                <div className="flex-1">
                  <p>Built a transaction replay feature for recovering failed transactions, enhancing system resilience and empowering users to reprocess issues independently.</p>
                </div>
              </div>
              <div className="flex">
                <div className="flex-shrink-0 w-4">
                  <span className="font-semibold">-</span>
                </div>
                <div className="flex-1">
                  <p>AWS cost optimization by analyzing usage and re-architecting infrastructure, achieving major savings without affecting performance.</p>
                </div>
              </div>
              <div className="flex">
                <div className="flex-shrink-0 w-4">
                  <span className="font-semibold">-</span>
                </div>
                <div className="flex-1">
                  <p>Created a data comparison tool for validating data integrity during migrations and between source/target systems.</p>
                </div>
              </div>
              <div className="flex">
                <div className="flex-shrink-0 w-4">
                  <span className="font-semibold">-</span>
                </div>
                <div className="flex-1">
                  <p>Modernized legacy apps by migrating from .NET Framework/IIS to Kotlin with Springboot 3, boosting performance and maintainability.</p>
                </div>
              </div>
              <div className="flex">
                <div className="flex-shrink-0 w-4">
                  <span className="font-semibold">-</span>
                </div>
                <div className="flex-1">
                  <p>Setup synthetic monitoring, alerting, and APM tools, improving issue detection across services using AWS CloudWatch, Snyk and NewRelic.</p>
                </div>
              </div>
              <div className="flex">
                <div className="flex-shrink-0 w-4">
                  <span className="font-semibold">-</span>
                </div>
                <div className="flex-1">
                  <p>Provided 24/7 support for legacy systems, ensuring uptime and reliability.</p>
                </div>
              </div>
              <div className="flex">
                <div className="flex-shrink-0 w-4">
                  <span className="font-semibold">-</span>
                </div>
                <div className="flex-1">
                  <p>Served as technical lead, owning systems end-to-end, preparing reports, and representing the team in client discussions.</p>
                </div>
              </div>
              <div className="flex">
                <div className="flex-shrink-0 w-4">
                  <span className="font-semibold">-</span>
                </div>
                <div className="flex-1">
                  <p>Mentored developers, reviewed code and designs, and advised on technical challenges.</p>
                </div>
              </div>
              <div className="flex">
                <div className="flex-shrink-0 w-4">
                  <span className="font-semibold">-</span>
                </div>
                <div className="flex-1">
                  <p>Interviewed candidates and training sessions for new hires and freshers.</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <Footer />
      </div>
    </div>
  );
}