import config from '../config/config';
import { DateTime } from "luxon";
import validate from "../util/validateUtil";

function formatDateTime(strDate) {
  let dateFr = new Date(strDate);
  let [month, day, year] = [dateFr.getMonth(), dateFr.getDate() + 1, dateFr.getFullYear()];
  let [hour, minutes, seconds] = [dateFr.getHours(), dateFr.getMinutes(), dateFr.getSeconds()];

  let frDateFinal = year + '-' + validate.isZeroTen(month) + '-' + validate.isZeroTen(day) + ' ';
  frDateFinal += validate.isZeroTen(hour) + ':' + validate.isZeroTen(minutes) + ':' + validate.isZeroTen(seconds);

  return frDateFinal;
}

export default function saveGuestRegis(props) {
    let dt = DateTime.now();
    const timeIn = dt;
    const timeOut = dt.plus({hours: 1});
    return new Promise((resolve, reject) => {
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json'},
            body: JSON.stringify(
                {
                    iDate: formatDateTime(timeIn),
                    oDate: formatDateTime(timeOut),
                    realIDate: formatDateTime(timeIn),
                    realODate: formatDateTime(timeOut),
                    regisTp: 0,
                    status: 2,
                    guestId: props.guestId,
                    aptId: props.aptId,
                    baRoomId: props.baRoomId,
                }
            )
        }
    
        fetch(config.api.save_quest_regis, requestOptions)
            .then(response => resolve(response.json())).catch(error => reject(error));
    })
}
