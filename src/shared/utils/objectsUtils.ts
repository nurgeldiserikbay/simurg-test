export const getFieldsStartWith = (obj: { [key: string]: any }, startWith: string) => {
  return Object.keys(obj).filter((key) => {
    return key.startsWith(startWith)
  }).reduce((acc: { [key: string]: any }, key) => {
    acc[key] = obj[key]

    return acc
  }, {})
}