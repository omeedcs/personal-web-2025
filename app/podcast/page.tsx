'use client';

import { useState } from 'react';
import Link from 'next/link';

interface Episode {
  id: string;
  videoId: string;
  title: string;
  guest: string;
  date: string;
  description: string;
  learnings: string[];
  thoughts?: string;
}

// Episodes ordered by release date (newest first)
const episodes: Episode[] = [
  {
    id: '1',
    videoId: 'S1oEYM1MGU8',
    title: 'Mojo vs Python: Why the Next Decade of AI Won\'t Look the Same',
    guest: 'Areg Melik-Adamyan',
    date: '2025-09-28',
    description: 'Areg is the Head of Compiler Engineering for the MAX platform at Modular (formerly a long-time leader of AI compiler efforts at Intel). His work spans MLIR enablement, Triton/XPU backends, and end-to-end AI software stacks—sitting right at the intersection of language design, runtime systems, and modern accelerators. We dig into the new role of compilers in AI: why the current compute ecosystem is fragmented, how unification unlocks performance and portability, and what it takes to debug and optimize real LLM/AI workloads.',
    learnings: [
      'Why the AI compute stack is fragmented and how to unify it',
      'The role of MLIR, Triton, and building for heterogeneous hardware',
      'Mojo\'s goals: performance, safety, and approachability for the next decade of AI'
    ],
    thoughts: 'Areg\'s insights into compiler engineering and the future of AI compute were eye-opening. The way Modular is thinking about unifying the fragmented AI stack is revolutionary.'
  },
  {
    id: '2',
    videoId: '0dPUf0Yl2tg',
    title: 'How the Micro:bit is Changing Coding Education Forever',
    guest: 'Thomas Ball',
    date: '2025-04-15',
    description: 'Thomas Ball is reshaping the future of education—one line of code at a time. As a member of the technical team behind the Micro:bit, a device that has empowered millions of kids worldwide to start coding, he\'s bridging the gap between technology and classrooms. We dive into how physical computing, intuitive design, and AI-driven tools are transforming how students learn programming, the evolution of educational platforms like MakeCode and Microcode, and why reimagining education is no longer optional—it\'s urgent.',
    learnings: [
      'Why physical computing unlocks real understanding for students',
      'How drag-and-drop paradigms lower the barrier to entry for programming',
      'The role of AI in classrooms and the future of educational technology'
    ],
    thoughts: 'Thomas\'s work with Micro:bit is literally changing how millions of kids learn to code. The way they\'ve designed tools that feel like play rather than homework is genius.'
  },
  {
    id: '3',
    videoId: 'iJlZ0tFzb84',
    title: 'The Man Behind Software That Impacts Billions (Including You)',
    guest: 'Matt Klein',
    date: '2025-03-10',
    description: 'Matt Klein\'s work has quietly shaped the digital world billions rely on every day. As the creator of Envoy, the service proxy powering massive platforms like Databricks, Google, Airbnb, AWS, Snap Inc., Netflix, he has revolutionized how modern distributed systems communicate. He is now the founder of bitdrift, where he\'s tackling the next big challenge in observability. We discuss the cultural differences in software development, the balance between speed and quality, the impact of AI on coding, and the transition from monolithic to microservices architecture.',
    learnings: [
      'The challenges of building and open-sourcing Envoy proxy at scale',
      'Why observability is critical in modern software systems and how to do it efficiently',
      'Lessons from managing open-source projects and navigating burnout'
    ],
    thoughts: 'Matt\'s journey from building Envoy at Lyft to founding bitdrift shows the evolution of modern infrastructure. His insights on observability and cost efficiency are crucial for anyone building distributed systems.'
  },
  {
    id: '4',
    videoId: 'srHGFHDznFY',
    title: 'How Far Away Are We From Humanoid Robots?',
    guest: 'Gleb Zarin',
    date: '2025-02-24',
    description: 'Gleb Zarin is the lead of locomotion at Humanoid Robotics. We discuss the current state and future of humanoid robotics, addressing challenges such as funding, the impact of generative AI, and the importance of reinforcement learning. Gleb emphasizes the significance of simulation and real-world testing, the role of human oversight, and the potential for robotics to transform industries. We also explore the evolution of robotics, the challenges of deployment, and the future of human-robot interaction.',
    learnings: [
      'The role of reinforcement learning and simulation in robotics development',
      'Why the humanoid form factor matters for real-world deployment',
      'Challenges in translating self-driving experience to humanoid robotics'
    ],
    thoughts: 'Gleb\'s perspective on the state of humanoid robotics was both realistic and optimistic. The parallels he drew between self-driving and humanoid robots helped frame where we are in the journey.'
  },
  {
    id: '5',
    videoId: '7beLWPdRFD4',
    title: 'His Startup Was Acquired By NVIDIA?',
    guest: 'Anish Maddipoti',
    date: '2025-02-10',
    description: 'Anish Maddipoti shares his transformative journey from founding Agora Labs to being acquired by Brev and subsequently Nvidia. He discusses the challenges and learnings from building a startup, the importance of feedback, and the differences between startup cultures in Silicon Valley and Austin. We explore the whirlwind of emotions during the acquisition process, the transition to working at Nvidia, maintaining startup culture within a large corporation, and the evolving landscape of compute technology.',
    learnings: [
      'The reality of building a startup and navigating acquisition talks',
      'Cultural differences between Silicon Valley and Austin startup ecosystems',
      'How to maintain conviction in entrepreneurship while balancing delusion and reality'
    ],
    thoughts: 'Anish\'s candid discussion about the ups and downs of startup life, especially the acquisition process, was incredibly valuable. His journey from pre-med to being acquired by Nvidia is inspiring.'
  }
];

export default function PodcastPage() {
  const [selectedEpisode, setSelectedEpisode] = useState<Episode | null>(null);

  return (
    <div className="max-w-7xl mx-auto px-6 py-12">
      {/* Header */}
      <div className="mb-12">
        <Link
          href="/"
          className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100 transition-colors mb-6 inline-block text-sm"
        >
          ← Back to Home
        </Link>
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-6">
          <div className="flex items-center gap-6">
            <img 
              src="/podcast-logo.png" 
              alt="From Scratch Podcast" 
              className="w-24 h-24 rounded-lg"
            />
            <div>
              <h1 className="text-4xl font-semibold tracking-tight text-gray-900 dark:text-gray-100 mb-3">
                From Scratch Podcast
              </h1>
              <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl">
                Conversations with innovators in engineering, research, and startups. 
                Building things from scratch, one episode at a time.
              </p>
              <p className="text-sm text-gray-500 dark:text-gray-500 mt-2">
                Co-founded with <span className="font-medium">Laith Altarabishi</span> · Creative Director: <span className="font-medium">Jacob Thomas</span>
              </p>
            </div>
          </div>
          <a
            href="https://www.youtube.com/@fspodofficial/videos"
            target="_blank"
            rel="noopener noreferrer"
            className="px-5 py-2.5 bg-red-600 hover:bg-red-700 text-white font-medium rounded flex items-center gap-2 w-fit transition-colors"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
            </svg>
            Watch on YouTube
          </a>
        </div>
      </div>

      {episodes.length === 0 ? (
        <div className="text-center py-20">
          <div className="inline-block p-4 bg-gray-100 dark:bg-gray-800 rounded-full mb-4">
            <svg className="w-12 h-12 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z" />
            </svg>
          </div>
          <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-2">
            Episodes Coming Soon
          </h3>
          <p className="text-gray-600 dark:text-gray-400 mb-6">
            We're recording some amazing conversations. Check back soon or subscribe on YouTube!
          </p>
          <a
            href="https://www.youtube.com/@fspodofficial/videos?sub_confirmation=1"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 bg-gray-900 hover:bg-gray-800 dark:bg-gray-100 dark:hover:bg-gray-200 text-white dark:text-gray-900 font-medium rounded transition-colors"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
            </svg>
            Subscribe on YouTube
          </a>
        </div>
      ) : (
        <div className="grid lg:grid-cols-2 gap-8">
          {/* Episodes List */}
          <div className="space-y-6">
            <h2 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-4">
              Episodes ({episodes.length})
            </h2>
            {episodes.map((episode) => (
              <div
                key={episode.id}
                className={`border rounded-lg p-5 cursor-pointer transition-all ${
                  selectedEpisode?.id === episode.id
                    ? 'border-gray-900 dark:border-gray-100 bg-gray-50 dark:bg-gray-900'
                    : 'border-gray-200 dark:border-gray-800 hover:border-gray-400 dark:hover:border-gray-600'
                }`}
                onClick={() => setSelectedEpisode(episode)}
              >
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-16 h-16 bg-gray-200 dark:bg-gray-800 rounded flex items-center justify-center">
                    <svg className="w-8 h-8 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="text-base font-semibold text-gray-900 dark:text-gray-100 mb-1">
                      {episode.title}
                    </h3>
                    <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">
                      with {episode.guest}
                    </p>
                    <p className="text-xs text-gray-500 dark:text-gray-500 font-mono">
                      {new Date(episode.date).toLocaleDateString('en-US', {
                        month: 'long',
                        day: 'numeric',
                        year: 'numeric'
                      })}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Episode Detail */}
          <div className="lg:sticky lg:top-8 h-fit">
            {selectedEpisode ? (
              <div className="space-y-6">
                {/* Video Player */}
                <div className="aspect-video rounded-lg overflow-hidden bg-black">
                  <iframe
                    width="100%"
                    height="100%"
                    src={`https://www.youtube.com/embed/${selectedEpisode.videoId}`}
                    title={selectedEpisode.title}
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className="w-full h-full"
                  ></iframe>
                </div>

                {/* Episode Info */}
                <div className="border border-gray-200 dark:border-gray-800 rounded-lg p-6">
                  <h2 className="text-2xl font-semibold text-gray-900 dark:text-gray-100 mb-2">
                    {selectedEpisode.title}
                  </h2>
                  <p className="text-gray-600 dark:text-gray-400 mb-4">
                    with {selectedEpisode.guest} · {new Date(selectedEpisode.date).toLocaleDateString('en-US', {
                      month: 'long',
                      day: 'numeric',
                      year: 'numeric'
                    })}
                  </p>
                  <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
                    {selectedEpisode.description}
                  </p>

                  {/* Key Learnings */}
                  <div className="mb-6">
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-3">
                      Key Learnings
                    </h3>
                    <ul className="space-y-2">
                      {selectedEpisode.learnings.map((learning, index) => (
                        <li key={index} className="flex items-start gap-2">
                          <span className="text-blue-600 dark:text-blue-400 mt-1">→</span>
                          <span className="text-gray-700 dark:text-gray-300 text-sm">
                            {learning}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Personal Thoughts */}
                  {selectedEpisode.thoughts && (
                    <div className="border-t border-gray-200 dark:border-gray-800 pt-6">
                      <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-3">
                        My Thoughts
                      </h3>
                      <p className="text-gray-700 dark:text-gray-300 leading-relaxed italic">
                        {selectedEpisode.thoughts}
                      </p>
                    </div>
                  )}
                </div>
              </div>
            ) : (
              <div className="border border-gray-200 dark:border-gray-800 rounded-lg p-12 text-center">
                <div className="inline-block p-4 bg-gray-100 dark:bg-gray-800 rounded-full mb-4">
                  <svg className="w-10 h-10 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5M7.188 2.239l.777 2.897M5.136 7.965l-2.898-.777M13.95 4.05l-2.122 2.122m-5.657 5.656l-2.12 2.122" />
                  </svg>
                </div>
                <p className="text-gray-600 dark:text-gray-400">
                  Select an episode to watch and read the breakdown
                </p>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
