import Image from 'next/image'
import { projects } from 'app/projects'
import { ExternalLinkIcon } from 'app/components/icons'

export function ProjectCards({
  detailed = false,
  featured = false,
}: {
  detailed?: boolean
  featured?: boolean
}) {
  let visibleProjects = featured
    ? projects.filter((project) =>
        ['beecloud-dashboard', 'winterview', 'sahabat-capd'].includes(project.id)
      )
    : projects

  return (
    <div className={featured ? 'space-y-8' : 'space-y-10'}>
      {visibleProjects.map((project, index) => {
        let landscape = project.image.width >= project.image.height
        let split = featured || detailed
        let imageFirst = featured || index % 2 === 1
        let articleClass = split
          ? featured && index === 0
            ? 'md:grid md:grid-cols-[minmax(0,1.35fr)_minmax(240px,0.65fr)] md:gap-8'
            : 'md:grid md:grid-cols-2 md:items-start md:gap-10'
          : ''
        let contentClass = split
          ? imageFirst
            ? 'md:col-start-2 md:row-start-1'
            : 'md:col-start-1 md:row-start-1'
          : ''
        let imageClass = split
          ? imageFirst
            ? 'md:col-start-1 md:row-start-1 md:my-0'
            : 'md:col-start-2 md:row-start-1 md:my-0'
          : ''

        return (
          <article
            key={project.id}
            id={detailed ? project.id : undefined}
            className={`rounded-lg border border-neutral-200 p-5 transition-colors hover:border-sky-500/50 dark:border-neutral-800 ${articleClass}`}
          >
            <div className={contentClass}>
              <p className="text-sm font-semibold tabular-nums text-sky-600 dark:text-sky-400">
                {String(index + 1).padStart(2, '0')}
              </p>
              <h2 className="mt-1 text-xl font-medium tracking-tight">{project.title}</h2>
              <p className="mt-2 text-neutral-700 dark:text-neutral-300">
                {project.summary}
              </p>
              {featured && (
                <p className="mt-4 text-sm text-neutral-600 dark:text-neutral-400">
                  {project.outcome}
                </p>
              )}
              {detailed && (
                <dl className="mt-5 space-y-3 text-sm">
                  <div>
                    <dt className="font-medium">Problem</dt>
                    <dd className="text-neutral-600 dark:text-neutral-400">
                      {project.problem}
                    </dd>
                  </div>
                  <div>
                    <dt className="font-medium">Approach</dt>
                    <dd className="text-neutral-600 dark:text-neutral-400">
                      {project.approach}
                    </dd>
                  </div>
                  <div>
                    <dt className="font-medium">Outcome</dt>
                    <dd className="text-neutral-600 dark:text-neutral-400">
                      {project.outcome}
                    </dd>
                  </div>
                </dl>
              )}
              <ul
                aria-label={`${project.title} technologies`}
                className="mt-5 flex flex-wrap gap-2 text-xs text-neutral-600 dark:text-neutral-400"
              >
                {project.stack.map((technology) => (
                  <li
                    key={technology}
                    className="rounded-full bg-neutral-100 px-2.5 py-1 dark:bg-neutral-900"
                  >
                    {technology}
                  </li>
                ))}
              </ul>
              {(project.source || project.live) && (
                <div className="mt-5 flex flex-wrap gap-x-5 gap-y-2 text-sm">
                  {project.source && (
                    <a
                      className="inline-flex min-h-11 items-center gap-2 underline underline-offset-4"
                      href={project.source}
                      rel="noopener noreferrer"
                      target="_blank"
                    >
                      <ExternalLinkIcon className="size-4" />
                      View source
                    </a>
                  )}
                  {project.live && (
                    <a
                      className="inline-flex min-h-11 items-center gap-2 underline underline-offset-4"
                      href={project.live}
                      rel="noopener noreferrer"
                      target="_blank"
                    >
                      <ExternalLinkIcon className="size-4" />
                      Visit app
                    </a>
                  )}
                </div>
              )}
            </div>
            {(detailed || featured) && (
              <div
                className={`my-5 flex min-h-0 items-center justify-center overflow-hidden rounded-md border border-neutral-200 bg-neutral-50 dark:border-neutral-800 dark:bg-neutral-950 ${imageClass}`}
              >
                <Image
                  src={project.image.src}
                  alt={project.image.alt}
                  width={project.image.width}
                  height={project.image.height}
                  sizes="(max-width: 768px) 100vw, 60vw"
                  className={landscape ? 'h-auto w-full object-contain' : 'h-auto max-h-[520px] w-auto max-w-full object-contain'}
                />
              </div>
            )}
          </article>
        )
      })}
    </div>
  )
}
