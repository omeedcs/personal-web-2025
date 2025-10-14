import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-gray-200 dark:border-gray-800 mt-20">
      <div className="max-w-4xl mx-auto px-6 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-600 dark:text-gray-400">
          <div>
            <Link href="/" className="hover:text-gray-900 dark:hover:text-gray-100 transition-colors">
              Omeed Tehrani
            </Link>
          </div>
          <div className="flex gap-6">
            <Link href="/terms" className="hover:text-gray-900 dark:hover:text-gray-100 transition-colors">
              Terms
            </Link>
            <Link href="/privacy" className="hover:text-gray-900 dark:hover:text-gray-100 transition-colors">
              Privacy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
