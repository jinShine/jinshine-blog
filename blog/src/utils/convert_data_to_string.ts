import moment from 'moment'
import 'moment/locale/ko'

export const convertDateToString = (dateString: string) => {
  return moment(dateString).format('LL')
}

export const convertDateFormat = (dateString: string) => {
  const splitedDate = dateString.split('-')

  return `${splitedDate[0]}년 ${splitedDate[1]}월 ${splitedDate[2]}일`
}
