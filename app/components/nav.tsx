import Link from 'next/link'

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
  return (
    <aside className="-ml-[8px] mb-16 tracking-tight">
      <div className="lg:sticky lg:top-20">
        <nav
          className="flex flex-row items-start relative px-0 pb-0 fade md:overflow-auto scroll-pr-6 md:relative"
          id="nav"
        >
          <div className="flex flex-row flex-wrap space-x-0 pr-10">
            {Object.entries(navItems).map(([path, { name }]) => {
              return (
                <Link
                  key={path}
                  href={path}
                  className="relative m-1 inline-flex min-h-11 items-center px-2 transition-all hover:text-neutral-800 dark:hover:text-neutral-200"
                >
                  {name}
                </Link>
              )
            })}
          </div>
        </nav>
      </div>
    </aside>
  )
}
