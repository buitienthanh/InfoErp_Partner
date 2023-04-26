import React from 'react';
import chatIcon from '../../img/chat/chatIcon.svg';

import './Chat.css';
import { useTranslation } from 'react-i18next';
import ChatMsg from '../../component/chatMsg/chatMsg';
import ImgCom from '../../component/imgCom/ImgCom';

export default function Chat() {
    const { t, } = useTranslation();

    return (
        <div id='chatDiv'>
            <div id='chatIconDiv'>
                <ImgCom id='chatIcon' src={chatIcon} alt='InfoCity icon' />
            </div>
            <div id='chatTextDiv'>
                <div>
                    <label>{t('about.chatContent1')}</label>
                </div>
                <div>
                    <label>{t('about.chatContent2')}</label>
                </div>
            </div>
            <ChatMsg/>
        </div>
    )
}