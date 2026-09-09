import { BlogPosts } from 'app/components/posts'

export const metadata = {
  title: 'Project notes',
  description: "Build notes from Aryan's frontend projects.",
}

export default function Page() {
  return (
    <section>
      <h1 className="font-semibold text-2xl mb-8 tracking-tighter">Project notes</h1>
      <BlogPosts />
    </section>
  )
}
