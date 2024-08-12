const capitalizeFirstLetter = (string: string) => {
  return string.charAt(0).toUpperCase() + string.slice(1)
}

const format = (string: string) => {
  return string.toLowerCase()
}

export function getColumnsByJson(json: object[], fieldsSelected: string[]) {
  if (!fieldsSelected) {
    console.error('FieldsSelected is necessary to compare')
    return []
  }

  const keys = Object.keys(json[0])
    .filter((key) => fieldsSelected.some((field) => format(key) === format(field)))
    .map(capitalizeFirstLetter)

  return keys
}
