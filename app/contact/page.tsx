import Link from "next/link";
import { Mail, Github, Twitter, Linkedin, Phone, MapPin, Podcast } from "lucide-react";

export default function ContactPage() {
  return (
    <div className="max-w-4xl mx-auto px-6 py-16">
      <Link
        href="/"
        className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100 transition-colors mb-8 inline-block text-sm"
      >
        ← Back to Home
      </Link>

      <h1 className="text-4xl font-semibold tracking-tight text-gray-900 dark:text-gray-100 mb-4">
        Let's Connect
      </h1>
      <p className="text-xl text-gray-600 dark:text-gray-400 mb-12">
        Dallas-Fort Worth Metroplex
      </p>

      <div className="space-y-12">
        <section>
          <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
            I'm always happy to chat about reinforcement learning, AI infrastructure, distributed systems, 
            or just random interesting ideas. Whether you want to discuss research, collaborate on projects, 
            or grab coffee to talk about building things from scratch—feel free to reach out!
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold tracking-tight text-gray-900 dark:text-gray-100 mb-6">
            Get in Touch
          </h2>
          <div className="grid sm:grid-cols-2 gap-4">
            <a 
              href="mailto:omeed26@gmail.com"
              className="flex items-center gap-3 p-4 border border-gray-200 dark:border-gray-800 rounded-lg text-gray-700 dark:text-gray-300 hover:border-blue-500 dark:hover:border-blue-500 transition-colors group"
            >
              <Mail className="w-5 h-5 flex-shrink-0" />
              <span className="group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">omeed26@gmail.com</span>
            </a>
            <a 
              href="tel:512-676-9413"
              className="flex items-center gap-3 p-4 border border-gray-200 dark:border-gray-800 rounded-lg text-gray-700 dark:text-gray-300 hover:border-blue-500 dark:hover:border-blue-500 transition-colors group"
            >
              <Phone className="w-5 h-5 flex-shrink-0" />
              <span className="group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">512-676-9413</span>
            </a>
            <a 
              href="https://x.com/omeedtehrani"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 p-4 border border-gray-200 dark:border-gray-800 rounded-lg text-gray-700 dark:text-gray-300 hover:border-blue-500 dark:hover:border-blue-500 transition-colors group"
            >
              <Twitter className="w-5 h-5 flex-shrink-0" />
              <span className="group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">@omeedtehrani</span>
            </a>
            <a 
              href="https://github.com/omeedcs"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 p-4 border border-gray-200 dark:border-gray-800 rounded-lg text-gray-700 dark:text-gray-300 hover:border-blue-500 dark:hover:border-blue-500 transition-colors group"
            >
              <Github className="w-5 h-5 flex-shrink-0" />
              <span className="group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">omeedcs</span>
            </a>
            <a 
              href="https://linkedin.com/in/omeedtehrani"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 p-4 border border-gray-200 dark:border-gray-800 rounded-lg text-gray-700 dark:text-gray-300 hover:border-blue-500 dark:hover:border-blue-500 transition-colors group"
            >
              <Linkedin className="w-5 h-5 flex-shrink-0" />
              <span className="group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">omeedtehrani</span>
            </a>
            <a 
              href="https://x.com/fspodofficial"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 p-4 border border-gray-200 dark:border-gray-800 rounded-lg text-gray-700 dark:text-gray-300 hover:border-blue-500 dark:hover:border-blue-500 transition-colors group"
            >
              <Podcast className="w-5 h-5 flex-shrink-0" />
              <span className="group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">From Scratch Podcast</span>
            </a>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-semibold tracking-tight text-gray-900 dark:text-gray-100 mb-6">
            What I'm Interested In
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="border-l-4 border-blue-600 pl-4">
              <h3 className="font-semibold text-gray-900 dark:text-gray-100 mb-2">Research & Collaboration</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Deep RL, LLM optimization, distributed training, AI infrastructure, and anything at the intersection of systems and ML.
              </p>
            </div>
            <div className="border-l-4 border-green-600 pl-4">
              <h3 className="font-semibold text-gray-900 dark:text-gray-100 mb-2">Podcast Guests</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Engineers, researchers, and founders building interesting things. If you have a story worth sharing, let's talk!
              </p>
            </div>
            <div className="border-l-4 border-purple-600 pl-4">
              <h3 className="font-semibold text-gray-900 dark:text-gray-100 mb-2">Industry Opportunities</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Roles at frontier labs, research institutions, or anywhere working on hard problems in ML systems and training optimization.
              </p>
            </div>
            <div className="border-l-4 border-amber-600 pl-4">
              <h3 className="font-semibold text-gray-900 dark:text-gray-100 mb-2">Just Chatting</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Coffee conversations about tech, AI, startups, or life in general. Always down to meet interesting people.
              </p>
            </div>
          </div>
        </section>

        <section className="bg-gray-50 dark:bg-gray-900 rounded-lg p-6 border border-gray-200 dark:border-gray-800">
          <h2 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-gray-100 mb-4">
            Currently At
          </h2>
          <div className="space-y-2">
            <div className="flex items-center gap-2 text-gray-700 dark:text-gray-300">
              <MapPin className="w-4 h-4" />
              <span>Capital One - Plano, TX</span>
            </div>
            <p className="text-sm text-gray-600 dark:text-gray-400 ml-6">
              Senior Software Engineer building AI infrastructure with MCP, A2A, and Python APIs
            </p>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-semibold tracking-tight text-gray-900 dark:text-gray-100 mb-6">
            Response Time
          </h2>
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
            I typically respond within 1-2 days. If it's urgent, mention it in the subject line or message. 
            For podcast inquiries, please include your background and what you'd like to discuss.
          </p>
        </section>
      </div>
    </div>
  );
}
