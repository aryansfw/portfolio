import { FileTextIcon, GitHubIcon, LinkedInIcon, MailIcon } from 'app/components/icons'

export default function Footer() {
  return (
    <footer className="mb-16">
      <nav className="mt-8 flex flex-wrap gap-x-4 gap-y-2" aria-label="Contact links">
        <a className="inline-flex min-h-11 items-center gap-2 underline underline-offset-4" href="mailto:aryan.s.wardana@gmail.com">
          <MailIcon className="size-4" />
          Email
        </a>
        <a
          className="inline-flex min-h-11 items-center gap-2 underline underline-offset-4"
          href="https://github.com/aryansfw"
          rel="noopener noreferrer"
          target="_blank"
        >
          <GitHubIcon className="size-4" />
          GitHub
        </a>
        <a
          className="inline-flex min-h-11 items-center gap-2 underline underline-offset-4"
          href="https://www.linkedin.com/in/aryanshafawardana"
          rel="noopener noreferrer"
          target="_blank"
        >
          <LinkedInIcon className="size-4" />
          LinkedIn
        </a>
        <a
          className="inline-flex min-h-11 items-center gap-2 underline underline-offset-4"
          href="/resume.pdf"
          rel="noopener noreferrer"
          target="_blank"
        >
          <FileTextIcon className="size-4" />
          Resume
        </a>
      </nav>
      <p className="mt-2 text-neutral-600 dark:text-neutral-300">
        &copy; {new Date().getFullYear()} Aryan
      </p>
    </footer>
  )
}
