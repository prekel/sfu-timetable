import {days, months} from "./constants"

export function getWeekNum(day, month, year) {
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

export function getTodaySubjects(timetable, day, week) {
  return timetable.filter(item => {
    return (item.day == day && item.week == week)
  })
}