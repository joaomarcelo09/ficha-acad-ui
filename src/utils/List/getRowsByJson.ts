export function getRowsByJson(json: object[]) {
  let rows
  json.forEach((item) => {
    rows = Object.values(item)
  })
  return rows
}
