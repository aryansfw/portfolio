import type { Metadata } from 'next'
import { ProjectCards } from 'app/components/projects'

export const metadata: Metadata = {
  title: 'Projects',
  description: 'Frontend project case studies by Aryan.',
}

export default function Page() {
  return (
    <section>
      <h1 className="text-2xl font-semibold tracking-tighter">Projects</h1>
      <p className="mb-8 mt-3 text-neutral-700 dark:text-neutral-300">
        Selected work covering the problem, implementation approach, and outcome.
      </p>
      <ProjectCards detailed />
    </section>
  )
}
