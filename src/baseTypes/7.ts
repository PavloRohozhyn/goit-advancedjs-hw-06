/*
  Створіть функцію (isWeekend), яка приймає день тижня (з вашого enum)
  і повертає boolean значення, що вказує, чи це день робочий чи вихідний.
*/

enum days {
  mon = "Monday",
  tues = "Tuesday",
  wed = "Wednesday",
  thurs = "Thursday",
  fri = "Friday",
  sat = "Saturday",
  sun = "Sunday",
}

function isWeekend(day: days) {
  return day === days.sat || day === days.sun;
}
