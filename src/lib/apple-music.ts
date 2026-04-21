// Apple Music / iTunes helpers.
// At build time we can hit the public iTunes Search API (no auth) to resolve
// artwork for an Apple Music share URL. A tiny in-memory cache keeps duplicate
// lookups cheap across the same build.

const cache = new Map<string, { artwork: string | null; artist?: string; album?: string; year?: number }>();

export function extractAppleMusicId(url: string): string | null {
  if (!url) return null;
  // Matches …/id1234567890 or …/1234567890 at end or before query string
  const m = url.match(/(?:\/|^)i?(\d{6,})(?:[/?#]|$)/);
  return m ? m[1] : null;
}

export function toEmbedUrl(url: string): string {
  return url.replace('://music.apple.com', '://embed.music.apple.com');
}

export async function lookupAppleMusic(url: string) {
  const id = extractAppleMusicId(url);
  if (!id) return null;
  if (cache.has(id)) return cache.get(id)!;

  try {
    const res = await fetch(`https://itunes.apple.com/lookup?id=${id}&entity=album`);
    if (!res.ok) {
      cache.set(id, { artwork: null });
      return cache.get(id)!;
    }
    const data = await res.json();
    const r = data.results?.[0];
    if (!r) {
      cache.set(id, { artwork: null });
      return cache.get(id)!;
    }
    const artwork = (r.artworkUrl100 as string | undefined)?.replace('100x100', '600x600') ?? null;
    const result = {
      artwork,
      artist: r.artistName as string | undefined,
      album: (r.collectionName || r.trackName) as string | undefined,
      year: r.releaseDate ? new Date(r.releaseDate).getFullYear() : undefined,
    };
    cache.set(id, result);
    return result;
  } catch {
    cache.set(id, { artwork: null });
    return cache.get(id)!;
  }
}
