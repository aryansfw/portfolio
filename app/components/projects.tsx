import { projects } from 'app/projects'

export function ProjectCards({ detailed = false }: { detailed?: boolean }) {
  return (
    <div className="space-y-6">
      {projects.map((project, index) => (
        <article
          key={project.id}
          id={detailed ? project.id : undefined}
          className="rounded-lg border border-neutral-200 p-5 transition-colors hover:border-sky-500/50 dark:border-neutral-800"
        >
          <p className="text-sm font-semibold tabular-nums text-sky-600 dark:text-sky-400">
            {String(index + 1).padStart(2, '0')}
          </p>
          <h2 className="text-lg font-medium tracking-tight">{project.title}</h2>
          <p className="mt-2 text-neutral-700 dark:text-neutral-300">
            {project.summary}
          </p>
          {detailed && (
            <dl className="mt-4 space-y-3 text-sm">
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
            className="mt-4 flex flex-wrap gap-2 text-xs text-neutral-600 dark:text-neutral-400"
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
          <div className="mt-4 flex gap-4 text-sm">
            {project.source && (
              <a
                className="underline underline-offset-4"
                href={project.source}
                rel="noopener noreferrer"
                target="_blank"
              >
                View source
              </a>
            )}
            {project.live && (
              <a
                className="underline underline-offset-4"
                href={project.live}
                rel="noopener noreferrer"
                target="_blank"
              >
                Visit app
              </a>
            )}
          </div>
        )}
        </article>
      ))}
    </div>
  )
}
