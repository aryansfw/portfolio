import Link from 'next/link'
import Image from 'next/image'
import { formatDate, getBlogPosts } from 'app/blog/utils'
import { projects } from 'app/projects'

const projectIds = {
  winterview: 'winterview',
  'schematics-its-2023': 'schematics-its-2023',
  'sahabat-capd-logbook': 'sahabat-capd',
}

export function BlogPosts({ showImages = false }: { showImages?: boolean }) {
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
        .map((post) => {
          let project = projects.find(
            (project) => project.id === projectIds[post.slug]
          )

          return (
            <Link
              key={post.slug}
              className={`group flex flex-col border-b border-neutral-200 pb-7 pt-7 first:pt-0 last:border-0 dark:border-neutral-800 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-sky-500 ${showImages ? 'gap-5 md:grid md:grid-cols-[220px_minmax(0,1fr)] md:gap-7' : ''}`}
              href={`/blog/${post.slug}`}
            >
              {showImages && project && (
                <div className="flex h-40 items-center justify-center overflow-hidden rounded-md border border-neutral-200 bg-neutral-50 dark:border-neutral-800 dark:bg-neutral-950">
                  <Image
                    src={project.image.src}
                    alt={project.image.alt}
                    width={project.image.width}
                    height={project.image.height}
                    sizes="(max-width: 768px) 100vw, 220px"
                    className="h-full w-full object-contain"
                  />
                </div>
              )}
              <div className="flex min-w-0 flex-col justify-center">
                {project && (
                  <p className="text-sm font-medium text-sky-600 dark:text-sky-400">
                    {project.title}
                  </p>
                )}
                <p className="mt-1 text-xl tracking-tight text-neutral-900 group-hover:text-sky-600 dark:text-neutral-100 dark:group-hover:text-sky-400">
                  {post.metadata.title}
                </p>
                <p className="mt-2 max-w-2xl text-sm leading-6 text-neutral-600 dark:text-neutral-400">
                  {post.metadata.summary}
                </p>
                <time
                  className="mt-4 text-sm text-neutral-500 dark:text-neutral-500"
                  dateTime={post.metadata.publishedAt}
                >
                  {formatDate(post.metadata.publishedAt, false)}
                </time>
              </div>
            </Link>
          )
        })}
    </div>
  )
}
