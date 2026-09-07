const STRAPI_URL = (import.meta.env.VITE_STRAPI_URL as string | undefined) ?? 'http://localhost:1337'

/** Turns a Strapi-relative media URL (`/uploads/x.png`) into an absolute one. */
export function mediaUrl(url?: string | null): string {
  if (!url) return ''
  if (/^https?:\/\/|^data:/.test(url) || (url.startsWith('/') && !url.startsWith('/uploads/'))) return url
  return `${STRAPI_URL}${url.startsWith('/') ? url : `/${url}`}`
}

/** A populate value: `true` for a leaf, or nested populate for its own relations/media. */
type Populate = boolean | { populate: Record<string, Populate> }

function buildPopulate(spec: Record<string, Populate>, prefix = 'populate'): string {
  return Object.entries(spec)
    .map(([key, value]) =>
      typeof value === 'boolean'
        ? `${prefix}[${key}]=${value}`
        : buildPopulate(value.populate, `${prefix}[${key}][populate]`)
    )
    .join('&')
}

export class CmsError extends Error {}

/**
 * Fetches a single-type or one collection entry. Returns `null` on any
 * failure (network down, 404, bad response) so callers can render a
 * fallback instead of crashing the page.
 */
export async function fetchOne<T>(
  path: string,
  populate?: Record<string, Populate>
): Promise<T | null> {
  const query = populate ? `?${buildPopulate(populate)}` : ''
  try {
    const res = await fetch(`${STRAPI_URL}/api/${path}${query}`)
    if (!res.ok) return null
    const json = await res.json()
    return (json.data as T) ?? null
  } catch {
    return null
  }
}

/** Fetches a collection. Returns an empty array on any failure. */
export async function fetchMany<T>(
  path: string,
  populate?: Record<string, Populate>,
  extraParams = ''
): Promise<T[]> {
  const parts = [populate ? buildPopulate(populate) : '', extraParams].filter(Boolean)
  const query = parts.length ? `?${parts.join('&')}` : ''
  try {
    const res = await fetch(`${STRAPI_URL}/api/${path}${query}`)
    if (!res.ok) return []
    const json = await res.json()
    return (json.data as T[]) ?? []
  } catch {
    return []
  }
}

export async function postJson<T>(path: string, body: unknown): Promise<{ ok: true; data: T } | { ok: false; message: string }> {
  try {
    const res = await fetch(`${STRAPI_URL}/api/${path}`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(body),
    })
    const json = await res.json().catch(() => null)
    if (!res.ok) {
      return { ok: false, message: json?.error?.message ?? 'Something went wrong. Please try again.' }
    }
    return { ok: true, data: json.data as T }
  } catch {
    return { ok: false, message: 'Could not reach the server. Please check your connection and try again.' }
  }
}
