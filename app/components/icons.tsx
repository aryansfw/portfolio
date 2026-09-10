type IconProps = { className?: string }

export function MailIcon({ className }: IconProps) {
  return (
    <svg aria-hidden="true" className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="m4 7 8 6 8-6" />
    </svg>
  )
}

export function GitHubIcon({ className }: IconProps) {
  return (
    <svg aria-hidden="true" className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 .75a11.25 11.25 0 0 0-3.56 21.92c.56.1.77-.24.77-.54v-2.1c-3.13.68-3.79-1.32-3.79-1.32-.51-1.3-1.25-1.65-1.25-1.65-1.02-.7.08-.69.08-.69 1.13.08 1.73 1.16 1.73 1.16 1 1.73 2.62 1.23 3.26.94.1-.73.39-1.23.71-1.51-2.5-.28-5.13-1.25-5.13-5.57 0-1.23.44-2.23 1.16-3.01-.12-.29-.5-1.43.11-2.98 0 0 .95-.3 3.1 1.15a10.8 10.8 0 0 1 5.64 0c2.15-1.45 3.1-1.15 3.1-1.15.61 1.55.23 2.69.11 2.98.72.78 1.16 1.78 1.16 3.01 0 4.33-2.63 5.29-5.14 5.56.4.35.76 1.04.76 2.1v3.11c0 .3.2.65.78.54A11.25 11.25 0 0 0 12 .75Z" />
    </svg>
  )
}

export function LinkedInIcon({ className }: IconProps) {
  return (
    <svg aria-hidden="true" className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M5.2 3.75A2.2 2.2 0 1 1 5.2 8.15a2.2 2.2 0 0 1 0-4.4ZM3.35 9.8h3.7V21h-3.7V9.8Zm5.95 0h3.55v1.53h.05c.5-.96 1.7-1.98 3.5-1.98 3.74 0 4.43 2.46 4.43 5.66V21h-3.7v-5.31c0-1.27-.02-2.9-1.77-2.9-1.78 0-2.05 1.38-2.05 2.8V21H9.3V9.8Z" />
    </svg>
  )
}

export function ExternalLinkIcon({ className }: IconProps) {
  return (
    <svg aria-hidden="true" className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
      <path d="M14 4h6v6M20 4l-9 9" />
      <path d="M18 13v5a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h5" />
    </svg>
  )
}

export function FileTextIcon({ className }: IconProps) {
  return (
    <svg aria-hidden="true" className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
      <path d="M6 3.5h8l4 4V20.5H6z" />
      <path d="M14 3.5v4h4M9 12h6M9 15.5h6" />
    </svg>
  )
}
