export default function Footer() {
  return (
    <footer className="mb-16">
      <nav className="mt-8 flex flex-wrap gap-x-4 gap-y-2" aria-label="Contact links">
        <a className="underline underline-offset-4" href="mailto:aryan.s.wardana@gmail.com">
          Email
        </a>
        <a
          className="underline underline-offset-4"
          href="https://github.com/aryansfw"
          rel="noopener noreferrer"
          target="_blank"
        >
          GitHub
        </a>
        <a
          className="underline underline-offset-4"
          href="https://www.linkedin.com/in/aryanshafawardana"
          rel="noopener noreferrer"
          target="_blank"
        >
          LinkedIn
        </a>
      </nav>
      <p className="mt-2 text-neutral-600 dark:text-neutral-300">
        &copy; {new Date().getFullYear()} Aryan
      </p>
    </footer>
  )
}
