let data = new Date()

const dataFormat = (month, day, year) => {
  return `${month + 1}-${day}-${year}`
}

const [month, day, year] = [data.getMonth(), data.getDate(), data.getFullYear()]

data.setDate(data.getDate() + 7);
const [nextMonth, nextDay, nextYear] = [data.getMonth(), data.getDate(), data.getFullYear()]

export let nextSevenDays = dataFormat(nextMonth, nextDay, nextYear)
export let today = dataFormat(month, day, year)