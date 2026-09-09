import { BlogPosts } from 'app/components/posts'

export const metadata = {
  title: 'Project notes',
  description: "Build notes from Aryan's frontend projects.",
}

export default function Page() {
  return (
    <section className="min-w-0">
      <h1 className="text-4xl font-semibold tracking-[-0.04em] sm:text-5xl">Project notes</h1>
      <p className="mb-12 mt-4 max-w-2xl text-lg text-neutral-700 dark:text-neutral-300">
        Build notes from shipped frontend work, including the decisions behind each project.
      </p>
      <BlogPosts />
    </section>
  )
}
