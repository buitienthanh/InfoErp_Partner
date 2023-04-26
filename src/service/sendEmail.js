import config from '../config/config';

export default function sendEmail(props) {
    
    return new Promise((resolve, reject) => {
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json'},
            body: JSON.stringify(
                {
                    from: config.email,
                    to: props.email,
                    subject:"Chúc mừng, bạn đã đăng ký thành công",
                    text: "Chúc mừng, bạn đã đăng ký thành công",
                    content : {
                        name: props.name,
                        email: props.email,
                        phoneNumber: props.phone,
                        taxCode : props.tax
                    } 
                }
            )
        }
        fetch(config.api.send_email, requestOptions)
            .then(response => resolve(response.json())).catch(error => reject(error));
    })
}