import dayjs from 'dayjs'
import ptBr from 'dayjs/locale/pt-br'
import relativeTime from 'dayjs/plugin/relativeTime'

dayjs.extend(relativeTime)
dayjs.locale(ptBr)

export class DateUtils {
  static fromNow(date: Date) {
    return dayjs(date).fromNow()
  }
}
