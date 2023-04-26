const prod = {
    video_intro: {
        url: 'https://www.youtube.com/watch?v=Fh2bCtmKr4M',
        id: 'Fh2bCtmKr4M'
    },

    api: {
        // getRoom: 'https://nodeapi.infocityvn.com:444/manager/room/getRoom?aptId=',
        // getGuestByIdCard: 'https://nodeapi.infocityvn.com:444/manager/qrCode/getGuestByIdCard?idCard=',
        // getGuestByVisitId: 'https://nodeapi.infocityvn.com:444/manager/qrCode/getGuestByVisitId?visitId=',
        // update_quest: 'https://nodeapi.infocityvn.com:444/manager/qrCode/updateGuest',
        // save_quest_regis: 'https://nodeapi.infocityvn.com:444/manager/qrCode/saveGuestRegis',
        // check_resident: 'https://nodeapi.infocityvn.com:444/manager/qrCode/checkResident?aptId='
        send_email: 'https://www.infoerpvn.com:9100/api/mail/send-mail',
        insert_quest: 'https://www.infoerpvn.com:9100/api/users/registered-users',
    },

    email: 'infoerp@infoplusvn.com',

    facebook: {
        pageId: '112556081085822', // get from facebook page about
        appId: '842127353072981' // create business app by facebook developers and setup messenger
    }
}

export default prod;
