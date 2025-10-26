import Link from "next/link";

export default function PublicationsPage() {
  return (
    <div className="max-w-4xl mx-auto px-6 py-16">
      <div className="mb-12">
        <h1 className="text-4xl font-semibold tracking-tight text-gray-900 dark:text-gray-100 mb-4">
          Papers & Analysis
        </h1>
        <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
          Here are some of my publications from academic research and ongoing independent work. I continue to pursue research interests 
          alongside my full-time job, focusing on efficient ML systems and the intersection of reinforcement learning with large language models.
        </p>
      </div>

      <div className="space-y-12">
        {/* My Publications */}
        <section>
          <h2 className="text-2xl font-semibold tracking-tight text-gray-900 dark:text-gray-100 mb-6">
            My Publications
          </h2>
          <div className="space-y-6">
            <div className="border-l-4 border-blue-500 pl-6 py-2">
              <a 
                href="https://arxiv.org/abs/2504.01266"
                target="_blank"
                rel="noopener noreferrer"
                className="group"
              >
                <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors mb-2">
                  GigaAPI: A User-Space API for Multi-GPU Programming →
                </h3>
              </a>
              <p className="text-sm text-gray-500 dark:text-gray-500 mb-2">
                Omeed Tehrani, et al. • arXiv:2504.01266 • 2025
              </p>
              <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed mb-3">
                Abstracting multi-GPU programming complexities through a user-space API. Enabling accessible parallel computing 
                without requiring deep CUDA expertise.
              </p>
              <div className="flex gap-4 text-sm">
                <a 
                  href="https://arxiv.org/abs/2504.01266" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 dark:text-blue-400 hover:underline"
                >
                  arXiv
                </a>
                <a 
                  href="https://github.com/omeedcs/parallel-gpus" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 dark:text-blue-400 hover:underline"
                >
                  Code
                </a>
              </div>
            </div>

            <div className="border-l-4 border-purple-500 pl-6 py-2">
              <a 
                href="https://arxiv.org/abs/2402.14928"
                target="_blank"
                rel="noopener noreferrer"
                className="group"
              >
                <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors mb-2">
                  Learning Inverse Kinodynamics for Autonomous Vehicle Drifting →
                </h3>
              </a>
              <p className="text-sm text-gray-500 dark:text-gray-500 mb-2">
                Omeed Tehrani, et al. • UT Austin AMRL • arXiv:2402.14928 • 2024
              </p>
              <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed mb-3">
                Data-driven kinodynamic model learning for high-speed autonomous drifting with UT Automata platform. 
                Selected for presentation at Amazon AI Symposium. Achieved obstacle avoidance through learned curvature correction.
              </p>
              <div className="flex gap-4 text-sm">
                <a 
                  href="https://arxiv.org/abs/2402.14928" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 dark:text-blue-400 hover:underline"
                >
                  arXiv
                </a>
                <a 
                  href="https://github.com/omeedcs/autonomous-vehicle-drifting" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 dark:text-blue-400 hover:underline"
                >
                  Code
                </a>
              </div>
            </div>

            <div className="border-l-4 border-green-500 pl-6 py-2">
              <a 
                href="/decision-trans"
                className="group"
              >
                <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 group-hover:text-green-600 dark:group-hover:text-green-400 transition-colors mb-2">
                  Decision Transformers for Robotic Imitation Learning →
                </h3>
              </a>
              <p className="text-sm text-gray-500 dark:text-gray-500 mb-2">
                Omeed Tehrani • UT Austin RobIN Lab • 2023
              </p>
              <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed mb-3">
                Extended Decision Transformer for return-conditioned imitation learning on mixed-quality robomimic datasets. 
                Outperformed behavioral cloning baselines on manipulation tasks (earlier work from graduate research).
              </p>
              <div className="flex gap-4 text-sm">
                <a 
                  href="/decision-trans"
                  className="text-blue-600 dark:text-blue-400 hover:underline"
                >
                  Full Paper & Analysis
                </a>
                <a 
                  href="https://github.com/omeedcs/robomimic-decision-transformer" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 dark:text-blue-400 hover:underline"
                >
                  Code
                </a>
              </div>
            </div>
          </div>
        </section>

      </div>
    </div>
  );
}
