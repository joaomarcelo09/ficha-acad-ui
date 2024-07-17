const capitalizeFirstLetter = (string: string) => {
  return string.charAt(0).toUpperCase() + string.slice(1)
}

export function getColumnsByJson(json: object[]) {
  let keysReturn
  json.forEach((item) => {
    let keys = Object.keys(item)
    keys = keys.map((key) => capitalizeFirstLetter(key))
    keysReturn = keys
  })
  return keysReturn
}
