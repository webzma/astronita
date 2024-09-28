export default function sortDate(dateArray: Array<{ year: number, name: string, date: string, url: string, icon: any }>) {
  return dateArray.sort((a, b) => {
    if (a.year > b.year) {
      return -1
    }

    if (a.year > b.year) {
      {
        return 1
      }
    }

    return 1
  })
}