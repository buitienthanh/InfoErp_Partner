import config from '../config/config';

export default function checkResident(props) {
  return new Promise((resolve, reject) => {
    const requestOptions = {
      method: 'GET',
      headers: { 'Content-Type': 'application/json' },
    }
    const baRoomId = '&baRoomId='
    fetch(config.api.check_resident + `${encodeURIComponent(props.aptId)}` + baRoomId + `${props.baRoomId}`, requestOptions)
      .then(response => resolve(response.json())).catch(error => reject(error));
  })
}