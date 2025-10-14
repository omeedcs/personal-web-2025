export default function PrivacyPage() {
  return (
    <div className="max-w-4xl mx-auto px-6 py-16">
      <h1 className="text-4xl font-semibold tracking-tight text-gray-900 dark:text-gray-100 mb-12">
        Privacy Notice
      </h1>

      <div className="prose prose-lg dark:prose-invert max-w-none">
        <p className="text-gray-700 dark:text-gray-300 mb-6">
          Last updated: {new Date().toLocaleDateString()}
        </p>

        <h2 className="text-2xl font-semibold tracking-tight text-gray-900 dark:text-gray-100 mt-8 mb-4">
          Information Collection
        </h2>
        <p className="text-gray-700 dark:text-gray-300 mb-4">
          This website is a static portfolio site and does not collect personal information 
          through forms or tracking. Any analytics, if implemented, would be disclosed here.
        </p>

        <h2 className="text-2xl font-semibold tracking-tight text-gray-900 dark:text-gray-100 mt-8 mb-4">
          Cookies
        </h2>
        <p className="text-gray-700 dark:text-gray-300 mb-4">
          This site may use cookies for basic functionality like theme preferences. No 
          third-party tracking cookies are used.
        </p>

        <h2 className="text-2xl font-semibold tracking-tight text-gray-900 dark:text-gray-100 mt-8 mb-4">
          Third-Party Services
        </h2>
        <p className="text-gray-700 dark:text-gray-300 mb-4">
          Links to external sites (GitHub, Twitter, etc.) are subject to those platforms' 
          privacy policies.
        </p>

        <h2 className="text-2xl font-semibold tracking-tight text-gray-900 dark:text-gray-100 mt-8 mb-4">
          Contact
        </h2>
        <p className="text-gray-700 dark:text-gray-300 mb-4">
          If you have questions about this privacy notice, please contact me at 
          your.email@example.com
        </p>
      </div>
    </div>
  );
}
