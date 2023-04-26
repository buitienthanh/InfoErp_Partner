import React from 'react';
import { useTranslation } from 'react-i18next';
import './IntroVideo.css'
import YouTube from 'react-youtube'
import config from '../../config/config';
import accountingBot_vn from '../../img/introduction/accounting-bot_vn.png'
import accountingBot_kr from '../../img/introduction/accounting-bot_kr.png'
import accountingBot_en from '../../img/introduction/accounting-bot_en.png'
import accountingBot_vn_mobile from '../../img/introduction/accounting-bot_vn_mobile.png'
// import accountingBot_kr_mobile from '../../img/introduction/accounting-bot_kr_mobile.png'
// import accountingBot_en_mobile from '../../img/introduction/accounting-bot_en_mobile.png'
import i18next from 'i18next';

export default function IntroVideo(props) {
    const { t, } = useTranslation();

    const imgBotMultiLanguage = () => {
        switch(i18next.language){
            case "vn":
                return accountingBot_vn;
            case "en":
                return accountingBot_en;
            case "kr":
                return accountingBot_kr;
            default:
                break;
        } 
    }

    const imgBotMobileMultiLanguage = () => {
        switch(i18next.language){
            case "vn":
                return accountingBot_vn_mobile;
            // case "en":
            //     return accountingBot_en_mobile;
            // case "kr":
            //     return accountingBot_kr_mobile;
            default:
                break;
        } 
    }

    return (
            <>
            <div className='mobile'>
                <div id='accountingBot'>
                    <img src={imgBotMobileMultiLanguage()} alt="accounting-bot" /> 
                </div>
            </div>
            <div className='web'>
                <div id='accountingBot'>
                    <img src={imgBotMultiLanguage()} alt="accounting-bot" /> 
                </div>
            </div>
            <div id='videoDiv' ref={props.refer}>
                <div>
                    <div className='backgroundTitle web'>{t('introVideo.markTitle')}</div>
                    <h2 className='labelTitle'>{t('introVideo.title')}</h2>
                </div>
                <div style={{ margin: 'auto', marginTop: 48, maxWidth: 719 }}>
                    <div id='videoIntro'>
                        <YouTube className='youtubeVideo' videoId={config.video_intro.id} />
                    </div>
                </div>
            </div>
            </>
    )
}