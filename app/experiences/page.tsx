'use client';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';

interface Experience {
  id: number;
  title: string;
  company: string;
  location: string;
  period: string;
  description: string;
  type: 'fulltime' | 'intern' | 'research' | 'founding';
}

const experiences: Experience[] = [
  {
    id: 1,
    title: 'Software Engineer, Applied Inference',
    company: 'Capital One',
    location: 'Plano, TX',
    period: 'Jul. 2025 - Present',
    description: 'Model Context Protocol (MCP), Google A2A, Python APIs and AI Infrastructure. Building production AI systems with agent capabilities for cloud metrics.',
    type: 'fulltime'
  },
  {
    id: 2,
    title: 'Founder',
    company: 'From Scratch Podcast',
    location: 'Remote',
    period: 'Jan. 2025 - Present',
    description: 'Co-founded a podcast to spotlight innovators in engineering, research, and startups. Recording conversations with industry leaders and inspiring future computer scientists.',
    type: 'founding'
  },
  {
    id: 3,
    title: 'Software Engineer, Data',
    company: 'Capital One',
    location: 'Plano, TX',
    period: 'Aug. 2024 - Jul. 2025',
    description: 'Designed and built a full-stack, event-driven vulnerability remediation platform (CORE) processing 600+ monthly vulnerabilities from static and infrastructure scans, leveraging Python, EventBridge, PostgreSQL, Redis, and Delta Lake for real-time prioritization and automated workflows, with an interactive React (TypeScript) UI.',
    type: 'fulltime'
  },
  {
    id: 4,
    title: 'Existential Crisis, Traveling & Fishing',
    company: 'Self-Employed',
    location: 'Austin, TX',
    period: 'Jul. 2024 - Aug. 2024',
    description: 'Startup failed but why would I give up, I love engineering. Took time to reflect, travel, and recharge before diving back into building.',
    type: 'founding'
  },
  {
    id: 5,
    title: 'Founding Engineer',
    company: 'Nera',
    location: 'Austin, TX',
    period: 'Oct. 2023 - Jun. 2024',
    description: 'Built a semantic search platform connecting city explorers with local businesses, leveraging embeddings, GPT-4 API and inverted indexing for fast, high-precision retrieval, with a Flask backend, TypeScript UI, and Figma-driven design.',
    type: 'founding'
  },
  {
    id: 6,
    title: 'Software Engineering Intern',
    company: 'Capital One',
    location: 'Dallas, TX',
    period: 'May 2023 - Aug. 2023',
    description: 'Low Latency Data in FSTech. Migrated a legacy Snowflake batch processing system to a real-time Apache Kafka streaming pipeline, programming a Java microservice to process events, slashing latency from 2 seconds to 200ms (90% improvement). Directly reported to Chanakya Kaspa.',
    type: 'intern'
  },
  {
    id: 7,
    title: 'Graduate Research Assistant',
    company: 'UT Austin - RobIN Lab',
    location: 'Austin, TX',
    period: 'Jan. 2023 - May 2023',
    description: 'Evaluated theoretical similarity between MetaWorld manipulation tasks for transfer/multi-task learning in RobIN (Robotic Interactive Intelligence Lab). Researched and implemented novel similarity metrics and PPO policies in PyTorch to optimize transfer learning for robotic tasks using HPC resources (TACC).',
    type: 'research'
  },
  {
    id: 8,
    title: 'Teaching Assistant',
    company: 'UT Austin - CS Department',
    location: 'Austin, TX',
    period: 'Aug. 2022 - Nov. 2022',
    description: 'Taught basic programming and data structures in Java to undergraduate students.',
    type: 'research'
  },
  {
    id: 9,
    title: 'Software Engineering Intern',
    company: 'Capital One',
    location: 'San Francisco, CA',
    period: 'Jun. 2022 - Aug. 2022',
    description: 'Retail Banking Technology. Designed a Java-based AWS Lambda microservice with a RESTful API for real-time OTP generation, enabling secure transactions for small business banks. Used DynamoDB as a NoSQL data store and optimized concurrency with thread pools, improving API response times by 35% and reducing costs by $400K/year. Directly reported to Sreejith Chandran.',
    type: 'intern'
  },
  {
    id: 10,
    title: 'Research Assistant Intern',
    company: 'Stanford University',
    location: 'Remote',
    period: 'Jun. 2022 - Aug. 2022',
    description: 'Worked on scanpy, deep learning and genomic research in Nima\'s lab.',
    type: 'research'
  },
  {
    id: 11,
    title: 'Teaching Assistant',
    company: 'UT Austin - CS Department',
    location: 'Austin, TX',
    period: 'Aug. 2021 - Dec. 2021',
    description: 'Taught basic programming and data structures in Java to undergraduate students.',
    type: 'research'
  },
  {
    id: 12,
    title: 'Teaching Assistant',
    company: 'UT Austin - CS Department',
    location: 'Austin, TX',
    period: 'Jan. 2021 - Jun. 2021',
    description: 'Taught basic programming and data structures in Java to undergraduate students.',
    type: 'research'
  },
  {
    id: 13,
    title: 'Founding Engineer',
    company: 'Dive Chat',
    location: 'Los Angeles, CA',
    period: 'Jun. 2020 - Aug. 2020',
    description: 'Founding Engineer. Helped build baseline group creation and messaging platform using Firebase and React Native.',
    type: 'founding'
  }
];

export default function ExperiencesPage() {
  const [hoveredId, setHoveredId] = useState<number | null>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  const getTypeBadge = (type: string) => {
    switch (type) {
      case 'fulltime': return 'Full-time';
      case 'intern': return 'Internship';
      case 'research': return 'Research';
      case 'founding': return 'Founding';
      default: return '';
    }
  };

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const resizeCanvas = () => {
      canvas.width = canvas.offsetWidth * window.devicePixelRatio;
      canvas.height = canvas.offsetHeight * window.devicePixelRatio;
      ctx.scale(window.devicePixelRatio, window.devicePixelRatio);
    };

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // Minimal particle system for subtle connections
    const particles: Array<{
      x: number;
      y: number;
      vx: number;
      vy: number;
      size: number;
      opacity: number;
    }> = [];

    for (let i = 0; i < 30; i++) {
      particles.push({
        x: Math.random() * canvas.offsetWidth,
        y: Math.random() * canvas.offsetHeight,
        vx: (Math.random() - 0.5) * 0.3,
        vy: (Math.random() - 0.5) * 0.3,
        size: Math.random() * 1.5 + 0.5,
        opacity: Math.random() * 0.3 + 0.1
      });
    }

    let animationFrame: number;

    const animate = () => {
      ctx.clearRect(0, 0, canvas.offsetWidth, canvas.offsetHeight);

      // Update and draw particles
      particles.forEach((particle, i) => {
        particle.x += particle.vx;
        particle.y += particle.vy;

        // Wrap around edges
        if (particle.x < 0) particle.x = canvas.offsetWidth;
        if (particle.x > canvas.offsetWidth) particle.x = 0;
        if (particle.y < 0) particle.y = canvas.offsetHeight;
        if (particle.y > canvas.offsetHeight) particle.y = 0;

        // Draw particle (subtle gray)
        ctx.fillStyle = `rgba(156, 163, 175, ${particle.opacity})`;
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
        ctx.fill();

        // Draw connections (very subtle)
        particles.slice(i + 1).forEach(otherParticle => {
          const dx = particle.x - otherParticle.x;
          const dy = particle.y - otherParticle.y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < 120) {
            ctx.strokeStyle = `rgba(209, 213, 219, ${(1 - distance / 120) * 0.15})`;
            ctx.lineWidth = 0.3;
            ctx.beginPath();
            ctx.moveTo(particle.x, particle.y);
            ctx.lineTo(otherParticle.x, otherParticle.y);
            ctx.stroke();
          }
        });
      });

      animationFrame = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      cancelAnimationFrame(animationFrame);
    };
  }, []);

  return (
    <div className="max-w-5xl mx-auto px-6 py-12 relative">
      {/* Animated background canvas */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 pointer-events-none opacity-20 dark:opacity-10"
        style={{ width: '100%', height: '100%' }}
      />

      <div className="relative z-10">
        {/* Header */}
        <div className="mb-10">
          <Link
            href="/"
            className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100 transition-colors mb-6 inline-block text-sm"
          >
            ← Back to Home
          </Link>
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-6">
            <div>
              <h1 className="text-3xl font-semibold tracking-tight text-gray-900 dark:text-gray-100 mb-2">
                Experience
              </h1>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                {experiences.length} positions · 2020 - Present
              </p>
            </div>
            <a
              href="/Omeed_Tehrani_Resume.pdf"
              download="Omeed_Tehrani_Resume.pdf"
              className="px-5 py-2.5 bg-gray-900 hover:bg-gray-800 dark:bg-gray-100 dark:hover:bg-gray-200 text-white dark:text-gray-900 font-medium rounded border border-gray-900 dark:border-gray-100 transition-colors flex items-center gap-2 w-fit text-sm"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
              Download Resume
            </a>
          </div>
        </div>

        {/* Timeline */}
        <div className="relative max-w-4xl">
          {/* Vertical line */}
          <div className="absolute left-3 top-0 bottom-0 w-px bg-gray-300 dark:bg-gray-700"></div>

          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <div
                key={exp.id}
                className="relative pl-12"
                onMouseEnter={() => setHoveredId(exp.id)}
                onMouseLeave={() => setHoveredId(null)}
              >
                {/* Timeline dot */}
                <div className="absolute left-0 top-1 flex items-center justify-center">
                  <div
                    className={`w-6 h-6 rounded-full border-2 border-gray-900 dark:border-gray-100 bg-white dark:bg-gray-900 transition-all duration-200 ${
                      hoveredId === exp.id ? 'scale-125' : ''
                    }`}
                  />
                </div>

                {/* Experience card */}
                <div
                  className={`bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 p-5 transition-all duration-200 ${
                    hoveredId === exp.id ? 'border-gray-900 dark:border-gray-100 shadow-sm' : ''
                  }`}
                >
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between mb-3 gap-2">
                    <div className="flex-1">
                      <div className="flex items-baseline gap-2 mb-1">
                        <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100">
                          {exp.title}
                        </h3>
                        <span className="text-xs px-2 py-0.5 bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 font-mono">
                          {getTypeBadge(exp.type)}
                        </span>
                      </div>
                      <p className="text-base font-medium text-gray-700 dark:text-gray-300">
                        {exp.company}
                      </p>
                    </div>
                    <div className="text-xs text-gray-500 dark:text-gray-500 sm:text-right space-y-0.5 font-mono">
                      <p>{exp.period}</p>
                      <p>{exp.location}</p>
                    </div>
                  </div>
                  <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                    {exp.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
