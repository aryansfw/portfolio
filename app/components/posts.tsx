import Link from 'next/link'
import { formatDate, getBlogPosts } from 'app/blog/utils'

export function BlogPosts() {
  let allBlogs = getBlogPosts()

  return (
    <div>
      {allBlogs
        .sort((a, b) => {
          if (
            new Date(a.metadata.publishedAt) > new Date(b.metadata.publishedAt)
          ) {
            return -1
          }
          return 1
        })
        .map((post) => (
          <Link
            key={post.slug}
            className="group flex flex-col border-b border-neutral-200 pb-5 pt-1 first:pt-0 last:border-0 dark:border-neutral-800"
            href={`/blog/${post.slug}`}
          >
            <div className="flex w-full flex-col gap-1 md:flex-row md:gap-6">
              <p className="shrink-0 text-sm text-neutral-600 dark:text-neutral-400 md:w-28 md:pt-1 md:text-right tabular-nums">
                {formatDate(post.metadata.publishedAt, false)}
              </p>
              <div>
                <p className="tracking-tight text-neutral-900 group-hover:text-sky-600 dark:text-neutral-100 dark:group-hover:text-sky-400">
                  {post.metadata.title}
                </p>
                <p className="mt-1 max-w-2xl text-sm text-neutral-600 dark:text-neutral-400">
                  {post.metadata.summary}
                </p>
              </div>
            </div>
          </Link>
        ))}
    </div>
  )
}
