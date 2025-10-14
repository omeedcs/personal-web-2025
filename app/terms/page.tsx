export default function TermsPage() {
  return (
    <div className="max-w-4xl mx-auto px-6 py-16">
      <h1 className="text-4xl font-semibold tracking-tight text-gray-900 dark:text-gray-100 mb-12">
        Terms of Service
      </h1>

      <div className="prose prose-lg dark:prose-invert max-w-none">
        <p className="text-gray-700 dark:text-gray-300 mb-6">
          Last updated: {new Date().toLocaleDateString()}
        </p>

        <h2 className="text-2xl font-semibold tracking-tight text-gray-900 dark:text-gray-100 mt-8 mb-4">
          Use of Content
        </h2>
        <p className="text-gray-700 dark:text-gray-300 mb-4">
          The content on this website, including blog posts, research notes, and code examples, 
          is provided for educational and informational purposes. You are welcome to share and 
          reference this content with appropriate attribution.
        </p>

        <h2 className="text-2xl font-semibold tracking-tight text-gray-900 dark:text-gray-100 mt-8 mb-4">
          Code Examples
        </h2>
        <p className="text-gray-700 dark:text-gray-300 mb-4">
          Code snippets and examples provided on this site are offered as-is for educational 
          purposes. While I strive for accuracy, I make no warranties about the completeness, 
          reliability, or suitability of the code for any particular purpose.
        </p>

        <h2 className="text-2xl font-semibold tracking-tight text-gray-900 dark:text-gray-100 mt-8 mb-4">
          External Links
        </h2>
        <p className="text-gray-700 dark:text-gray-300 mb-4">
          This website may contain links to external sites. I am not responsible for the 
          content or practices of these external sites.
        </p>

        <h2 className="text-2xl font-semibold tracking-tight text-gray-900 dark:text-gray-100 mt-8 mb-4">
          Contact
        </h2>
        <p className="text-gray-700 dark:text-gray-300 mb-4">
          If you have questions about these terms, please contact me at your.email@example.com
        </p>
      </div>
    </div>
  );
}
