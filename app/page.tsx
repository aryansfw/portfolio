import Link from 'next/link'
import { BlogPosts } from 'app/components/posts'
import { ProjectCards } from 'app/components/projects'

export default function Page() {
  return (
    <section className="min-w-0">
      <h1 className="mb-6 text-4xl font-semibold tracking-[-0.05em] sm:text-5xl md:text-6xl">
        Aryan Shafa Wardana
        <span className="mt-2 block text-sky-600 dark:text-sky-400">
          Frontend Developer
        </span>
      </h1>
      <p className="max-w-2xl text-lg text-neutral-700 dark:text-neutral-300">
        Frontend developer building production SaaS, health-tech, and
        AI-powered web applications. Based in Surabaya, Indonesia.
      </p>
      <nav className="mt-6 flex flex-wrap gap-x-5 gap-y-3 text-sm" aria-label="Contact links">
        <a className="underline underline-offset-4" href="mailto:aryan.s.wardana@gmail.com">
          Email
        </a>
        <a className="underline underline-offset-4" href="https://github.com/aryansfw" target="_blank" rel="noopener noreferrer">
          GitHub
        </a>
        <a className="underline underline-offset-4" href="https://www.linkedin.com/in/aryanshafawardana" target="_blank" rel="noopener noreferrer">
          LinkedIn
        </a>
      </nav>

      <section className="my-20" aria-labelledby="featured-projects">
        <div className="mb-6 flex flex-wrap items-baseline justify-between gap-4">
          <h2 id="featured-projects" className="text-xl font-semibold tracking-tight">
            Featured projects
          </h2>
          <Link className="text-sm underline underline-offset-4" href="/projects">
            View case studies
          </Link>
        </div>
        <ProjectCards featured />
      </section>

      <section className="my-20 max-w-3xl" aria-labelledby="latest-writing">
        <h2 id="latest-writing" className="mb-6 text-xl font-semibold tracking-tight">
          Latest writing
        </h2>
        <BlogPosts />
      </section>
    </section>
  )
}
