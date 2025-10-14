import { getAllPosts, getPostBySlug } from "@/lib/blog";
import { MDXRemote } from "next-mdx-remote/rsc";
import Link from "next/link";
import { notFound } from "next/navigation";

export async function generateStaticParams() {
  const posts = await getAllPosts();
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({ params }: { params: { slug: string } }) {
  const post = await getPostBySlug(params.slug);
  
  if (!post) {
    return {
      title: "Post Not Found",
    };
  }

  return {
    title: `${post.title} - Omeed Tehrani`,
    description: post.description,
  };
}

const components = {
  h1: (props: any) => (
    <h1 className="text-3xl font-semibold tracking-tight text-gray-900 dark:text-gray-100 mb-6 mt-8" {...props} />
  ),
  h2: (props: any) => (
    <h2 className="text-2xl font-semibold tracking-tight text-gray-900 dark:text-gray-100 mb-4 mt-8" {...props} />
  ),
  h3: (props: any) => (
    <h3 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-gray-100 mb-3 mt-6" {...props} />
  ),
  p: (props: any) => (
    <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4" {...props} />
  ),
  a: (props: any) => (
    <a className="text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 transition-colors" {...props} />
  ),
  code: (props: any) => (
    <code className="bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-200 px-1.5 py-0.5 rounded text-sm font-mono" {...props} />
  ),
  pre: (props: any) => (
    <pre className="bg-gray-50 dark:bg-gray-900 p-4 rounded-lg overflow-x-auto mb-6 border border-gray-200 dark:border-gray-800" {...props} />
  ),
  ul: (props: any) => (
    <ul className="list-disc list-inside space-y-2 mb-4 text-gray-700 dark:text-gray-300" {...props} />
  ),
  ol: (props: any) => (
    <ol className="list-decimal list-inside space-y-2 mb-4 text-gray-700 dark:text-gray-300" {...props} />
  ),
  blockquote: (props: any) => (
    <blockquote className="border-l-4 border-gray-300 dark:border-gray-700 pl-4 italic my-6 text-gray-700 dark:text-gray-300" {...props} />
  ),
};

export default async function BlogPost({ params }: { params: { slug: string } }) {
  const post = await getPostBySlug(params.slug);

  if (!post) {
    notFound();
  }

  return (
    <article className="max-w-3xl mx-auto px-6 py-16">
      <Link
        href="/blog"
        className="text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 transition-colors mb-8 inline-block"
      >
        ← Back to Blog
      </Link>

      <header className="mb-12">
        <h1 className="text-4xl font-semibold tracking-tight text-gray-900 dark:text-gray-100 mb-4">
          {post.title}
        </h1>
        <div className="flex items-center gap-4 text-sm text-gray-500 dark:text-gray-500">
          <time dateTime={post.date}>{post.date}</time>
          {post.author && <span>by {post.author}</span>}
        </div>
      </header>

      <div className="prose prose-lg dark:prose-invert max-w-none">
        <MDXRemote source={post.content} components={components} />
      </div>

      <footer className="mt-16 pt-8 border-t border-gray-200 dark:border-gray-800">
        <Link
          href="/blog"
          className="text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 transition-colors"
        >
          ← Back to Blog
        </Link>
      </footer>
    </article>
  );
}
