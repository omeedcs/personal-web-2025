import Link from "next/link";
import DunningKrugerCurve from "@/components/DunningKrugerCurve";

export default function Home() {
  return (
    <div className="max-w-4xl mx-auto px-6 py-16">
      {/* Hero Section */}
      <section className="mb-20">
        <div className="flex flex-row items-center justify-between gap-6 mb-10">
          <div className="flex-1 min-w-0">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight text-gray-900 dark:text-gray-100 mb-3 md:mb-4 leading-tight">
              Omeed Tehrani
            </h1>
            <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-400 italic font-light">
              just another day in paradise
            </p>
          </div>
          <div className="flex-shrink-0">
            <img 
              src="/profile.png" 
              alt="Omeed Tehrani" 
              className="w-20 h-20 sm:w-28 sm:h-28 md:w-40 md:h-40 rounded-full object-cover border-3 sm:border-4 border-gray-200 dark:border-gray-800 shadow-lg"
            />
          </div>
        </div>
        <div className="prose prose-lg dark:prose-invert max-w-none">
          <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
            I'm a researcher and engineer focused on <span className="font-semibold text-gray-900 dark:text-gray-100">deep reinforcement learning</span>{" "}
            and <span className="font-semibold text-gray-900 dark:text-gray-100">large language models</span>, with interests spanning{" "}
            <span className="font-semibold text-gray-900 dark:text-gray-100">AI safety & alignment</span>. My current focus is on efficient ML systems, 
            distributed training optimization, inference acceleration, and the systems-level challenges of scaling frontier models. 
            Long-term, I want to go deeper down the abstraction stack, working on training efficiency, optimization algorithms, and the fundamental 
            mechanisms that make intelligent systems work, whether that's at a frontier lab, research institution, or wherever the most interesting problems are.
          </p>
          <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mt-4">
            I hold both MS and BS degrees in Computer Science from UT Austin, where I conducted research in the <span className="font-semibold text-gray-900 dark:text-gray-100">RobIN Laboratory</span> 
            (Robotic Interactive Intelligence) on transfer learning, multi-task RL using the MetaWorld manipulation benchmark suite, and return-conditioned sequence modeling with Decision Transformers on robomimic datasets, 
            advised by <span className="font-semibold text-gray-900 dark:text-gray-100">Dr. Roberto Martin-Martin</span> and visiting scholar <span className="font-semibold text-gray-900 dark:text-gray-100">Dr. Fernando Fernández Rebollo</span>. 
            I also worked in the <span className="font-semibold text-gray-900 dark:text-gray-100">AMRL</span> (Autonomous Mobile Robotics Laboratory) with <span className="font-semibold text-gray-900 dark:text-gray-100">Dr. Joydeep Biswas</span> on inverse kinodynamics 
            for autonomous vehicle drifting. My work was selected for presentation at an <span className="font-semibold text-gray-900 dark:text-gray-100">Amazon AI Symposium</span>.
          </p>
          <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mt-4">
            My journey through reinforcement learning has been non-linear. Starting with robotic manipulation and policy learning in the RobIN lab, 
            I built intuition for how agents learn from interaction, credit assignment, and the exploration-exploitation tradeoff. Those fundamentals 
            from training robotic arms now inform how I think about LLMs as RL agents, applying insights from offline RL and sequence modeling to 
            distributed training infrastructure, model optimization, and efficient inference at scale. I'm somewhere past the Valley of Despair on the 
            Dunning-Kruger curve, where the derivative is finally positive again, climbing toward actual competence one paper at a time.
          </p>
          
          <DunningKrugerCurve />
        </div>
      </section>

      {/* Research Interests */}
      <section className="mb-20">
        <h2 className="text-2xl font-semibold tracking-tight text-gray-900 dark:text-gray-100 mb-8">
          Research Interests
        </h2>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="border border-gray-200 dark:border-gray-800 p-6 rounded-lg hover:border-blue-500 dark:hover:border-blue-500 transition-colors">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-3">
              Deep Reinforcement Learning
            </h3>
            <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
              Policy gradient methods, off-policy RL, model-based approaches, and the application of sequence modeling 
              (Decision Transformers) to robotics and imitation learning from mixed-quality demonstrations.
            </p>
          </div>
          
          <div className="border border-gray-200 dark:border-gray-800 p-6 rounded-lg hover:border-purple-500 dark:hover:border-purple-500 transition-colors">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-3">
              AI Safety & Alignment
            </h3>
            <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
              Mechanistic interpretability of learned behaviors, reward specification, value alignment in goal-conditioned agents, 
              and the transferability of alignment techniques from robotic systems to LLMs.
            </p>
          </div>
          
          <div className="border border-gray-200 dark:border-gray-800 p-6 rounded-lg hover:border-green-500 dark:hover:border-green-500 transition-colors">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-3">
              Efficient ML & Training Optimization
            </h3>
            <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
              Distributed training optimization, gradient compression, quantization techniques, memory-efficient fine-tuning (LoRA, QLoRA), 
              and systems-level approaches to scaling LLMs. Focus on making frontier models more accessible and efficient.
            </p>
          </div>
          
          <div className="border border-gray-200 dark:border-gray-800 p-6 rounded-lg hover:border-orange-500 dark:hover:border-orange-500 transition-colors">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-3">
              Infrastructure & Systems
            </h3>
            <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
              Multi-GPU programming, CUDA kernel optimization, distributed systems for ML (pipeline/tensor parallelism), 
              inference acceleration, and production deployment challenges at scale. Bridging hardware and ML research.
            </p>
          </div>
        </div>
      </section>

      {/* Current Work Section */}
      <section className="mb-20">
        <h2 className="text-2xl font-semibold tracking-tight text-gray-900 dark:text-gray-100 mb-8">
          Current Work
        </h2>
        <div className="space-y-8">
          <div className="border-l-4 border-blue-600 pl-6 bg-blue-50/30 dark:bg-blue-950/20 py-4 rounded-r">
            <h3 className="text-xl font-medium text-gray-900 dark:text-gray-100 mb-2">
              AI Infrastructure @ Capital One
            </h3>
            <p className="text-gray-600 dark:text-gray-400 text-sm mb-3">Senior Software Engineer • July 2025 - Present</p>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
              Building production AI infrastructure and agentic systems at enterprise scale. Architecting <span className="font-mono text-sm bg-gray-100 dark:bg-gray-800 px-1.5 py-0.5 rounded">Model Context Protocol</span> integrations 
              for contextual AI workflows, developing <span className="font-mono text-sm bg-gray-100 dark:bg-gray-800 px-1.5 py-0.5 rounded">Google A2A</span> agent-to-agent communication patterns, 
              and building scalable Python APIs for LLM orchestration across cloud infrastructure. Working on multi-agent coordination, prompt optimization, 
              and deploying frontier models in production environments. Previously engineered vulnerability data pipelines processing millions of CVE records 
              with distributed systems and real-time analytics.
            </p>
          </div>

          <div className="border-l-4 border-purple-600 pl-6">
            <h3 className="text-xl font-medium text-gray-900 dark:text-gray-100 mb-2">
              Independent Research
            </h3>
            <p className="text-gray-600 dark:text-gray-400 text-sm mb-3">Self-Directed • Ongoing</p>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
              Deep-diving into efficient ML systems papers—distributed training optimization, quantization, memory-efficient fine-tuning. 
              Studying recent work on pipeline parallelism, gradient compression, and inference acceleration. 
              Implementing techniques from scratch and documenting findings through technical write-ups.
            </p>
          </div>

          <div className="border-l-4 border-gray-400 pl-6">
            <h3 className="text-xl font-medium text-gray-900 dark:text-gray-100 mb-2">
              From Scratch Podcast
            </h3>
            <p className="text-gray-600 dark:text-gray-400 text-sm mb-3">Founder • January 2025 - Present</p>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
              Long-form conversations with researchers, engineers, and builders exploring first-principles thinking in AI, 
              systems design, and the future of intelligent computation.
            </p>
          </div>
        </div>
      </section>

      {/* Selected Publications & Papers */}
      <section className="mb-20">
        <h2 className="text-2xl font-semibold tracking-tight text-gray-900 dark:text-gray-100 mb-8">
          Selected Publications & Research
        </h2>
        <div className="space-y-6">
          <div className="border-l-2 border-gray-300 dark:border-gray-700 pl-6 hover:border-blue-500 dark:hover:border-blue-400 transition-colors">
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
            <p className="text-sm text-gray-500 dark:text-gray-500 mb-2">arXiv:2504.01266 • 2025</p>
            <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
              Designed and implemented a user-space API abstracting multi-GPU programming complexities, enabling developers 
              to leverage parallel GPU systems without deep CUDA expertise. Bridging the gap between hardware capabilities 
              and accessible parallel computing.
            </p>
          </div>

          <div className="border-l-2 border-gray-300 dark:border-gray-700 pl-6 hover:border-blue-500 dark:hover:border-blue-400 transition-colors">
            <a 
              href="https://arxiv.org/abs/2402.14928"
              target="_blank"
              rel="noopener noreferrer"
              className="group"
            >
              <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors mb-2">
                Learning Inverse Kinodynamics for Autonomous Vehicle Drifting →
              </h3>
            </a>
            <p className="text-sm text-gray-500 dark:text-gray-500 mb-2">UT Austin AMRL • arXiv:2402.14928 • 2024 • Selected for Amazon AI Symposium</p>
            <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
              Data-driven kinodynamic model learning for high-speed autonomous drifting on UT Automata platform. 
              Demonstrated successful obstacle avoidance through learned curvature correction (earlier robotics work).
            </p>
          </div>

          <div className="border-l-2 border-gray-300 dark:border-gray-700 pl-6 hover:border-blue-500 dark:hover:border-blue-400 transition-colors">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-2">
              Decision Transformers for Robotic Imitation Learning
            </h3>
            <p className="text-sm text-gray-500 dark:text-gray-500 mb-2">UT Austin RobIN Lab • 2023</p>
            <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
              Extended Decision Transformer architecture for return-conditioned imitation learning on mixed-quality robomimic datasets. 
              Achieved significant performance improvements over behavioral cloning baselines on manipulation tasks (earlier graduate research).
            </p>
          </div>
        </div>
      </section>

      {/* Technical Projects */}
      <section className="mb-20">
        <h2 className="text-2xl font-semibold tracking-tight text-gray-900 dark:text-gray-100 mb-8">
          Technical Projects
        </h2>
        <div className="grid gap-4">
          <a
            href="https://github.com/omeedcs/tinyrl-tetris"
            target="_blank"
            rel="noopener noreferrer"
            className="block group border border-gray-200 dark:border-gray-800 p-5 rounded-lg hover:border-blue-500 dark:hover:border-blue-400 transition-all hover:shadow-md"
          >
            <div className="flex items-start justify-between mb-2">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                TinyRL-Tetris
              </h3>
              <span className="text-xs bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-300 px-2 py-1 rounded">RL</span>
            </div>
            <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
              Implementing deep RL algorithms from scratch for Tetris—exploring DQN, policy gradients, and reward shaping 
              as a pedagogical exercise in understanding RL fundamentals.
            </p>
          </a>

          <a
            href="https://omeedcs.github.io/starlink-satellite-simulator/"
            target="_blank"
            rel="noopener noreferrer"
            className="block group border border-gray-200 dark:border-gray-800 p-5 rounded-lg hover:border-purple-500 dark:hover:border-purple-400 transition-all hover:shadow-md"
          >
            <div className="flex items-start justify-between mb-2">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors">
                Starlink Satellite Simulator
              </h3>
              <span className="text-xs bg-purple-100 dark:bg-purple-900 text-purple-700 dark:text-purple-300 px-2 py-1 rounded">Systems</span>
            </div>
            <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
              Production-grade satellite communication simulator with RF physics, regulatory compliance, dynamic beam steering, 
              and real-time link analysis. Built for aerospace mission planning.
            </p>
          </a>

          <a
            href="https://github.com/omeedcs/block-wise-hierarchal-transformer"
            target="_blank"
            rel="noopener noreferrer"
            className="block group border border-gray-200 dark:border-gray-800 p-5 rounded-lg hover:border-green-500 dark:hover:border-green-400 transition-all hover:shadow-md"
          >
            <div className="flex items-start justify-between mb-2">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 group-hover:text-green-600 dark:group-hover:text-green-400 transition-colors">
                Block-Wise Hierarchical Transformer
              </h3>
              <span className="text-xs bg-green-100 dark:bg-green-900 text-green-700 dark:text-green-300 px-2 py-1 rounded">LLM</span>
            </div>
            <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
              PyTorch chatbot implementation with self-attention mechanisms achieving 1.32 perplexity. 
              Exploration of transformer architectures, attention patterns, and sequence-to-sequence learning.
            </p>
          </a>

          <a
            href="https://github.com/omeedcs/MemPharos"
            target="_blank"
            rel="noopener noreferrer"
            className="block group border border-gray-200 dark:border-gray-800 p-5 rounded-lg hover:border-orange-500 dark:hover:border-orange-400 transition-all hover:shadow-md"
          >
            <div className="flex items-start justify-between mb-2">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 group-hover:text-orange-600 dark:group-hover:text-orange-400 transition-colors">
                MemPharos
              </h3>
              <span className="text-xs bg-orange-100 dark:bg-orange-900 text-orange-700 dark:text-orange-300 px-2 py-1 rounded">Systems</span>
            </div>
            <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
              User-space paging system with custom memory manipulation—intercepting system signals for demand-loading ELF binaries. 
              Deep dive into OS internals and virtual memory management.
            </p>
          </a>

          <a
            href="https://github.com/omeedcs/RemoteSyncFS"
            target="_blank"
            rel="noopener noreferrer"
            className="block group border border-gray-200 dark:border-gray-800 p-5 rounded-lg hover:border-red-500 dark:hover:border-red-400 transition-all hover:shadow-md"
          >
            <div className="flex items-start justify-between mb-2">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 group-hover:text-red-600 dark:group-hover:text-red-400 transition-colors">
                RemoteSyncFS
              </h3>
              <span className="text-xs bg-red-100 dark:bg-red-900 text-red-700 dark:text-red-300 px-2 py-1 rounded">Distributed</span>
            </div>
            <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
              FUSE-based distributed file system with remote synchronization capabilities. 
              Exploring consistency models, conflict resolution, and distributed systems primitives.
            </p>
          </a>

          <a
            href="https://github.com/omeedcs/StrategoSpheres"
            target="_blank"
            rel="noopener noreferrer"
            className="block group border border-gray-200 dark:border-gray-800 p-5 rounded-lg hover:border-indigo-500 dark:hover:border-indigo-400 transition-all hover:shadow-md"
          >
            <div className="flex items-start justify-between mb-2">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
                StrategoSpheres
              </h3>
              <span className="text-xs bg-indigo-100 dark:bg-indigo-900 text-indigo-700 dark:text-indigo-300 px-2 py-1 rounded">AI/Search</span>
            </div>
            <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
              Adversarial search algorithms and heuristic evaluation for zero-sum strategic games. 
              Minimax, alpha-beta pruning, and advanced game tree search optimization techniques.
            </p>
          </a>
        </div>
        
        <div className="mt-6 text-center">
          <a 
            href="https://github.com/omeedcs?tab=repositories"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center text-sm text-blue-600 dark:text-blue-400 hover:underline"
          >
            View all projects on GitHub →
          </a>
        </div>
      </section>

      {/* Featured In */}
      <section className="mb-20">
        <h2 className="text-2xl font-semibold tracking-tight text-gray-900 dark:text-gray-100 mb-8">
          Featured In
        </h2>
        <div className="space-y-4">
          <a
            href="https://www.cs.utexas.edu/news/2025/utcs-alumnus-changing-paths-and-finding-purpose-tech"
            target="_blank"
            rel="noopener noreferrer"
            className="block group border border-gray-200 dark:border-gray-800 p-6 rounded-lg hover:border-blue-500 dark:hover:border-blue-400 transition-all hover:shadow-md"
          >
            <div className="flex items-start justify-between mb-2">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                UTCS Alumnus: Changing Paths and Finding Purpose in Tech →
              </h3>
              <span className="text-xs text-gray-500 dark:text-gray-500 whitespace-nowrap ml-4">2025</span>
            </div>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              UT Austin Computer Science • Profile on my journey through graduate research, startups, and finding purpose in AI engineering
            </p>
          </a>

          <a
            href="https://www.cs.utexas.edu/news/2021/eighteen-utcs-students-awarded-endowed-presidential-scholarships"
            target="_blank"
            rel="noopener noreferrer"
            className="block group border border-gray-200 dark:border-gray-800 p-6 rounded-lg hover:border-blue-500 dark:hover:border-blue-400 transition-all hover:shadow-md"
          >
            <div className="flex items-start justify-between mb-2">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                Eighteen UTCS Students Awarded Endowed Presidential Scholarships →
              </h3>
              <span className="text-xs text-gray-500 dark:text-gray-500 whitespace-nowrap ml-4">2021</span>
            </div>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              UT Austin Computer Science • Recognized for academic excellence with W.D. Blunk Endowed Presidential Scholarship
            </p>
          </a>
        </div>
      </section>

      {/* Paper Analyses Callout */}
      <section className="mb-20">
        <div className="bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-950/30 dark:to-purple-950/30 border border-blue-200 dark:border-blue-800 rounded-lg p-8">
          <h2 className="text-2xl font-semibold tracking-tight text-gray-900 dark:text-gray-100 mb-4">
            Research Journey
          </h2>
          <p className="text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
            Documenting my evolution from robotic RL (RobIN/AMRL) to efficient ML systems and frontier models. 
            Explore my publications, paper analyses, and current reading list on distributed training, quantization, and inference optimization.
          </p>
          <Link 
            href="/publications"
            className="inline-flex items-center px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors font-medium"
          >
            View Papers & Reading List →
          </Link>
        </div>
      </section>

      {/* Contact/Connect */}
      <section>
        <h2 className="text-2xl font-semibold tracking-tight text-gray-900 dark:text-gray-100 mb-4">
          Let's Connect
        </h2>
        <p className="text-gray-700 dark:text-gray-300 mb-6">
          I'm always happy to discuss research, collaboration opportunities, or interesting problems in AI safety and RL. 
          Reach out if you're working on alignment, want to chat about papers, or just want to geek out about systems and ML infrastructure.
        </p>
        <div className="flex flex-wrap gap-6 text-blue-600 dark:text-blue-400">
          <a href="mailto:omeed26@gmail.com" className="hover:underline">
            Email
          </a>
          <a href="https://www.linkedin.com/in/omeedtehrani" target="_blank" rel="noopener noreferrer" className="hover:underline">
            LinkedIn
          </a>
          <a href="https://x.com/omeedtehrani" target="_blank" rel="noopener noreferrer" className="hover:underline">
            X (Twitter)
          </a>
          <a href="https://github.com/omeedcs" target="_blank" rel="noopener noreferrer" className="hover:underline">
            GitHub
          </a>
        </div>
      </section>
    </div>
  );
}
