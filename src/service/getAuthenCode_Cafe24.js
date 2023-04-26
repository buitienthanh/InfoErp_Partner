import config from '../config/config';

export default function getAuthenCode(props) {
  return new Promise((resolve, reject) => {
        const requestOptions = {
            method: 'POST',
            headers: { 
                    'Authorization': "Basic WGZpRkdjeXZDeTJMWFl3SmZWNDJHRzpBUnpuNjc1UU05R3RmVWZlY0l1ZVdi",
                    'Content-Type': 'application/x-www-form-urlencoded'
                    },
            body: JSON.stringify(
                {
                    grant_type: "authorization_code",
                    code: props.authen_code,
                    redirect_uri:"https://infoerpvn.com/RedirectCafe24",
                }
            )
        }
        fetch(`https://${props.mall_id}.cafe24api.com/api/v2/oauth/token`, requestOptions)
        .then(response => resolve(response.text()))
        .then(result => console.log(result))
        .catch(error => console.log('error', reject(error)))
  })
}