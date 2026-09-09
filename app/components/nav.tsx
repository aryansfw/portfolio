'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

const navItems = {
  '/': {
    name: 'home',
  },
  '/blog': {
    name: 'blog',
  },
  '/projects': {
    name: 'projects',
  },
}

export function Navbar() {
  let pathname = usePathname()

  return (
    <aside className="mb-16 tracking-tight">
      <div className="lg:sticky lg:top-20">
        <nav
          className="flex flex-wrap items-center gap-x-5 gap-y-2 border-b border-neutral-200 pb-4 dark:border-neutral-800"
          id="nav"
        >
          <Link className="mr-3 inline-flex min-h-11 items-center text-sm font-semibold text-sky-600 dark:text-sky-400" href="/" aria-label="Aryan Shafa Wardana home">
            Aryan
          </Link>
          {Object.entries(navItems).map(([path, { name }]) => {
            let active = path === '/' ? pathname === '/' : pathname.startsWith(path)

            return (
              <Link
                key={path}
                href={path}
                aria-current={active ? 'page' : undefined}
                className={`relative inline-flex min-h-11 items-center border-b-2 px-1 text-sm transition-colors hover:text-neutral-800 dark:hover:text-neutral-200 ${active ? 'border-sky-600 text-neutral-950 dark:border-sky-400 dark:text-white' : 'border-transparent text-neutral-600 dark:text-neutral-400'}`}
              >
                {name}
              </Link>
            )
          })}
        </nav>
      </div>
    </aside>
  )
}
