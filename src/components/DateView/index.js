import { prepareDate } from "utils/prepareDate"
import styles from './style.module.scss'

const DateView = props => {
    let {day, month, year} = prepareDate(props.date);
    month += 1;
    if(day < 10) day = '0' + day;
    if(month < 10) month = '0' + month;

    return (
        <div className={styles.dateView}>
            Post date: {day}.{month}.{year}
        </div>
    )
}

export default DateView;