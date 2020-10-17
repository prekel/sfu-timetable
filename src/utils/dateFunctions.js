import {days, months} from "./constants"

export function getWeekNum(date) {
  let day = date.getDate()
  let month = date.getMonth()
  let year = date.getFullYear()
  month++;
  let a = Math.floor((14 - month) / 12)
  let y = year + 4800 - a
  let m = month + 12 * a - 3
  let J = day + Math.floor((153 * m + 2) / 5) + 365 * y + Math.floor(y / 4) -
    Math.floor(y / 100) + Math.floor(y / 400) - 32045
  let d4 = (((J + 31741 - (J % 7)) % 146097) % 36524) % 1461
  let L = Math.floor(d4 / 1460)
  let d1 = ((d4 - L) % 365) + L
  let week = Math.floor(d1 / 7) + 1
  if (week < 10) week = '0' + week
  return week % 2 == 0 ? 1 : 2
}

export function getWeekDay(day) {
  return days[day]
}

export function getMonth(month) {
  return months[month]
}

export function getTodaySubjects(timetable, day) {
  return timetable.filter(item => {
    return (item.day == day)
  })
}

export function addDays(date, days) {
  let result = new Date(date);
  result.setDate(result.getDate() + days);
  return result
}

export function getStartWeek(date, days) {
  if (days == 0) days = 7
  let result = new Date(date);
  result.setDate(result.getDate() - days);
  return result
}

export function getWeekSubjects(array, week) {
  return array.filter(item => {
    return (item.week == week)
  })
}

export function getSubjects(array) {
  let newArr = []
  for (let i = 1; i <= 6; i++) {
    newArr.push(array.filter(item => {
      if (item.day == i) return item
    }))
  }
  return newArr
}