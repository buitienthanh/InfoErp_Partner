import React, { useEffect, useState } from 'react';
import { Container, Row, Accordion, Col } from 'react-bootstrap';
import CollapsibleCard from '../../component/collapsibleCard/collapsibleCard';
import apartmentIcon from '../../img/introduction/apart.png';
import buildingIcon from '../../img/introduction/complex.png';
import coworkingIcon from '../../img/introduction/coWork.png';
import miniIcon from '../../img/introduction/mini.png';
import dormIcon from '../../img/introduction/dorm.png';
import introBackground from '../../img/background/introBackground.png';
import './introduction.css'
import IntroItem from '../../component/introItem/IntroItem';
import { useTranslation } from 'react-i18next';
import ImgCom from '../../component/imgCom/ImgCom';
import introductioon_vn from '../../img/introduction/introduction_vn.png';
import introduction_kr from '../../img/introduction/introduction_kr.png';
import introduction_en from '../../img/introduction/introduction_en.png';
import introductioon_vn_mobile from '../../img/introduction/introduction_vn_mobile.png';
// import introduction_kr from '../../img/introduction/introduction_kr.png';
// import introduction_en from '../../img/introduction/introduction_en.png';

import i18next from 'i18next';

export default function Introduction(props) {
    const apartment = { key: '0',
      icon: "https://static.wixstatic.com/media/925c60_26f35476c8604616a92c92341642d4b6~mv2.png/v1/fill/w_220,h_220,al_c,usm_0.66_1.00_0.01,enc_auto/Banner-07.png", title: 'intro.apartment', detail: 'intro.apartmentDetail',buttonContent:'Yêu cầu báo giá' }
    const building = { key: '1',
      icon: "https://static.wixstatic.com/media/925c60_0b29d3a6ec3f435a9507c4d5d0391f1c~mv2.png/v1/fill/w_220,h_220,al_c,usm_0.66_1.00_0.01,enc_auto/Banner-09.png", title: 'intro.complex', detail: 'intro.complexDetail',buttonContent:'Đăng ký' }
    const coWorking = { key: '2', color: '#FFBB55', icon: coworkingIcon, title: 'intro.cowork', detail: 'intro.coworkDetail' }
    const miniApartment = { key: '3', color: '#10D0A2', icon: miniIcon, title: 'intro.mini', detail: 'intro.miniDetail' }
    const dormitory = { key: '4', color: '#899ED6', icon: dormIcon, title: 'intro.dorm', detail: 'intro.dormDetail' }
    const {t} = useTranslation();

    const imgIntroductionMultiLanguage = () => {
        switch(i18next.language){
            case "vn":
                return introductioon_vn;
            case "en":
                return introduction_en;
            case "kr":
                return introduction_kr;
            default:
                break;
        } 
    }

    const imgIntroductionMobileMultiLanguage = () => {
        switch(i18next.language){
            case "vn":
                return introductioon_vn_mobile;
            // case "en":
            //     return introduction_en;
            // case "kr":
            //     return introduction_kr;
            default:
                break;
        } 
    }

    useEffect(() => {
        
    }, []);


    return (
        <div id='introduction' ref={props.refer}>
            <div>
                <h2 className='labelTitle' style={{marginTop:'63.66px',marginBottom:'24px'}}>{t('intro.title')}</h2>
            </div>
            <Container >
                <Row >
                    <Col className='introduction-content'>
                    <div>
                        {t('introduction.detail.1')}
                    </div>
                    <div>
                        {t('introduction.detail.2')}
                    </div>
                    </Col>
                </Row>
                
            </Container>
            
            <div className='mobile'>
                <div style={{textAlign:'center',marginTop:49}}>
                    <ImgCom src={imgIntroductionMobileMultiLanguage()} alt='' className='img-intro' />
                </div>
            </div>
            <div className='web'>
                <div style={{textAlign:'center',marginTop:49}}>
                    <ImgCom src={imgIntroductionMultiLanguage()} alt='' className='img-intro' />
                </div>
            </div>
           
        </div>
    )
}