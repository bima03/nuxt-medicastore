export const encodeId = (id) => {
  return btoa(id.toString()).replaceAll("=", "")
}
export const decodeId = (hash) => {
  return atob(hash)
}
