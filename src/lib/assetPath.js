export function assetPath(path) {
  const prefix = process.env.NEXT_PUBLIC_BASE_PATH || ''
  if (!path.startsWith('/')) {
    path = `/${path}`
  }
  return `${prefix}${path}`
}
