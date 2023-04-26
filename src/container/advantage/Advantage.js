import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import AdvantageItem from '../../component/advantageItem/AdvantageItem';
import webImgWeb from '../../img/advantage/ui_ux_friendly.png';
import botImgWeb from '../../img/advantage/accounting-bot.png';
import appLanguageImgWeb_vn from '../../img/advantage/da_ngon_ngu_vn.png';
import appLanguageImgWeb_en from '../../img/advantage/da_ngon_ngu_en.png';
import appLanguageImgWeb_kr from '../../img/advantage/da_ngon_ngu_kr.png';
import appResImgWeb from '../../img/advantage/kiem_tra_doi_chieu_1.png';
import appResImgWeb2_vn from '../../img/advantage/kiem_tra_doi_chieu_2_vn.png'
import appResImgWeb2_en from '../../img/advantage/kiem_tra_doi_chieu_2_en.png'
import appResImgWeb2_kr from '../../img/advantage/kiem_tra_doi_chieu_2_kr.png'
import appManImgWeb_vn from '../../img/advantage/tich_hop_firm_bank_vn.png';
import appManImgWeb_en from '../../img/advantage/tich_hop_firm_bank_en.png';
import appManImgWeb_kr from '../../img/advantage/tich_hop_firm_bank_kr.png';
import AdvantageItemWebRight from '../../component/advantageItem/AdvantageItemWebRight';
import AdvantageItemWebLeft from '../../component/advantageItem/AdvantageItemWebLeft';
import { useTranslation } from "react-i18next";
import './Advantage.css';
import ImgCom from '../../component/imgCom/ImgCom';
import i18next from 'i18next';

export default function Advantage(props) {
    const { t, } = useTranslation();

    const imgAppManMultiLanguage = () => {
        switch(i18next.language){
            case "vn":
                return appManImgWeb_vn;
            case "en":
                return appManImgWeb_en;
            case "kr":
                return appManImgWeb_kr;
            default:
                break;
        } 
    }

    const imgAppLanguageMultiLanguage = () => {
        switch(i18next.language){
            case "vn":
                return appLanguageImgWeb_vn;
            case "en":
                return appLanguageImgWeb_en;
            case "kr":
                return appLanguageImgWeb_kr;
            default:
                break;
        } 
    }

    const imgAppResMultiLanguage = () => {
        switch(i18next.language){
            case "vn":
                return appResImgWeb2_vn;
            case "en":
                return appResImgWeb2_en;
            case "kr":
                return appResImgWeb2_kr;
            default:
                break;
        } 
    }

    const accountingBot = { 
        imageUrl: botImgWeb,
        subTitle: '',
        titleUp: 'advantage.accountingBotTitle',
        titleDown: 'advantage.webTitle2',
        content: 'advantage.accountingBotDetail',
        content_2 :'',
        content_3 :''
        }

    const web = { 
        imageUrl: webImgWeb,
        subTitle: '',
        titleUp: 'advantage.webTitle1',
        titleDown: 'advantage.webTitle2',
        content: 'advantage.webDetail'
        }
    const appMan = { 
        imageUrl: imgAppManMultiLanguage(),
        subTitle: 'advantage.appManSubTitle',
        titleUp: 'advantage.appManTitle1', 
        titleDown: 'advantage.appManTitle2', 
        content: 'advantage.appManDetail', 
        content_2 : 'advantage.appManDetail2',
        content_3 : 'advantage.appManDetail3',
    }
    const appRes = { 
        imageUrl: appResImgWeb,
        imageUrl_2 : imgAppResMultiLanguage(),
        subTitle: 'advantage.appResSubTitle',
        titleUp: 'advantage.appResTitle1',
        titleDown: 'advantage.appResTitle2', 
        content: 'advantage.appResDetail' 
    }

    const appLanguage = { 
        imageUrl: imgAppLanguageMultiLanguage(),
        subTitle: 'advantage.appLanguageSubTitle',
        titleUp: 'advantage.appLanguageTitle1',
        titleDown: 'advantage.appLanguageTitle2', 
        content: 'advantage.appLanguageDetail' 
    }

    return (
        <div id="advantage" ref={props.refer}>
            <div style={{paddingTop:'40px'}}>
                <Container>
                    <Row>
                        <Col lg={12} id='advLabelWeb'>
                            <div>
                                <div className='backgroundTitle'>{t("advantage.mobileTitle1")}</div>
                                <h2 className='labelTitle'>{t("advantage.title")}</h2>
                            </div>
                            <div>
                                <h4>{t("advantage.subTitle")}</h4>
                            </div>
                        </Col>
                        <Col className='advLabelMobile' sm={12}>
                            <div>
                                <label className='labelTitle'>{t('advantage.mobileTitle1')}</label>
                            </div>
                        </Col>
                        <Col className='advLabelMobile' sm={12}>
                            <div>
                                <label className='labelTitle'>{t('advantage.mobileTitle2')}</label>
                            </div>
                        </Col>
                    </Row>
                </Container>
                <div className='mobile'>
                    <AdvantageItem value={accountingBot} id={'itemBot'} />
                    <AdvantageItem value={web} id={'itemWeb'} />
                    <AdvantageItem value={appMan} id={'itemMan'} />
                    <AdvantageItem value={appRes} id={'itemRes'} />
                    <AdvantageItem value={appLanguage} id={'itemLanguage'} />
                </div>
                <div className='web'>
                    <div style={{ marginBottom: 50 }}>
                        <AdvantageItemWebLeft value={accountingBot} imgLeft={accountingBot.imageUrl} />
                    </div>
                    <div style={{ marginBottom: 50 }}>
                        <AdvantageItemWebRight value={web} imgRight={web.imageUrl} />
                    </div>
                    <AdvantageItemWebLeft value={appMan} imgLeft={appMan.imageUrl} />
                    <ImgCom src="" alt='' style={{width:'770px',marginTop:'50px',marginBottom:'50px'}} />
                    <AdvantageItemWebRight value={appRes} imgRight={appRes.imageUrl} />
                    <div style={{ marginTop: 110,marginBottom: 238 }}>
                        <AdvantageItemWebLeft value={appLanguage} imgLeft={appLanguage.imageUrl} />
                    </div>
                </div>
            </div>
        </div>
    )
}