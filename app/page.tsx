"use client";

import Link from "next/link";
import DunningKrugerCurve from "@/components/DunningKrugerCurve";
import { useState, useRef, useEffect } from "react";

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
  
  // Terminal state
  const [terminalHistory, setTerminalHistory] = useState<{type: 'command' | 'output', content: string}[]>([
    { type: 'output', content: 'Welcome to omeed.sh terminal v1.0' },
    { type: 'output', content: 'Type "help" for available commands or just explore!' },
    { type: 'output', content: '' },
    { type: 'command', content: '$ cat intro.txt' },
    { type: 'output', content: "I'm an engineer working on cloud infrastructure and applied inference at a Fortune 500 financial technology company—one that recently made history by completing the first acquisition of a major payment network by a U.S. bank, breaking the Visa-Mastercard duopoly. (Try 'cat acquisition.txt' for details)\n\nBefore computer science, I was pre-med planning to pursue neuroscience, inspired by an obsession with Ben Carson growing up. That fascination with how brains work hasn't changed, just shifted focus.\n\nWhat captivates me now is compressed intelligence: how children learn from remarkably few examples, building rich world models through play rather than memorizing trillions of tokens. Current approaches to machine superintelligence don't map to how we learned as children, and I think that gap - between biological sample efficiency and massive-scale training - is one of the most important problems in AI.\n\nI'm deeply fascinated by Andrej Karpathy's perspective on evolutionary encoding of intelligence, which hints that we might be simulating evolution itself through technological advancement - perhaps finding different paths to the same destination.\n\nLong-term, I want to work on the fundamental mechanisms of learning and intelligence, whether at a frontier lab, research institution, or wherever the most interesting problems are. I hope in my lifetime, we achieve Kardashev scale 2 - harnessing the full energy of our star and becoming a truly spacefaring civilization." },
    { type: 'output', content: '' }
  ]);
  const [currentInput, setCurrentInput] = useState('');
  const [commandHistory, setCommandHistory] = useState<string[]>([]);
  const [historyIndex, setHistoryIndex] = useState(-1);
  const [isMinimized, setIsMinimized] = useState(false);
  const [isMaximized, setIsMaximized] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);
  const terminalRef = useRef<HTMLDivElement>(null);
  
  // Simple file system
  const fileSystem: Record<string, any> = {
    '/': {
      'intro.txt': "I'm an engineer working on cloud infrastructure and applied inference at a Fortune 500 financial technology company—one that recently made history by completing the first acquisition of a major payment network by a U.S. bank, breaking the Visa-Mastercard duopoly. (Try 'cat acquisition.txt' for details)\n\nBefore computer science, I was pre-med planning to pursue neuroscience, inspired by an obsession with Ben Carson growing up. That fascination with how brains work hasn't changed, just shifted focus.\n\nWhat captivates me now is compressed intelligence: how children learn from remarkably few examples, building rich world models through play rather than memorizing trillions of tokens. Current approaches to machine superintelligence don't map to how we learned as children, and I think that gap - between biological sample efficiency and massive-scale training - is one of the most important problems in AI.\n\nI'm deeply fascinated by Andrej Karpathy's perspective on evolutionary encoding of intelligence, which hints that we might be simulating evolution itself through technological advancement - perhaps finding different paths to the same destination.\n\nLong-term, I want to work on the fundamental mechanisms of learning and intelligence, whether at a frontier lab, research institution, or wherever the most interesting problems are. I hope in my lifetime, we achieve Kardashev scale 2 - harnessing the full energy of our star and becoming a truly spacefaring civilization.",
      'acquisition.txt': "Historic Financial Industry Milestone\n\nThe company I work for recently completed an acquisition that marks the first time in modern history a major U.S. bank has gained full ownership of a payment network.\n\nThis breaks Visa and Mastercard's longstanding duopoly and vertically integrates every layer of consumer finance—from banking and lending to payment processing and merchant services.\n\nRead more: https://investor.capitalone.com/news-releases/news-release-details/capital-one-completes-acquisition-discover",
      'education.txt': 'MS & BS in Computer Science - UT Austin\n\nRobIN Laboratory (Robotic Interactive Intelligence)\n- Transfer learning & multi-task RL\n- MetaWorld manipulation benchmark\n- Decision Transformers on robomimic datasets\n- Advised by Dr. Roberto Martin-Martin & Dr. Fernando Fernández Rebollo\n\nAMRL (Autonomous Mobile Robotics Laboratory)\n- Inverse kinodynamics for autonomous vehicle drifting\n- Dr. Joydeep Biswas\n- Selected for Amazon AI Symposium',
      'journey.txt': "My RL journey has been non-linear. Started with robotic manipulation in RobIN lab, building intuition for how agents learn from interaction, credit assignment, and exploration-exploitation tradeoffs.\n\nThose fundamentals from training robotic arms now inform how I think about LLMs as RL agents - applying insights from offline RL and sequence modeling to distributed training infrastructure, model optimization, and efficient inference at scale.\n\nCurrently somewhere past the Valley of Despair on the Dunning-Kruger curve, where the derivative is finally positive again. Climbing toward actual competence one paper at a time.",
      'about.txt': 'Engineer @ Fortune 500 fintech (one that just broke the Visa-Mastercard duopoly). Background in deep RL & academic research. Fascinated by compressed intelligence.\n\nFor the full story: cat acquisition.txt',
      'interests.txt': 'Training & Scaling Frontier Models\nAI Safety & Alignment\nRL from Human Feedback\nML Infrastructure at Scale',
      'contact.txt': 'Email: omeed26@gmail.com\nLinkedIn: linkedin.com/in/omeedtehrani\nGitHub: github.com/omeedcs',
      'skills.txt': 'Python • PyTorch • Distributed Training • LLM Orchestration • Multi-Agent Systems',
      'papers/': {
        'gigaapi.txt': 'GigaAPI: A User-Space API for Multi-GPU Programming (2025)\narXiv:2504.01266',
        'drifting.txt': 'Learning Inverse Kinodynamics for Autonomous Vehicle Drifting (2024)\nAmazon AI Symposium Selection'
      }
    }
  };
  
  const [currentDir, setCurrentDir] = useState('/');
  const [hasInteracted, setHasInteracted] = useState(false);
  
  useEffect(() => {
    // Only auto-scroll after user has interacted (not on initial load)
    if (terminalRef.current && hasInteracted) {
      terminalRef.current.scrollTop = terminalRef.current.scrollHeight;
    }
  }, [terminalHistory, hasInteracted]);
  
  const executeCommand = (cmd: string) => {
    const trimmedCmd = cmd.trim();
    if (!trimmedCmd) return;
    
    setHasInteracted(true); // Mark that user has interacted
    setTerminalHistory(prev => [...prev, { type: 'command', content: `$ ${trimmedCmd}` }]);
    setCommandHistory(prev => [...prev, trimmedCmd]);
    
    // Easter egg: dangerous commands!
    if (trimmedCmd === 'rm -rf /' || trimmedCmd === 'rm -rf *' || trimmedCmd === 'sudo rm -rf /' || trimmedCmd === 'rm -rf ~') {
      setTerminalHistory(prev => [...prev, 
        { type: 'output', content: 'WARNING: Are you sure you want to do this? (y/n)' },
        { type: 'output', content: 'y' },
        { type: 'output', content: 'Deleting /' },
        { type: 'output', content: 'Deleting /home' },
        { type: 'output', content: 'Deleting /usr' },
        { type: 'output', content: 'Deleting /var' },
        { type: 'output', content: 'Deleting portfolio...' },
        { type: 'output', content: 'Deleting everything...' },
        { type: 'output', content: '' },
        { type: 'output', content: '💀 OOPS! You just deleted the entire website!' },
        { type: 'output', content: 'Refresh the page to restore it... if you dare.' }
      ]);
      setCurrentInput('');
      // Nuke the entire page content after a dramatic delay
      setTimeout(() => {
        document.body.innerHTML = '<div style="background: black; color: #00ff00; font-family: monospace; padding: 50px; min-height: 100vh;"><h1>💀 SYSTEM DELETED</h1><p>Just kidding! Refresh the page (Cmd/Ctrl + R) to restore everything.</p><p style="margin-top: 20px; color: #ff0000;">Pro tip: Never run rm -rf / in production 😅</p></div>';
      }, 3000);
      return;
    }
    
    const [command, ...args] = trimmedCmd.split(' ');
    let output = '';
    
    switch(command.toLowerCase()) {
      case 'help':
        output = 'Available commands:\n  ls        - list files\n  cat <file> - read file contents\n  pwd       - print current directory\n  whoami    - display user info\n  clear     - clear terminal\n  echo      - print text\n  date      - show current date\n  skills    - show technical skills\n  contact   - show contact info';
        break;
      case 'whoami':
        output = 'Omeed Tehrani\nEngineer working on AI infrastructure at a Fortune 500 fintech company that just made history breaking the Visa-Mastercard duopoly.\nBackground in deep reinforcement learning and academic research.\n\nTry: cat acquisition.txt';
        break;
      case 'ls':
        const dir = fileSystem[currentDir];
        output = Object.keys(dir).join('  ');
        break;
      case 'pwd':
        output = currentDir;
        break;
      case 'cat':
        if (args.length === 0) {
          output = 'Usage: cat <filename>';
        } else {
          const file = fileSystem[currentDir][args[0]];
          output = file || `cat: ${args[0]}: No such file`;
        }
        break;
      case 'clear':
        setTerminalHistory([]);
        setCurrentInput('');
        return;
      case 'echo':
        output = args.join(' ');
        break;
      case 'date':
        output = new Date().toString();
        break;
      case 'skills':
        output = fileSystem['/']['skills.txt'];
        break;
      case 'contact':
        output = fileSystem['/']['contact.txt'];
        break;
      default:
        output = `Command not found: ${command}\nType 'help' for available commands`;
    }
    
    setTerminalHistory(prev => [...prev, { type: 'output', content: output }]);
    setCurrentInput('');
    setHistoryIndex(-1);
  };
  
  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      executeCommand(currentInput);
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      if (commandHistory.length > 0) {
        const newIndex = historyIndex < commandHistory.length - 1 ? historyIndex + 1 : historyIndex;
        setHistoryIndex(newIndex);
        setCurrentInput(commandHistory[commandHistory.length - 1 - newIndex]);
      }
    } else if (e.key === 'ArrowDown') {
      e.preventDefault();
      if (historyIndex > 0) {
        const newIndex = historyIndex - 1;
        setHistoryIndex(newIndex);
        setCurrentInput(commandHistory[commandHistory.length - 1 - newIndex]);
      } else {
        setHistoryIndex(-1);
        setCurrentInput('');
      }
    }
  };

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
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-medium tracking-tight text-gray-900 dark:text-white mb-3 md:mb-4 leading-tight">
              Omeed Tehrani
            </h1>
            <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-400 italic font-light mb-4">
              just another day in paradise
            </p>
            <div className="flex gap-4 text-gray-500 dark:text-gray-400">
              <a href="mailto:omeed26@gmail.com" className="hover:text-gray-900 dark:hover:text-white transition-colors" title="Email">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path>
                  <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path>
                </svg>
              </a>
              <a href="https://www.linkedin.com/in/omeedtehrani" target="_blank" rel="noopener noreferrer" className="hover:text-gray-900 dark:hover:text-white transition-colors" title="LinkedIn">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </a>
              <a href="https://x.com/omeedtehrani" target="_blank" rel="noopener noreferrer" className="hover:text-gray-900 dark:hover:text-white transition-colors" title="X (Twitter)">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                </svg>
              </a>
              <a href="https://github.com/omeedcs" target="_blank" rel="noopener noreferrer" className="hover:text-gray-900 dark:hover:text-white transition-colors" title="GitHub">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                </svg>
              </a>
              <a href="https://scholar.google.com/citations?user=YOUR_GOOGLE_SCHOLAR_ID" target="_blank" rel="noopener noreferrer" className="hover:text-gray-900 dark:hover:text-white transition-colors" title="Google Scholar">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M5.242 13.769L0 9.5 12 0l12 9.5-5.242 4.269C17.548 11.249 14.978 9.5 12 9.5c-2.977 0-5.548 1.748-6.758 4.269zM12 10a7 7 0 1 0 0 14 7 7 0 0 0 0-14z"/>
                </svg>
              </a>
            </div>
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
          {/* Interactive Terminal */}
          <div className={`bg-gray-800 border border-gray-700 rounded-xl shadow-2xl mb-8 overflow-hidden transition-all duration-300 ${isMinimized ? 'h-12' : isMaximized ? 'h-[700px]' : 'h-[600px]'}`}>
            {/* Terminal Header - macOS Style */}
            <div className="bg-gray-700 px-4 py-3 flex items-center justify-between border-b border-gray-600">
              <div className="flex items-center gap-2">
                <button 
                  onClick={() => setIsMinimized(false)}
                  className="w-3 h-3 rounded-full bg-red-500 hover:bg-red-600 transition-colors"
                  title="Close"
                />
                <button 
                  onClick={() => setIsMinimized(!isMinimized)}
                  className="w-3 h-3 rounded-full bg-yellow-500 hover:bg-yellow-600 transition-colors"
                  title="Minimize"
                />
                <button 
                  onClick={() => setIsMaximized(!isMaximized)}
                  className="w-3 h-3 rounded-full bg-green-500 hover:bg-green-600 transition-colors"
                  title="Maximize"
                />
              </div>
              <div className="text-sm font-medium text-gray-300">omeed@terminal ~ % sh</div>
              <div className="w-16"></div>
            </div>
            
            {!isMinimized && (
              <div className="flex flex-col" style={{ height: 'calc(100% - 52px)' }}>
                {/* Terminal Output */}
                <div 
                  ref={terminalRef}
                  className="flex-1 overflow-y-auto p-6 font-mono text-base leading-relaxed text-green-400 bg-gray-900 cursor-text"
                  onClick={() => inputRef.current?.focus()}
                  style={{ lineHeight: '1.6' }}
                >
                  {terminalHistory.map((item, index) => (
                    <div key={index} className={item.type === 'command' ? 'text-white font-semibold' : 'text-green-400'}>
                      {item.content.split('\n').map((line, i) => (
                        <div key={i} className="mb-1">{line || '\u00A0'}</div>
                      ))}
                    </div>
                  ))}
                  
                  {/* Input Line */}
                  <div className="flex items-center text-white mt-4">
                    <span className="text-green-400 mr-2 font-bold">$</span>
                    <div className="flex-1 flex items-center">
                      <input
                        ref={inputRef}
                        type="text"
                        value={currentInput}
                        onChange={(e) => setCurrentInput(e.target.value)}
                        onKeyDown={handleKeyDown}
                        className="flex-1 bg-transparent outline-none border-none text-white font-mono caret-green-400"
                        spellCheck={false}
                        placeholder="type a command..."
                        style={{ caretColor: '#4ade80' }}
                      />
                      <span className="animate-pulse text-green-400 ml-1">▋</span>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
          
          {/* Hint to explore terminal */}
          <div className="mt-6 text-center text-sm text-gray-500 dark:text-gray-400 italic">
            💡 Try typing <code className="bg-gray-100 dark:bg-gray-800 px-2 py-0.5 rounded">ls</code> to see more files, or <code className="bg-gray-100 dark:bg-gray-800 px-2 py-0.5 rounded">help</code> for commands
          </div>

          {/* Life Goals */}
          <div className="mt-12">
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6">Life Goals</h2>
            <div className="space-y-4 text-sm">
              <div className="border-l-2 border-gray-300 dark:border-gray-700 pl-4">
                <h3 className="font-semibold text-gray-900 dark:text-white mb-1">Contribute to Artificial Super Intelligence</h3>
                <p className="text-gray-600 dark:text-gray-400">Hopefully a frontier lab.</p>
              </div>
              
              <div className="border-l-2 border-gray-300 dark:border-gray-700 pl-4">
                <h3 className="font-semibold text-gray-900 dark:text-white mb-1">Conquer K2 Mountain</h3>
                <p className="text-gray-600 dark:text-gray-400">8,611m. Other mountains are passively dangerous, but K2 actively tries to kill you.</p>
              </div>
            </div>
          </div>
          
          {/* Education & Research Background */}
          <div className="mt-12">
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6">Education & Research Background</h2>
            
            <div className="space-y-4 text-gray-700 dark:text-gray-300 leading-relaxed">
              <p>
                I hold both MS and BS degrees in Computer Science from UT Austin, where I conducted research in the <span className="font-semibold text-gray-900 dark:text-white">RobIN Laboratory</span> (Robotic Interactive Intelligence) 
                on transfer learning, multi-task RL using the MetaWorld manipulation benchmark suite, and return-conditioned sequence modeling with Decision Transformers on robomimic datasets, 
                advised by <span className="font-semibold text-gray-900 dark:text-white">Dr. Roberto Martin-Martin</span> and visiting scholar <span className="font-semibold text-gray-900 dark:text-white">Dr. Fernando Fernández Rebollo</span>.
              </p>
              
              <p>
                I also worked in the <span className="font-semibold text-gray-900 dark:text-white">AMRL</span> (Autonomous Mobile Robotics Laboratory) with <span className="font-semibold text-gray-900 dark:text-white">Dr. Joydeep Biswas</span> on inverse kinodynamics 
                for autonomous vehicle drifting. My work was selected for presentation at an <span className="font-semibold text-gray-900 dark:text-white">Amazon AI Symposium</span>.
              </p>
              
              <p>
                I served as a teaching assistant for three semesters under <a href="https://www.linkedin.com/in/chandjohn/" target="_blank" rel="noopener noreferrer" className="font-semibold text-gray-900 dark:text-white hover:underline">Dr. Chand John</a>, 
                who has been a mentor for quite some time and continues to inspire me.
              </p>
            </div>
            
            <div className="mt-8">
              <DunningKrugerCurve />
              <div className="mt-6 bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-lg p-6">
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                  My journey through reinforcement learning has been non-linear. Starting with robotic manipulation and policy learning in the RobIN lab, 
                  I built intuition for how agents learn from interaction, credit assignment, and the exploration-exploitation tradeoff. Those fundamentals 
                  from training robotic arms now inform how I think about LLMs as RL agents, applying insights from offline RL and sequence modeling to 
                  distributed training infrastructure, model optimization, and efficient inference at scale. I'm somewhere past the Valley of Despair on the 
                  Dunning-Kruger curve, where the derivative is finally positive again, climbing toward actual competence one paper at a time.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Research Interests */}
      <section className="mb-20">
        <h2 className="text-2xl font-semibold tracking-tight text-gray-900 dark:text-white mb-6">
          Research Interests
        </h2>
        <div className="grid md:grid-cols-2 gap-4 text-sm">
          <div className="border-l-2 border-gray-300 dark:border-gray-700 pl-4">
            <h3 className="font-semibold text-gray-900 dark:text-white mb-1">Training & Scaling Frontier Models</h3>
            <p className="text-gray-600 dark:text-gray-400">Distributed training, optimization algorithms, systems challenges of scaling to AGI.</p>
          </div>
          
          <div className="border-l-2 border-gray-300 dark:border-gray-700 pl-4">
            <h3 className="font-semibold text-gray-900 dark:text-white mb-1">AI Safety & Alignment</h3>
            <p className="text-gray-600 dark:text-gray-400">How frontier models work and ensuring they do what we want.</p>
          </div>
          
          <div className="border-l-2 border-gray-300 dark:border-gray-700 pl-4">
            <h3 className="font-semibold text-gray-900 dark:text-white mb-1">RL from Human Feedback</h3>
            <p className="text-gray-600 dark:text-gray-400">Applying robotic RL insights to align LLMs with human values.</p>
          </div>
          
          <div className="border-l-2 border-gray-300 dark:border-gray-700 pl-4">
            <h3 className="font-semibold text-gray-900 dark:text-white mb-1">ML Infrastructure at Scale</h3>
            <p className="text-gray-600 dark:text-gray-400">Multi-GPU orchestration, efficient inference, production deployment.</p>
          </div>
        </div>
      </section>

      {/* Current Work Section */}
      <section className="mb-20">
        <h2 className="text-2xl font-semibold tracking-tight text-gray-900 dark:text-white mb-6">
          Current Work
        </h2>
        <div className="space-y-4 text-sm">
          <div className="border-l-2 border-gray-300 dark:border-gray-700 pl-4">
            <h3 className="font-semibold text-gray-900 dark:text-white">Applied Inference @ Capital One</h3>
            <p className="text-gray-500 dark:text-gray-400 text-xs mb-1">Software Engineer, Applied Inference • July 2025 - Present</p>
            <p className="text-gray-600 dark:text-gray-400">Production AI infrastructure and agentic systems. Model Context Protocol integrations, Google A2A agent communication, Python APIs for LLM orchestration.</p>
          </div>

          <div className="border-l-2 border-gray-300 dark:border-gray-700 pl-4">
            <h3 className="font-semibold text-gray-900 dark:text-white">Independent Research</h3>
            <p className="text-gray-500 dark:text-gray-400 text-xs mb-1">Self-Directed • Ongoing</p>
            <p className="text-gray-600 dark:text-gray-400">Efficient ML systems papers—distributed training, quantization, inference acceleration. Implementing techniques from scratch.</p>
          </div>

          <div className="border-l-2 border-gray-300 dark:border-gray-700 pl-4">
            <h3 className="font-semibold text-gray-900 dark:text-white">From Scratch Podcast</h3>
            <p className="text-gray-500 dark:text-gray-400 text-xs mb-1">Founder • January 2025 - Present</p>
            <p className="text-gray-600 dark:text-gray-400">Long-form conversations exploring first-principles thinking in AI and systems design.</p>
          </div>

          <div className="border-l-2 border-gray-300 dark:border-gray-700 pl-4">
            <a href="https://constellation-io.com" target="_blank" rel="noopener noreferrer" className="font-semibold text-gray-900 dark:text-white hover:underline">
              Constellation 🛰️
            </a>
            <p className="text-gray-500 dark:text-gray-400 text-xs mb-1">Side Project • 2024 - Present</p>
            <p className="text-gray-600 dark:text-gray-400 mb-2">AI-powered satellite network systems for space telecommunications. <Link href="/constellation-io/demo" className="underline">Demo →</Link></p>
          </div>
        </div>
      </section>

      {/* Selected Publications & Papers */}
      <section className="mb-20">
        <h2 className="text-2xl font-semibold tracking-tight text-gray-900 dark:text-white mb-6">
          Selected Publications & Research
        </h2>
        <div className="space-y-4 text-sm">
          <div className="border-l-2 border-gray-300 dark:border-gray-700 pl-4">
            <a href="https://arxiv.org/abs/2504.01266" target="_blank" rel="noopener noreferrer" className="font-semibold text-gray-900 dark:text-white hover:underline">
              GigaAPI: A User-Space API for Multi-GPU Programming →
            </a>
            <p className="text-gray-500 dark:text-gray-400 text-xs mb-1">arXiv:2504.01266 • 2025</p>
            <p className="text-gray-600 dark:text-gray-400">User-space API for multi-GPU programming. Abstracts CUDA complexities for parallel systems.</p>
          </div>

          <div className="border-l-2 border-gray-300 dark:border-gray-700 pl-4">
            <a href="https://arxiv.org/abs/2402.14928" target="_blank" rel="noopener noreferrer" className="font-semibold text-gray-900 dark:text-white hover:underline">
              Learning Inverse Kinodynamics for Autonomous Vehicle Drifting →
            </a>
            <p className="text-gray-500 dark:text-gray-400 text-xs mb-1">UT Austin AMRL • 2024 • Amazon AI Symposium</p>
            <p className="text-gray-600 dark:text-gray-400">Data-driven kinodynamic model learning for high-speed autonomous drifting.</p>
          </div>

          <div className="border-l-2 border-gray-300 dark:border-gray-700 pl-4">
            <a href="https://github.com/omeedcs/autonomous-vehicle-drifting" target="_blank" rel="noopener noreferrer" className="font-semibold text-gray-900 dark:text-white hover:underline">
              Deep RL for Autonomous Drifting (WIP) →
            </a>
            <p className="text-gray-500 dark:text-gray-400 text-xs mb-1">2024 • Building on IKD Work</p>
            <p className="text-gray-600 dark:text-gray-400">End-to-end deep RL with SAC. 49% faster completion, outperforming model-based control.</p>
          </div>

          <div className="border-l-2 border-gray-300 dark:border-gray-700 pl-4">
            <a href="https://github.com/omeedcs/autonomous-vehicle-drifting/tree/main/drift_gym" target="_blank" rel="noopener noreferrer" className="font-semibold text-gray-900 dark:text-white hover:underline">
              Drift Gym (WIP) →
            </a>
            <p className="text-gray-500 dark:text-gray-400 text-xs mb-1">2024 • Open Source</p>
            <p className="text-gray-600 dark:text-gray-400">Research-grade Gymnasium environment with Pacejka tire dynamics and curriculum learning.</p>
          </div>

          <div className="border-l-2 border-gray-300 dark:border-gray-700 pl-4">
            <a href="/decision-trans" className="font-semibold text-gray-900 dark:text-white hover:underline">
              Decision Transformers for Robotic Imitation Learning →
            </a>
            <p className="text-gray-500 dark:text-gray-400 text-xs mb-1">UT Austin RobIN Lab • 2023</p>
            <p className="text-gray-600 dark:text-gray-400">Return-conditioned imitation learning on mixed-quality robomimic datasets.</p>
          </div>
        </div>
      </section>

      {/* Technical Projects */}
      <section className="mb-20">
        <h2 className="text-2xl font-semibold tracking-tight text-gray-900 dark:text-white mb-6">
          Technical Projects
        </h2>
        <div className="space-y-3 text-sm">
          <div className="border-l-2 border-gray-300 dark:border-gray-700 pl-4">
            <a href="https://github.com/omeedcs/tinyrl-tetris" target="_blank" rel="noopener noreferrer" className="font-semibold text-gray-900 dark:text-white hover:underline">TinyRL-Tetris</a>
            <p className="text-gray-600 dark:text-gray-400">Deep RL algorithms from scratch for Tetris. DQN, policy gradients, reward shaping.</p>
          </div>

          <div className="border-l-2 border-gray-300 dark:border-gray-700 pl-4">
            <a href="https://omeedcs.github.io/starlink-satellite-simulator/" target="_blank" rel="noopener noreferrer" className="font-semibold text-gray-900 dark:text-white hover:underline">Starlink Satellite Simulator</a>
            <p className="text-gray-600 dark:text-gray-400">Satellite communication simulator with RF physics and real-time link analysis.</p>
          </div>

          <div className="border-l-2 border-gray-300 dark:border-gray-700 pl-4">
            <a href="https://github.com/omeedcs/block-wise-hierarchal-transformer" target="_blank" rel="noopener noreferrer" className="font-semibold text-gray-900 dark:text-white hover:underline">Block-Wise Hierarchical Transformer</a>
            <p className="text-gray-600 dark:text-gray-400">PyTorch chatbot with self-attention. 1.32 perplexity.</p>
          </div>

          <div className="border-l-2 border-gray-300 dark:border-gray-700 pl-4">
            <a href="https://github.com/omeedcs/MemPharos" target="_blank" rel="noopener noreferrer" className="font-semibold text-gray-900 dark:text-white hover:underline">MemPharos</a>
            <p className="text-gray-600 dark:text-gray-400">User-space paging system. OS internals and virtual memory management.</p>
          </div>

          <div className="border-l-2 border-gray-300 dark:border-gray-700 pl-4">
            <a href="https://github.com/omeedcs/RemoteSyncFS" target="_blank" rel="noopener noreferrer" className="font-semibold text-gray-900 dark:text-white hover:underline">RemoteSyncFS</a>
            <p className="text-gray-600 dark:text-gray-400">FUSE-based distributed file system with remote synchronization.</p>
          </div>

          <div className="border-l-2 border-gray-300 dark:border-gray-700 pl-4">
            <a href="https://github.com/omeedcs/StrategoSpheres" target="_blank" rel="noopener noreferrer" className="font-semibold text-gray-900 dark:text-white hover:underline">StrategoSpheres</a>
            <p className="text-gray-600 dark:text-gray-400">Adversarial search algorithms. Minimax, alpha-beta pruning, game tree optimization.</p>
          </div>
        </div>
        
        <div className="mt-4">
          <a href="https://github.com/omeedcs?tab=repositories" target="_blank" rel="noopener noreferrer" className="text-sm text-gray-900 dark:text-white hover:underline">
            View all projects on GitHub →
          </a>
        </div>
      </section>

      {/* Featured In */}
      <section className="mb-20">
        <h2 className="text-2xl font-semibold tracking-tight text-gray-900 dark:text-white mb-6">
          Featured In
        </h2>
        <div className="space-y-3 text-sm">
          <div className="border-l-2 border-gray-300 dark:border-gray-700 pl-4">
            <a href="https://www.geekwire.com/2025/startup-radar-meet-5-new-early-stage-tech-companies-building-in-seattle/" target="_blank" rel="noopener noreferrer" className="font-semibold text-gray-900 dark:text-white hover:underline">
              Startup Radar: Meet 5 new early-stage tech companies building in Seattle
            </a>
            <p className="text-gray-500 dark:text-gray-400 text-xs mb-1">GeekWire • 2025</p>
            <p className="text-gray-600 dark:text-gray-400">Featured in GeekWire's spotlight on emerging Seattle tech startups.</p>
          </div>

          <div className="border-l-2 border-gray-300 dark:border-gray-700 pl-4">
            <a href="https://www.cs.utexas.edu/news/2025/utcs-alumnus-changing-paths-and-finding-purpose-tech" target="_blank" rel="noopener noreferrer" className="font-semibold text-gray-900 dark:text-white hover:underline">
              UTCS Alumnus on Changing Paths and Finding Purpose in Tech
            </a>
            <p className="text-gray-500 dark:text-gray-400 text-xs mb-1">UT Austin Computer Science • 2025</p>
            <p className="text-gray-600 dark:text-gray-400">Profile on my journey through graduate research, startups, and finding purpose in AI engineering.</p>
          </div>

          <div className="border-l-2 border-gray-300 dark:border-gray-700 pl-4">
            <a href="https://www.cs.utexas.edu/news/2021/eighteen-utcs-students-awarded-endowed-presidential-scholarships" target="_blank" rel="noopener noreferrer" className="font-semibold text-gray-900 dark:text-white hover:underline">
              Eighteen UTCS Students Awarded Endowed Presidential Scholarships
            </a>
            <p className="text-gray-500 dark:text-gray-400 text-xs mb-1">UT Austin Computer Science • 2021</p>
            <p className="text-gray-600 dark:text-gray-400">Recognized for academic excellence with W.D. Blunk Endowed Presidential Scholarship.</p>
          </div>

          <div className="border-l-2 border-gray-300 dark:border-gray-700 pl-4">
            <a href="https://cns.utexas.edu/events/public-event/ut-austin-amazon-science-hub-symposium-ai-foundation-models" target="_blank" rel="noopener noreferrer" className="font-semibold text-gray-900 dark:text-white hover:underline">
              Amazon AI Symposium
            </a>
            <p className="text-gray-500 dark:text-gray-400 text-xs mb-1">UT Austin Amazon Science Hub • 2024</p>
            <p className="text-gray-600 dark:text-gray-400">Selected for presentation on autonomous vehicle drifting research.</p>
          </div>
        </div>
      </section>

    </div>
  );
}
