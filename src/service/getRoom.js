import config from '../config/config';

export default function getRoom(props) {
    return new Promise((resolve, reject) => {
        const requestOptions = {
            method: 'GET',
            headers: { 'Content-Type': 'application/json'},
        }
    
        fetch(config.api.getRoom + `${encodeURIComponent(props.aptId)}`, requestOptions)
            .then(response => resolve(response.json())).catch(error => reject(error));
    })
}