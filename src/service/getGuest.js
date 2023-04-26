import config from '../config/config';

function getGuestByIdCard(props) {
    return new Promise((resolve, reject) => {
        const requestOptions = {
            method: 'GET',
            headers: { 'Content-Type': 'application/json'},
        }
    
        fetch(config.api.getGuestByIdCard + `${encodeURIComponent(props.idCard)}`, requestOptions)
            .then(response => resolve(response.json())).catch(error => reject(error));
    })
}

function getGuestByVisitId(props) {
    return new Promise((resolve, reject) => {
        const requestOptions = {
            method: 'GET',
            headers: { 'Content-Type': 'application/json'},
        }
    
        fetch(config.api.getGuestByVisitId + `${encodeURIComponent(props.visitId)}`, requestOptions)
            .then(response => resolve(response.json())).catch(error => reject(error));
    })
}

const getGuest = {getGuestByIdCard, getGuestByVisitId};

export default getGuest;