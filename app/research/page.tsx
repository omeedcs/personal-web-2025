export default function ResearchPage() {
  return (
    <div className="max-w-4xl mx-auto px-6 py-16">
      <h1 className="text-4xl font-semibold tracking-tight text-gray-900 dark:text-gray-100 mb-12">
        Research
      </h1>

      <div className="space-y-16">
        {/* Current Research */}
        <section>
          <h2 className="text-2xl font-semibold tracking-tight text-gray-900 dark:text-gray-100 mb-6">
            Current Research
          </h2>
          <div className="space-y-8">
            <div>
              <h3 className="text-xl font-medium text-gray-900 dark:text-gray-100 mb-3">
                Large Language Models & Alignment
              </h3>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-3">
                Investigating methods for aligning large language models with human preferences, 
                focusing on scalable oversight and interpretability. This work explores novel 
                training approaches that preserve model capabilities while improving safety and reliability.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 text-sm rounded-full">
                  NLP
                </span>
                <span className="px-3 py-1 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 text-sm rounded-full">
                  RLHF
                </span>
                <span className="px-3 py-1 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 text-sm rounded-full">
                  Alignment
                </span>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-medium text-gray-900 dark:text-gray-100 mb-3">
                Efficient Training Infrastructure
              </h3>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-3">
                Building systems and frameworks for distributed training of large neural networks. 
                Focus on optimizing compute efficiency, memory usage, and developer experience for 
                research workflows.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 text-sm rounded-full">
                  Systems
                </span>
                <span className="px-3 py-1 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 text-sm rounded-full">
                  Distributed Computing
                </span>
                <span className="px-3 py-1 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 text-sm rounded-full">
                  Infrastructure
                </span>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-medium text-gray-900 dark:text-gray-100 mb-3">
                Multimodal Learning
              </h3>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-3">
                Exploring architectures and training methods for models that integrate vision, 
                language, and other modalities. Investigating how multimodal representations 
                can enable more capable and generalizable AI systems.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 text-sm rounded-full">
                  Computer Vision
                </span>
                <span className="px-3 py-1 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 text-sm rounded-full">
                  NLP
                </span>
                <span className="px-3 py-1 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 text-sm rounded-full">
                  Multimodal
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* Research Interests */}
        <section>
          <h2 className="text-2xl font-semibold tracking-tight text-gray-900 dark:text-gray-100 mb-6">
            Research Interests
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="font-medium text-gray-900 dark:text-gray-100 mb-2">
                Machine Learning
              </h3>
              <ul className="space-y-1 text-gray-700 dark:text-gray-300">
                <li>• Deep Learning</li>
                <li>• Reinforcement Learning</li>
                <li>• Transfer Learning</li>
                <li>• Few-shot Learning</li>
              </ul>
            </div>
            <div>
              <h3 className="font-medium text-gray-900 dark:text-gray-100 mb-2">
                Natural Language Processing
              </h3>
              <ul className="space-y-1 text-gray-700 dark:text-gray-300">
                <li>• Language Models</li>
                <li>• Transformer Architectures</li>
                <li>• Fine-tuning Methods</li>
                <li>• Prompt Engineering</li>
              </ul>
            </div>
            <div>
              <h3 className="font-medium text-gray-900 dark:text-gray-100 mb-2">
                AI Systems
              </h3>
              <ul className="space-y-1 text-gray-700 dark:text-gray-300">
                <li>• Distributed Training</li>
                <li>• Model Optimization</li>
                <li>• Serving Infrastructure</li>
                <li>• ML Operations</li>
              </ul>
            </div>
            <div>
              <h3 className="font-medium text-gray-900 dark:text-gray-100 mb-2">
                AI Safety & Ethics
              </h3>
              <ul className="space-y-1 text-gray-700 dark:text-gray-300">
                <li>• Model Alignment</li>
                <li>• Interpretability</li>
                <li>• Robustness</li>
                <li>• Bias & Fairness</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Collaborations */}
        <section>
          <h2 className="text-2xl font-semibold tracking-tight text-gray-900 dark:text-gray-100 mb-6">
            Collaborations
          </h2>
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
            I'm always interested in collaborating on interesting research problems. If you're 
            working on related topics or have ideas for potential projects, feel free to reach out.
          </p>
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
            Current collaborators include researchers at leading universities and research labs 
            working on problems in language modeling, systems optimization, and AI alignment.
          </p>
        </section>
      </div>
    </div>
  );
}
