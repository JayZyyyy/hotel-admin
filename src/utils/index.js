import dayjs from 'dayjs'
import moment from 'moment'

export function dateToLocale(date) {
  return dayjs(date.getTime()).format('YYYY-MM-DD')
}

export function betweenDays(start, end) {
  if (end && start) {
    const startDate = moment(start).format('YYYY-MM-DD')
    const endDate = moment(end).format('YYYY-MM-DD')
    return moment(endDate).diff(startDate, 'day')
  }
  return 0
}
