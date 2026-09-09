import { notFound } from 'next/navigation'
import Link from 'next/link'
import { CustomMDX } from 'app/components/mdx'
import { formatDate, getBlogPosts } from 'app/blog/utils'
import { projects } from 'app/projects'
import { ExternalLinkIcon } from 'app/components/icons'
import { baseUrl } from 'app/sitemap'

const relatedProjectIds = {
  winterview: 'winterview',
  'schematics-its-2023': 'schematics-its-2023',
  'sahabat-capd-logbook': 'sahabat-capd',
}

export async function generateStaticParams() {
  let posts = getBlogPosts()

  return posts.map((post) => ({
    slug: post.slug,
  }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  let { slug } = await params
  let post = getBlogPosts().find((post) => post.slug === slug)
  if (!post) {
    return
  }

  let {
    title,
    publishedAt: publishedTime,
    summary: description,
    image,
  } = post.metadata
  let ogImage = image
    ? image
    : `${baseUrl}/og?title=${encodeURIComponent(title)}`

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      type: 'article',
      publishedTime,
      url: `${baseUrl}/blog/${post.slug}`,
      images: [
        {
          url: ogImage,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [ogImage],
    },
  }
}

export default async function Blog({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  let { slug } = await params
  let posts = getBlogPosts().sort((a, b) =>
    b.metadata.publishedAt.localeCompare(a.metadata.publishedAt)
  )
  let postIndex = posts.findIndex((post) => post.slug === slug)
  let post = posts[postIndex]

  if (!post) {
    notFound()
  }

  let relatedProject = projects.find(
    (project) => project.id === relatedProjectIds[slug]
  )
  let previousPost = posts[postIndex + 1]
  let nextPost = posts[postIndex - 1]

  return (
    <section className="min-w-0 max-w-3xl">
      <script
        type="application/ld+json"
        suppressHydrationWarning
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'BlogPosting',
            headline: post.metadata.title,
            datePublished: post.metadata.publishedAt,
            dateModified: post.metadata.publishedAt,
            description: post.metadata.summary,
            image: post.metadata.image
              ? `${baseUrl}${post.metadata.image}`
              : `/og?title=${encodeURIComponent(post.metadata.title)}`,
            url: `${baseUrl}/blog/${post.slug}`,
            author: {
              '@type': 'Person',
              name: 'Aryan Shafa Wardana',
            },
          }),
        }}
      />
      <Link className="text-sm underline underline-offset-4" href="/blog">
        Back to project notes
      </Link>
      <header className="mb-10 mt-8 max-w-2xl">
        <p className="text-sm font-medium text-sky-600 dark:text-sky-400">
          Project note
        </p>
        <h1 className="title mt-3 text-4xl font-semibold tracking-[-0.04em] sm:text-5xl">
          {post.metadata.title}
        </h1>
        <p className="mt-5 text-lg text-neutral-700 dark:text-neutral-300">
          {post.metadata.summary}
        </p>
        <div className="mt-5 flex flex-wrap items-center gap-x-5 gap-y-2 text-sm text-neutral-600 dark:text-neutral-400">
          <time dateTime={post.metadata.publishedAt}>
            {formatDate(post.metadata.publishedAt)}
          </time>
          {relatedProject && (
            <div className="flex flex-wrap gap-x-5 gap-y-2">
              {relatedProject.live && (
                <a
                  className="inline-flex min-h-11 items-center gap-2 text-neutral-900 underline underline-offset-4 dark:text-neutral-100"
                  href={relatedProject.live}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <ExternalLinkIcon className="size-4" />
                  Visit project
                </a>
              )}
              {relatedProject.source && (
                <a
                  className="inline-flex min-h-11 items-center gap-2 text-neutral-900 underline underline-offset-4 dark:text-neutral-100"
                  href={relatedProject.source}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <ExternalLinkIcon className="size-4" />
                  View source
                </a>
              )}
            </div>
          )}
        </div>
      </header>
      <article className="prose max-w-2xl leading-7">
        <CustomMDX source={post.content} />
      </article>
      {(previousPost || nextPost) && (
        <nav className="mt-16 grid gap-6 border-t border-neutral-200 pt-6 text-sm dark:border-neutral-800 sm:grid-cols-2" aria-label="More project notes">
          {previousPost ? (
            <Link href={`/blog/${previousPost.slug}`}>
              <span className="text-neutral-600 dark:text-neutral-400">Previous note</span>
              <span className="mt-1 block underline underline-offset-4">{previousPost.metadata.title}</span>
            </Link>
          ) : <span />}
          {nextPost && (
            <Link className="sm:text-right" href={`/blog/${nextPost.slug}`}>
              <span className="text-neutral-600 dark:text-neutral-400">Next note</span>
              <span className="mt-1 block underline underline-offset-4">{nextPost.metadata.title}</span>
            </Link>
          )}
        </nav>
      )}
    </section>
  )
}
