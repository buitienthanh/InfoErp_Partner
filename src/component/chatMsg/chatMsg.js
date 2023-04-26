import React from 'react';
import MessengerCustomerChat from 'react-messenger-customer-chat';
import config from '../../config/config';

export default function ChatMsg() {

    return (
        <div>
            <MessengerCustomerChat pageId={config.facebook.pageId} appId={config.facebook.appId}/>
        </div>
    )
}