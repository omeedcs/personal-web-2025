import Link from "next/link";

export default function PublicationsPage() {
  return (
    <div className="max-w-4xl mx-auto px-6 py-16">
      <div className="mb-12">
        <h1 className="text-4xl font-semibold tracking-tight text-gray-900 dark:text-gray-100 mb-4">
          Papers & Analysis
        </h1>
        <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed mb-4">
          Deep dives into research papers on efficient ML systems, distributed training, and optimization techniques for frontier models. 
          Documenting my evolution from robotic RL (RobIN/AMRL) to scalable ML infrastructure and training efficiency.
        </p>
        <div className="bg-blue-50 dark:bg-blue-950/30 border border-blue-200 dark:border-blue-800 rounded-lg p-4">
          <p className="text-sm text-gray-700 dark:text-gray-300">
            <span className="font-semibold">Current Focus:</span> Drawing inspiration from work like{" "}
            <a 
              href="https://gaurigupta19.github.io/llms/distributed%20ml/optimization/2025/10/02/efficient-ml.html"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 dark:text-blue-400 hover:underline"
            >
              this deep dive on efficient ML systems
            </a>
            {" "}— exploring distributed training optimization, quantization, memory-efficient fine-tuning, and inference acceleration.
          </p>
        </div>
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

        {/* Paper Analyses - Coming Soon */}
        <section>
          <h2 className="text-2xl font-semibold tracking-tight text-gray-900 dark:text-gray-100 mb-6">
            Paper Deep Dives
          </h2>
          <div className="border border-dashed border-gray-300 dark:border-gray-700 rounded-lg p-8 text-center">
            <p className="text-gray-600 dark:text-gray-400 mb-4">
              Coming soon: In-depth analyses of papers on efficient ML systems, distributed training, and optimization.
            </p>
            <p className="text-sm text-gray-500 dark:text-gray-500">
              Currently studying recent work on training efficiency, quantization techniques, and inference optimization. 
              Will be documenting implementations and insights from papers on ZeRO, FSDP, FlashAttention, and more.
            </p>
          </div>
        </section>

        {/* Research Areas */}
        <section>
          <h2 className="text-2xl font-semibold tracking-tight text-gray-900 dark:text-gray-100 mb-6">
            Current Reading List
          </h2>
          <div className="space-y-4">
            <div className="bg-gray-50 dark:bg-gray-900 p-4 rounded-lg">
              <h3 className="font-semibold text-gray-900 dark:text-gray-100 mb-2">
                Distributed Training & Optimization
              </h3>
              <ul className="text-sm text-gray-600 dark:text-gray-400 space-y-1">
                <li>• "ZeRO: Memory Optimizations Toward Training Trillion Parameter Models" (Rajbhandari et al.)</li>
                <li>• "PyTorch FSDP: Experiences on Scaling Fully Sharded Data Parallel" (Zhao et al.)</li>
                <li>• "Megatron-LM: Training Multi-Billion Parameter Models Using Model Parallelism" (Shoeybi et al.)</li>
                <li>• "GPipe: Easy Scaling with Micro-Batch Pipeline Parallelism" (Huang et al.)</li>
              </ul>
            </div>

            <div className="bg-gray-50 dark:bg-gray-900 p-4 rounded-lg">
              <h3 className="font-semibold text-gray-900 dark:text-gray-100 mb-2">
                Efficient Fine-Tuning & Quantization
              </h3>
              <ul className="text-sm text-gray-600 dark:text-gray-400 space-y-1">
                <li>• "LoRA: Low-Rank Adaptation of Large Language Models" (Hu et al.)</li>
                <li>• "QLoRA: Efficient Finetuning of Quantized LLMs" (Dettmers et al.)</li>
                <li>• "LLM.int8(): 8-bit Matrix Multiplication for Transformers at Scale" (Dettmers et al.)</li>
                <li>• "GPTQ: Accurate Post-Training Quantization for Generative Pre-trained Transformers" (Frantar et al.)</li>
              </ul>
            </div>

            <div className="bg-gray-50 dark:bg-gray-900 p-4 rounded-lg">
              <h3 className="font-semibold text-gray-900 dark:text-gray-100 mb-2">
                Inference & Architecture Optimization
              </h3>
              <ul className="text-sm text-gray-600 dark:text-gray-400 space-y-1">
                <li>• "FlashAttention: Fast and Memory-Efficient Exact Attention" (Dao et al.)</li>
                <li>• "Inference Optimization for Large Language Models" (various)</li>
                <li>• "KV Cache Optimization" and "Continuous Batching" techniques</li>
                <li>• Gradient compression & communication-efficient training papers</li>
              </ul>
            </div>

            <div className="bg-gray-50 dark:bg-gray-900 p-4 rounded-lg">
              <h3 className="font-semibold text-gray-900 dark:text-gray-100 mb-2">
                Foundation (Earlier Work)
              </h3>
              <ul className="text-sm text-gray-600 dark:text-gray-400 space-y-1">
                <li>• "Decision Transformer: Reinforcement Learning via Sequence Modeling" (Chen et al.)</li>
                <li>• "Attention Is All You Need" (Vaswani et al.)</li>
                <li>• Robotic manipulation and imitation learning papers from RobIN/AMRL work</li>
              </ul>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
