function getBaseUrl() {
  if (typeof window !== 'undefined') return ''; // Browser should use relative url
  if (process.env.VERCEL_URL) return `https://${process.env.VERCEL_URL}`; // SSR should use vercel url
  return `http://127.0.0.1:${process.env.PORT ?? 3000}`; // Dev SSR should use localhost
}

export const Host = getBaseUrl();
