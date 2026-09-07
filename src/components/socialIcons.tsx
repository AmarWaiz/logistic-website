import type { ReactNode } from 'react'
import type { SocialLink } from '../lib/cms'

/* Icon artwork is a decorative, implementation-level detail — the CMS
   only ever supplies which platform + URL to link to. */
export const SOCIAL_ICON_PATHS: Record<SocialLink['platform'], ReactNode> = {
  facebook: (
    <path d="M13.5 21v-8h2.7l.4-3.1h-3.1V7.9c0-.9.25-1.5 1.55-1.5h1.65V3.6c-.29-.04-1.27-.12-2.4-.12-2.4 0-4 1.45-4 4.13V9.9H7.6V13h2.7v8h3.2Z" />
  ),
  instagram: (
    <>
      <rect x="3.2" y="3.2" width="17.6" height="17.6" rx="5" fill="none" stroke="currentColor" strokeWidth="1.7" />
      <circle cx="12" cy="12" r="4" fill="none" stroke="currentColor" strokeWidth="1.7" />
      <circle cx="17.1" cy="6.9" r="1.2" />
    </>
  ),
  youtube: (
    <>
      <rect x="2.4" y="5.4" width="19.2" height="13.2" rx="4" fill="none" stroke="currentColor" strokeWidth="1.7" />
      <path d="M10.4 15.2V8.8L15.8 12l-5.4 3.2Z" />
    </>
  ),
  tiktok: (
    <path d="M16.6 5.82A4.28 4.28 0 0 1 15.54 3h-3.09v12.4a2.59 2.59 0 1 1-1.81-2.47v-3.2a5.79 5.79 0 1 0 5 5.73V9.01a7.35 7.35 0 0 0 4.29 1.38V7.3a4.28 4.28 0 0 1-3.33-1.48Z" />
  ),
  x: (
    <path d="M4 4l16 16M20 4 4 20" stroke="currentColor" strokeWidth="2" strokeLinecap="round" fill="none" />
  ),
  linkedin: (
    <>
      <rect x="3" y="9" width="4" height="12" />
      <circle cx="5" cy="4.5" r="2.2" />
      <path d="M10.5 9H14v1.9c.7-1.2 2-2.2 3.8-2.2 3 0 4.2 1.9 4.2 5.1V21h-4v-6.4c0-1.5-.6-2.6-2-2.6-1.1 0-1.7.75-2 1.5-.1.25-.1.6-.1.95V21h-4V9Z" />
    </>
  ),
}

export const SOCIAL_LABELS: Record<SocialLink['platform'], string> = {
  facebook: 'Facebook',
  instagram: 'Instagram',
  youtube: 'YouTube',
  tiktok: 'TikTok',
  x: 'X (Twitter)',
  linkedin: 'LinkedIn',
}
