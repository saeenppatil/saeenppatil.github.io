export function assetPath(path: string) {
  const basePath = process.env.PAGES_BASE_PATH || ""
  const normalizedPath = path.startsWith("/") ? path : `/${path}`

  return `${basePath}${normalizedPath}`
}
