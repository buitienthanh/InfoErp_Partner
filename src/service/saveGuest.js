import config from '../config/config';
import validate from "../util/validateUtil";

function formatDate(strDate){
  let dateFr = new Date(strDate);
  let [month, day, year] = [dateFr.getMonth(), dateFr.getDate() + 1, dateFr.getFullYear()];
  return year + '-' + validate.isZeroTen(month) + '-' + validate.isZeroTen(day);
}

function insertGuest(props) {
    return new Promise((resolve, reject) => {
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(
                {
                    Name: props.name,
                    TaxCode : props.tax,
                    PhoneNumber : props.phone,
                    Email : props.email,
                    SourceFrom : props.sourceFrom
                }
            )
        }
        fetch(config.api.insert_quest, requestOptions)
            .then(response => resolve(response.json())).catch(error => reject(error));
    });
}

function updateGuest(props) {
    return new Promise((resolve, reject) => {
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(
                {
                    guestId: props.id,
                    guestNm: props.guestNm,
                    birthday: formatDate(props.birthday),
                    gender: props.gender,
                    idCard: props.idCard,
                    mobile: props.mobile,
                    nationNm: props.nationNm,
                    address: props.address,
                }
            )
        }

        fetch(config.api.update_quest, requestOptions)
            .then(response => resolve(response.json())).catch(error => reject(error));
    })
}

const saveGuest = {insertGuest, updateGuest}

export default saveGuest;
