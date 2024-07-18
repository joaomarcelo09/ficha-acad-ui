const format = (string: string) => {
  return string.toLowerCase()
}

type JsonObject = { [key: string]: any }

export function getRowsByJson(
  jsonList: JsonObject[],
  fieldsSelected: string[]
): (string | number)[][] {
  if (!fieldsSelected) {
    console.error('FieldsSelected is necessary to compare')
    return []
  }

  const rows: (string | number)[][] = jsonList.map((obj) => {
    return Object.keys(obj)
      .filter((key) => fieldsSelected.some((field) => format(key) === format(field)))
      .map((key) => obj[key])
  })

  return rows
}
