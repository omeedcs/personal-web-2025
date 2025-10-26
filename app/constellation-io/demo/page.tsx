"use client";

import Link from "next/link";

export default function ConstellationDemo() {
  return (
    <div className="max-w-5xl mx-auto px-6 py-16">
      {/* Back Button */}
      <Link 
        href="/"
        className="inline-flex items-center text-sm text-gray-900 dark:text-gray-100 hover:underline mb-8"
      >
        ← Back to Home
      </Link>

      {/* Header */}
      <div className="mb-12">
        <h1 className="text-4xl font-bold tracking-tight text-gray-900 dark:text-gray-100 mb-4">
          Constellation AI Demo 🛰️
        </h1>
        <p className="text-lg text-gray-600 dark:text-gray-400">
          AI-powered predictive routing for satellite networks
        </p>
      </div>

      {/* Video Section */}
      <div className="mb-12">
        <div className="relative rounded-lg overflow-hidden shadow-2xl border border-gray-200 dark:border-gray-800">
          <video 
            controls 
            className="w-full"
            preload="metadata"
          >
            <source src="/constellation-io/short-constellation-demo.mov" type="video/quicktime" />
            <source src="/constellation-io/short-constellation-demo.mov" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      </div>

      {/* Explanation Section */}
      <div className="space-y-6">
        <div className="border-l-4 border-gray-900 dark:border-gray-100 pl-6 py-3">
          <h2 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-2">
            Real-Time Monitoring
          </h2>
          <p className="text-gray-700 dark:text-gray-300">
            Live simulation monitoring satellite link metrics with 100% throughput and connectivity.
          </p>
        </div>

        <div className="border-l-4 border-gray-900 dark:border-gray-100 pl-6 py-3">
          <h2 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-2">
            AI Detection
          </h2>
          <p className="text-gray-700 dark:text-gray-300">
            Our model ingests weather, RF interference, and orbital data—detecting 94.7% chance of signal degradation before it happens.
          </p>
        </div>

        <div className="border-l-4 border-gray-900 dark:border-gray-100 pl-6 py-3">
          <h2 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-2">
            Predictive Rerouting
          </h2>
          <p className="text-gray-700 dark:text-gray-300">
            Sub-second path computation and automated traffic rerouting maintains connectivity with zero downtime.
          </p>
        </div>

        {/* CTA Section */}
        <div className="mt-12 text-center">
          <a
            href="https://constellation-io.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-6 py-3 bg-gray-900 dark:bg-gray-100 hover:bg-gray-800 dark:hover:bg-gray-200 text-white dark:text-gray-900 rounded-lg transition-colors font-medium"
          >
            Learn More →
          </a>
        </div>
      </div>
    </div>
  );
}
