import moment from 'moment'
import 'moment/locale/ko'

export const convertDateToString = (dateString: string) => {
  return moment(dateString).format('LL')
}
