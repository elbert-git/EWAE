export function getAssetUrl(name) {
  return new URL(name, import.meta.url).href
}