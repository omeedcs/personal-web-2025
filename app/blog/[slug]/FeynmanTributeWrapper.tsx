"use client";

import { useEffect, useRef, useState } from "react";

interface FeynmanTributeWrapperProps {
  children: React.ReactNode;
}

export default function FeynmanTributeWrapper({ children }: FeynmanTributeWrapperProps) {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [isScrollVisible, setIsScrollVisible] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [showPlayButton, setShowPlayButton] = useState(false);

  const handlePlayPause = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
        setIsPlaying(false);
      } else {
        audioRef.current.play();
        setIsPlaying(true);
        setShowPlayButton(false);
      }
    }
  };

  useEffect(() => {
    // Auto-play music with a slight delay
    const timer = setTimeout(() => {
      if (audioRef.current) {
        audioRef.current.volume = 0.3; // Set to 30% volume
        audioRef.current.play()
          .then(() => {
            setIsPlaying(true);
          })
          .catch(err => {
            console.log("Audio autoplay prevented:", err);
            setShowPlayButton(true);
          });
      }
    }, 500);

    // Trigger scroll animation by adding the visible class
    const scrollTimer = setTimeout(() => {
      const scrollElement = document.querySelector('.scroll-letter-inner');
      if (scrollElement) {
        scrollElement.classList.add('visible');
      }
      setIsScrollVisible(true);
    }, 1000);

    return () => {
      clearTimeout(timer);
      clearTimeout(scrollTimer);
    };
  }, []);

  return (
    <>
      {/* Background Audio */}
      <audio ref={audioRef} loop>
        <source src="/music/Primavera.mp3" type="audio/mpeg" />
      </audio>

      {/* Play Button */}
      {showPlayButton && (
        <button
          onClick={handlePlayPause}
          className="fixed bottom-8 right-8 z-50 bg-blue-600 hover:bg-blue-700 text-white rounded-full p-4 shadow-lg transition-all duration-300 hover:scale-110"
          aria-label="Play background music"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        </button>
      )}

      {/* Custom Styles for Scroll Animation */}
      <style jsx global>{`
        .scroll-letter-container {
          perspective: 1500px;
          display: flex;
          justify-content: center;
          margin: 4rem 0;
        }

        .scroll-letter-inner {
          background: linear-gradient(135deg, #f5f3e8 0%, #ebe8d8 100%);
          border-radius: 4px;
          padding: 3rem 2.5rem;
          box-shadow: 
            0 10px 40px rgba(0, 0, 0, 0.15),
            inset 0 1px 2px rgba(255, 255, 255, 0.5);
          max-width: 800px;
          width: 100%;
          position: relative;
          transform-origin: center top;
          transform: rotateX(90deg) scale(0.8);
          opacity: 0;
          transition: transform 2s ease-out, opacity 2s ease-out;
          font-family: 'Georgia', serif;
        }

        .scroll-letter-inner.visible {
          transform: rotateX(0deg) scale(1);
          opacity: 1;
        }

        .scroll-letter-inner::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          height: 100%;
          background: 
            repeating-linear-gradient(
              0deg,
              transparent,
              transparent 30px,
              rgba(139, 69, 19, 0.03) 30px,
              rgba(139, 69, 19, 0.03) 31px
            );
          pointer-events: none;
        }

        .scroll-content {
          position: relative;
          z-index: 1;
        }

        .scroll-content p {
          color: #2c1810;
          line-height: 1.9;
          margin-bottom: 1.5rem;
          font-size: 1.1rem;
          letter-spacing: 0.3px;
        }

        .scroll-content strong {
          font-weight: 600;
          color: #1a0f0a;
        }

        .feynman-hero {
          position: relative;
          width: 100%;
          max-width: 350px;
          margin: 0 0 2rem 2rem;
          float: right;
          border-radius: 12px;
          overflow: hidden;
          box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3);
          shape-outside: margin-box;
        }

        @media (max-width: 768px) {
          .feynman-hero {
            float: none;
            margin: 2rem auto 3rem;
            max-width: 300px;
          }
        }

        .feynman-hero img {
          display: block;
          width: 100% !important;
          height: auto !important;
          object-fit: cover;
        }

        .tribute-title {
          text-align: center;
          margin: 2rem 0;
          font-size: 2.5rem;
          font-weight: 700;
          background: linear-gradient(135deg, #1a1a1a 0%, #4a4a4a 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        @media (min-width: 768px) {
          .tribute-title {
            font-size: 3rem;
          }
        }

        @media (prefers-color-scheme: dark) {
          .scroll-letter-inner {
            background: linear-gradient(135deg, #3a3a2a 0%, #2a2a1a 100%);
          }

          .scroll-content p {
            color: #e8e6d8;
          }

          .scroll-content strong {
            color: #f5f3e8;
          }

          .tribute-title {
            background: linear-gradient(135deg, #f5f5f5 0%, #a5a5a5 100%);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            background-clip: text;
          }
        }
      `}</style>

      {children}
    </>
  );
}
