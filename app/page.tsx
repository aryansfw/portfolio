import Link from 'next/link'
import { BlogPosts } from 'app/components/posts'
import { ProjectCards } from 'app/components/projects'

export default function Page() {
  return (
    <section>
      <h1 className="mb-8 text-2xl font-semibold tracking-tighter">
        Aryan, Frontend Developer
      </h1>
      <p className="text-neutral-700 dark:text-neutral-300">
        Frontend developer building production SaaS, health-tech, and
        AI-powered web applications. Based in Surabaya, Indonesia.
      </p>

      <section className="my-12" aria-labelledby="featured-projects">
        <div className="mb-6 flex items-baseline justify-between gap-4">
          <h2 id="featured-projects" className="text-xl font-semibold tracking-tight">
            Featured projects
          </h2>
          <Link className="text-sm underline underline-offset-4" href="/projects">
            View case studies
          </Link>
        </div>
        <ProjectCards />
      </section>

      <section className="my-12" aria-labelledby="latest-writing">
        <h2 id="latest-writing" className="mb-6 text-xl font-semibold tracking-tight">
          Latest writing
        </h2>
        <BlogPosts />
      </section>
    </section>
  )
}
