function ArrowIcon() {
  return (
    <svg
      width="12"
      height="12"
      viewBox="0 0 12 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M2.07102 11.3494L0.963068 10.2415L9.2017 1.98864H2.83807L2.85227 0.454545H11.8438V9.46023H10.2955L10.3097 3.09659L2.07102 11.3494Z"
        fill="currentColor"
      />
    </svg>
  )
}

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
      <a
        className="mt-6 flex items-center text-sm text-neutral-600 transition-all hover:text-neutral-800 dark:text-neutral-300 dark:hover:text-neutral-100"
        href="/rss"
      >
        <ArrowIcon />
        <span className="ml-2">RSS</span>
      </a>
      <p className="mt-2 text-neutral-600 dark:text-neutral-300">
        &copy; {new Date().getFullYear()} Aryan
      </p>
    </footer>
  )
}
