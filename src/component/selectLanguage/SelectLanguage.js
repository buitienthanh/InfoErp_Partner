import React from 'react';
import flagEng from '../../img/menu/flagEng.png'
import flagViet from '../../img/menu/flagViet.png'
import flagKorea from '../../img/menu/flagKorea.png'
import './SelectLanguage.css'
import { useTranslation } from 'react-i18next';
import ImgCom from '../imgCom/ImgCom';

export default function SelectLanguage(props) {
    const selectedLanguage = props.language;
    const {t, } = useTranslation();


    return (
        <div id='lanDivLayout' style={{visibility: props.showMenu ? 'visible' : 'hidden'}}>
            <div className={'divLanguage' + (selectedLanguage.key === 'en' ? ' selected' : '')} 
            onClick={() => props.onChangeLanguage({ img: flagEng, name: 'lang.en', key: 'en' })}
            >
                <ImgCom src={flagEng} alt='' className='divFlag' />
                <div>
                    <label>{t('lang.en')}</label>
                </div>
            </div>
            <div className={'divLanguage' + (selectedLanguage.key === 'vn' ? ' selected' : '')} onClick={() => props.onChangeLanguage({ img: flagViet, name: 'lang.vn', key: 'vn' })}>
                <ImgCom src={flagViet} alt='' className='divFlag' />
                <div>
                    <label>{t('lang.vn')}</label>
                </div>
            </div>
            <div className={'divLanguage' + (selectedLanguage.key === 'kr' ? ' selected' : '')} onClick={() => props.onChangeLanguage({ img: flagKorea, name: 'lang.kr', key: 'kr' })}>
                <ImgCom src={flagKorea} alt='' className='divFlag' />
                <div>
                    <label>{t('lang.kr')}</label>
                </div>
            </div>
        </div>
    )
}