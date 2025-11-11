import Link from "next/link";
import { getAllPosts } from "@/lib/blog";

export default async function BlogPage() {
  const posts = await getAllPosts();

  return (
    <div className="max-w-3xl mx-auto px-6 py-12">
      <header className="mb-10">
        <h1 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-gray-100">
          My Writings
        </h1>
        <p className="text-sm text-gray-500 dark:text-gray-400 mt-2">
          Thoughts on technology, engineering, and beyond.
        </p>
      </header>

      <div className="space-y-8">
        {posts.map((post, index) => (
          <article 
            key={post.slug}
            className="group border-b border-gray-200 dark:border-gray-800 pb-8 last:border-0"
          >
            <Link href={`/blog/${post.slug}`} className="block">
              <div className="flex items-baseline justify-between gap-4 mb-2">
                <h2 className="text-lg font-medium text-gray-900 dark:text-gray-100 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                  {post.title}
                </h2>
                <div className="text-xs text-gray-500 dark:text-gray-500 whitespace-nowrap flex-shrink-0 flex items-center gap-2">
                  <time>
                    {new Date(post.date).toLocaleDateString('en-US', { 
                      year: 'numeric', 
                      month: 'short',
                      day: 'numeric'
                    })}
                  </time>
                  {post.readingTime && (
                    <>
                      <span>•</span>
                      <span>{post.readingTime}</span>
                    </>
                  )}
                </div>
              </div>
              {post.description && (
                <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                  {post.description}
                </p>
              )}
            </Link>
          </article>
        ))}
      </div>
    </div>
  );
}
