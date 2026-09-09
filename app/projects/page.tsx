import type { Metadata } from 'next'
import { ProjectCards } from 'app/components/projects'

export const metadata: Metadata = {
  title: 'Projects',
  description: 'Frontend project case studies by Aryan.',
}

export default function Page() {
  return (
      <section className="min-w-0">
      <h1 className="text-2xl font-semibold tracking-tighter">Projects</h1>
      <p className="mb-8 mt-3 text-neutral-700 dark:text-neutral-300">
        Frontend work across SaaS, health-tech, AI, and event platforms.
      </p>
      <ProjectCards detailed />
    </section>
  )
}
