import Link from "next/link";
import { getAllPosts } from "@/lib/blog";

export default async function BlogPage() {
  const posts = await getAllPosts();

  return (
    <div className="max-w-4xl mx-auto px-6 py-16">
      <h1 className="text-4xl font-semibold tracking-tight text-gray-900 dark:text-gray-100 mb-12">
        Blog
      </h1>

      <div className="space-y-12">
        {posts.map((post) => (
          <article key={post.slug}>
            <Link href={`/blog/${post.slug}`} className="group block">
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-gray-100 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors mb-3">
                {post.title}
              </h2>
              <div className="text-sm text-gray-500 dark:text-gray-500 mb-3">
                {post.date}
              </div>
              {post.description && (
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
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
