"use client";

import Link from "next/link";
import DunningKrugerCurve from "@/components/DunningKrugerCurve";
import { useState } from "react";

const AI_COMPANIES = [
  { name: "OpenAI", logo: "https://cdn.simpleicons.org/openai/412991" },
  { name: "Anthropic", logo: "https://cdn.simpleicons.org/anthropic/000000" },
  { name: "Google", logo: "https://cdn.simpleicons.org/google/4285F4" },
  { name: "Meta", logo: "https://cdn.simpleicons.org/meta/0668E1" },
  { name: "Microsoft", logo: "https://cdn.simpleicons.org/microsoft/5E5E5E" },
  { name: "Apple", logo: "https://cdn.simpleicons.org/apple/000000" },
  { name: "NVIDIA", logo: "https://cdn.simpleicons.org/nvidia/76B900" },
  { name: "Tesla", logo: "https://cdn.simpleicons.org/tesla/CC0000" },
  { name: "Amazon", logo: "https://cdn.simpleicons.org/amazon/FF9900" },
  { name: "Baidu", logo: "https://cdn.simpleicons.org/baidu/2319DC" },
  { name: "Stanford", logo: "https://cdn.simpleicons.org/stanford/8C1515" },
  { name: "MIT", logo: "https://cdn.simpleicons.org/mit/A31F34" },
  { name: "Berkeley", logo: "https://cdn.simpleicons.org/berkeley/003262" },
  { name: "CMU", logo: "https://cdn.simpleicons.org/carnegiemellon/C41230" },
  { name: "Hugging Face", logo: "https://cdn.simpleicons.org/huggingface/FFD21E" },
  { name: "Cohere", logo: "https://cdn.simpleicons.org/cohere/39594C" },
  { name: "Mistral AI", logo: "https://cdn.simpleicons.org/mistral/FF7000" },
  { name: "Stability AI", logo: "https://cdn.simpleicons.org/stability/000000" },
];

interface Coin {
  id: number;
  x: number;
  y: number;
  company: string;
  logo: string;
  angle: number;
  velocity: number;
}

export default function Home() {
  const [coins, setCoins] = useState<Coin[]>([]);
  const [coinId, setCoinId] = useState(0);

  const handleProfileClick = (e: React.MouseEvent<HTMLImageElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;

    // Create 12 coins in a circle pattern
    const newCoins: Coin[] = [];
    const numCoins = 12;
    
    for (let i = 0; i < numCoins; i++) {
      const angle = (i / numCoins) * Math.PI * 2;
      const velocity = 200 + Math.random() * 150;
      const companyData = AI_COMPANIES[Math.floor(Math.random() * AI_COMPANIES.length)];
      
      newCoins.push({
        id: coinId + i,
        x: centerX,
        y: centerY,
        company: companyData.name,
        logo: companyData.logo,
        angle,
        velocity
      });
    }

    setCoins(prev => [...prev, ...newCoins]);
    setCoinId(prev => prev + numCoins);

    // Remove coins after animation
    setTimeout(() => {
      setCoins(prev => prev.filter(coin => !newCoins.find(nc => nc.id === coin.id)));
    }, 2500);
  };

  return (
    <div className="max-w-4xl mx-auto px-6 py-16">
      {/* Floating Coins */}
      {coins.map(coin => {
        const endX = Math.cos(coin.angle) * coin.velocity;
        const endY = Math.sin(coin.angle) * coin.velocity;
        
        return (
          <div
            key={coin.id}
            className="fixed pointer-events-none z-50 animate-coin-fly"
            style={{
              left: coin.x - 32,
              top: coin.y - 32,
              '--end-x': `${endX}px`,
              '--end-y': `${endY}px`,
            } as React.CSSProperties}
          >
            <div 
              className="relative w-16 h-16 rounded-full bg-gradient-to-br from-yellow-300 via-yellow-400 to-yellow-600 shadow-xl border-4 border-yellow-500 flex items-center justify-center p-2 animate-coin-spin"
            >
              <img 
                src={coin.logo} 
                alt={coin.company}
                className="w-full h-full object-contain"
              />
            </div>
          </div>
        );
      })}

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
              onClick={handleProfileClick}
              className="w-20 h-20 sm:w-28 sm:h-28 md:w-40 md:h-40 rounded-full object-cover border-3 sm:border-4 border-gray-200 dark:border-gray-800 shadow-lg cursor-pointer hover:scale-105 transition-transform active:scale-95"
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
              Training & Scaling Frontier Models
            </h3>
            <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
              How to make training runs cheaper and faster—studying distributed training, optimization algorithms, and the systems challenges of scaling to AGI.
            </p>
          </div>
          
          <div className="border border-gray-200 dark:border-gray-800 p-6 rounded-lg hover:border-purple-500 dark:hover:border-purple-500 transition-colors">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-3">
              AI Safety & Alignment
            </h3>
            <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
              Understanding how frontier models actually work and making sure they do what we want—especially as they get closer to human-level intelligence.
            </p>
          </div>
          
          <div className="border border-gray-200 dark:border-gray-800 p-6 rounded-lg hover:border-green-500 dark:hover:border-green-500 transition-colors">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-3">
              RL from Human Feedback
            </h3>
            <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
              Came from robotic RL research, now interested in how those same ideas apply to aligning LLMs and future AGI systems with human values.
            </p>
          </div>
          
          <div className="border border-gray-200 dark:border-gray-800 p-6 rounded-lg hover:border-orange-500 dark:hover:border-orange-500 transition-colors">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-3">
              ML Infrastructure at Scale
            </h3>
            <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
              Building the systems that make frontier research possible—multi-GPU orchestration, efficient inference, and production deployment challenges.
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

          <div className="border-l-4 border-indigo-600 pl-6 bg-indigo-50/20 dark:bg-indigo-950/10 py-4 rounded-r">
            <a 
              href="https://constellation-io.com"
              target="_blank"
              rel="noopener noreferrer"
              className="group"
            >
              <h3 className="text-xl font-medium text-gray-900 dark:text-gray-100 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors mb-2">
                Constellation 🛰️
              </h3>
            </a>
            <p className="text-gray-600 dark:text-gray-400 text-sm mb-3">Side Project with Friends • 2024 - Present</p>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
              Working on an interesting space project with some friends—building AI-powered satellite network systems 
              for resilient space telecommunications. Exploring how machine learning can optimize orbital communications 
              and mesh network routing at scale. Still figuring things out, but it's a fun excuse to learn about space systems.
            </p>
            <Link 
              href="/constellation-io/demo"
              className="inline-flex items-center px-4 py-2 bg-indigo-600 hover:bg-indigo-700 text-white text-sm rounded-lg transition-colors font-medium shadow-sm hover:shadow-md"
            >
              Watch AI Demo →
            </Link>
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
              Demonstrated successful obstacle avoidance through learned curvature correction.
            </p>
          </div>

          <div className="border-l-2 border-green-300 dark:border-green-700 pl-6 hover:border-green-500 dark:hover:border-green-400 transition-colors bg-green-50/30 dark:bg-green-950/20 py-4 rounded-r">
            <div className="flex items-start gap-3 mb-2">
              <span className="text-xs bg-yellow-100 dark:bg-yellow-900 text-yellow-700 dark:text-yellow-300 px-2 py-1 rounded font-semibold">
                🚧 WORK IN PROGRESS
              </span>
            </div>
            <a 
              href="https://github.com/omeedcs/autonomous-vehicle-drifting"
              target="_blank"
              rel="noopener noreferrer"
              className="group"
            >
              <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 group-hover:text-green-600 dark:group-hover:text-green-400 transition-colors mb-2">
                Deep RL for Autonomous Drifting: Outperforming Model-Based Control →
              </h3>
            </a>
            <p className="text-sm text-gray-500 dark:text-gray-500 mb-2">Currently Working On • 2024 • Building on IKD Work</p>
            <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed mb-3">
              Extending my IKD research with end-to-end deep reinforcement learning using Soft Actor-Critic (SAC). 
              Preliminary results show <span className="font-semibold text-gray-900 dark:text-gray-100">49% faster task completion</span> (27 vs 53 steps) 
              while maintaining 100% success rate—significantly outperforming both baseline controllers and learned inverse dynamics. 
              Exploring whether RL can discover superior trajectories for complex dynamic tasks compared to hand-engineered approaches.
            </p>
            <div className="flex gap-2 flex-wrap">
              <span className="text-xs bg-green-100 dark:bg-green-900 text-green-700 dark:text-green-300 px-2 py-1 rounded">SAC</span>
              <span className="text-xs bg-green-100 dark:bg-green-900 text-green-700 dark:text-green-300 px-2 py-1 rounded">Off-Policy RL</span>
              <span className="text-xs bg-green-100 dark:bg-green-900 text-green-700 dark:text-green-300 px-2 py-1 rounded">F1/10</span>
            </div>
          </div>

          <div className="border-l-2 border-orange-300 dark:border-orange-700 pl-6 hover:border-orange-500 dark:hover:border-orange-400 transition-colors bg-orange-50/30 dark:bg-orange-950/20 py-4 rounded-r">
            <div className="flex items-start gap-3 mb-2">
              <span className="text-xs bg-yellow-100 dark:bg-yellow-900 text-yellow-700 dark:text-yellow-300 px-2 py-1 rounded font-semibold">
                🚧 WORK IN PROGRESS
              </span>
            </div>
            <a 
              href="https://github.com/omeedcs/autonomous-vehicle-drifting/tree/main/drift_gym"
              target="_blank"
              rel="noopener noreferrer"
              className="group"
            >
              <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 group-hover:text-orange-600 dark:group-hover:text-orange-400 transition-colors mb-2">
                Drift Gym: A Production-Grade Environment for Autonomous Drifting Research →
              </h3>
            </a>
            <p className="text-sm text-gray-500 dark:text-gray-500 mb-2">Active Development • 2024</p>
            <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed mb-3">
              Building a research-grade Gymnasium environment for autonomous drifting with realistic <span className="font-semibold text-gray-900 dark:text-gray-100">Pacejka tire dynamics</span>, 
              10+ diverse scenarios (loose, tight, slalom, figure-8), curriculum learning, domain randomization, and full YAML configuration. 
              Designing for reproducible RL research with proper observation spaces, reward shaping for drift control, and deterministic seeding. 
              Using this as the foundation for my continued deep RL experiments on autonomous drifting.
            </p>
            <div className="flex gap-2 flex-wrap">
              <span className="text-xs bg-orange-100 dark:bg-orange-900 text-orange-700 dark:text-orange-300 px-2 py-1 rounded">Gymnasium</span>
              <span className="text-xs bg-orange-100 dark:bg-orange-900 text-orange-700 dark:text-orange-300 px-2 py-1 rounded">Pacejka Model</span>
              <span className="text-xs bg-orange-100 dark:bg-orange-900 text-orange-700 dark:text-orange-300 px-2 py-1 rounded">Curriculum Learning</span>
              <span className="text-xs bg-orange-100 dark:bg-orange-900 text-orange-700 dark:text-orange-300 px-2 py-1 rounded">Open Source</span>
            </div>
          </div>

          <div className="border-l-2 border-gray-300 dark:border-gray-700 pl-6 hover:border-blue-500 dark:hover:border-blue-400 transition-colors">
            <a 
              href="/decision-trans"
              className="group"
            >
              <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors mb-2">
                Decision Transformers for Robotic Imitation Learning →
              </h3>
            </a>
            <p className="text-sm text-gray-500 dark:text-gray-500 mb-2">UT Austin RobIN Lab • 2023</p>
            <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
              Extended Decision Transformer architecture for return-conditioned imitation learning on mixed-quality robomimic datasets. 
              Achieved significant performance improvements over behavioral cloning baselines on manipulation tasks.
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
