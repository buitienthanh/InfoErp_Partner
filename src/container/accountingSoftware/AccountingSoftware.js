import { useTranslation } from 'react-i18next';
import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './AccountingSoftware.css'
import AccountingPoint_1 from '../../img/accountingSofware/accounting_point_1.png'
import AccountingPoint_2 from '../../img/accountingSofware/accounting_point_2.png'
import AccountingPoint_3 from '../../img/accountingSofware/accounting_point_3.png'
import AccountingPoint_4 from '../../img/accountingSofware/accounting_point_4.png'
import AccountingPoint_5 from '../../img/accountingSofware/accounting_point_5.png'
import AccountingPoint_6 from '../../img/accountingSofware/accounting_point_6.png'
import AccountingPoint_7 from '../../img/accountingSofware/accounting_point_7.png'
import AccountingPoint_8 from '../../img/accountingSofware/accounting_point_8.png'
import AccountingPoint_9_vn from '../../img/accountingSofware/accounting_point_9_vn.png'
import AccountingPoint_9_en from '../../img/accountingSofware/accounting_point_9_en.png'
import AccountingPoint_9_kr from '../../img/accountingSofware/accounting_point_9_kr.png'
import AccountingPoint_9_vn_mobile from '../../img/accountingSofware/accounting_point_9_vn_mobile.png'
// import AccountingPoint_9_en_mobile from '../../img/accountingSofware/accounting_point_9_en_mobile.png'
// import AccountingPoint_9_kr_mobile from '../../img/accountingSofware/accounting_point_9_kr_mobile.png'

import i18next from 'i18next';
import RenderHTML from '../../component/renderHTML';

export default function AccountingSoftware() {
    const { t, } = useTranslation();

    const imgIntroductionMultiLanguage = () => {
        switch(i18next.language){
            case "vn":
                return AccountingPoint_9_vn;
            case "en":
                return AccountingPoint_9_en;
            case "kr":
                return AccountingPoint_9_kr;
            default:
                break;
        } 
    }

    const imgIntroductioMobileMultiLanguage = () => {
        switch(i18next.language){
            case "vn":
                return AccountingPoint_9_vn_mobile;
            // case "en":
            //     return AccountingPoint_9_en_mobile;
            // case "kr":
            //     return AccountingPoint_9_kr_mobile;
            default:
                break;
        } 
    }

    return (
        <div id="accounting-sofware">
            <Row className='accounting-title'>
                <Col style={{textAlign:'center'}} lg={2} sm={0}></Col>
                <Col style={{textAlign:'center'}} lg={8} sm={12}>
                    <div className='backgroundTitle web'>{t('accountingSoftware.markTitle')}</div>
                    <RenderHTML HTML={t('accountingSoftware.title')} />
                </Col>
                <Col style={{textAlign:'center'}} lg={2} sm={0}></Col>
            </Row>
            <Container>
                <Row>
                    <Col style={{textAlign:'center'}} className='accounting-sub-title'> {t('accountingSoftware.subTitle1')} <span className='accounting-sub-title-mark'>{t('accountingSoftware.subTitleBold1')}</span></Col>
                </Row>
                <Row className='accounting-group'>
                    <Col className='accounting-point' sm={3}>
                        <img className='accounting-point-img' src={AccountingPoint_1} />
                        {t('accountingSoftware.regularBusinessesDetail.1')}
                    </Col>
                    <Col className='accounting-point' sm={3}>
                        <img className='accounting-point-img' src={AccountingPoint_2} />
                        {t('accountingSoftware.regularBusinessesDetail.2')}
                    </Col>
                    <Col className='accounting-point' sm={3}>
                        <img className='accounting-point-img' src={AccountingPoint_3} />
                        {t('accountingSoftware.regularBusinessesDetail.3')}
                    </Col>
                    <Col className='accounting-point' sm={3}>
                        <img className='accounting-point-img' src={AccountingPoint_4} />
                        {t('accountingSoftware.regularBusinessesDetail.4')}
                    </Col>
                </Row>
                <Row className='accounting-group'>
                    <Col className='accounting-point' sm={3}>
                        <img className='accounting-point-img' src={AccountingPoint_5} />
                        {t('accountingSoftware.regularBusinessesDetail.5')}
                    </Col>
                    <Col className='accounting-point' sm={3}>
                        <img className='accounting-point-img' src={AccountingPoint_6} />
                        {t('accountingSoftware.regularBusinessesDetail.6')}
                    </Col>
                    <Col className='accounting-point' sm={3}>
                        <img className='accounting-point-img' src={AccountingPoint_7} />
                        {t('accountingSoftware.regularBusinessesDetail.7')}
                    </Col>
                    <Col className='accounting-point' sm={3}>
                        <img className='accounting-point-img' src={AccountingPoint_8}/>
                        {t('accountingSoftware.regularBusinessesDetail.8')}
                    </Col>
                </Row>
            </Container>
           
            <Container>
                <Row>
                    <Col style={{textAlign:'center'}} className='accounting-sub-title'>{t('accountingSoftware.subTitle2')} <span className='accounting-sub-title-mark'>{t('accountingSoftware.subTitleBold2')}</span></Col>
                </Row>
                <Row>
                    <Col style={{textAlign:'center'}}>
                        <div className='web'>
                            <img className='accounting-center-img' src={imgIntroductionMultiLanguage()} />
                        </div>
                        <div className='mobile'>
                            <img className='accounting-center-img' src={imgIntroductioMobileMultiLanguage()} />
                        </div>
                    </Col>
                </Row>
                <Row className='discount-group'>
                    <Col xs={6} sm={6} md={3} lg={3} className='discount-col'>
                        <div className='discount'>{t('discount.titleFirstColumn')}</div>
                        <div className='discount'>{t('discount.subTitleFirstColumn')}</div>
                        <div className='discount-content'>{t('discount.detailFirstColumn')}</div>
                    </Col>
                    <Col xs={6} sm={6} md={3} lg={3} className='discount-col'>
                        <div className='discount'>{t('discount.titleSecondColumn')}</div>
                        <div className='discount'>{t('discount.subTitleSecondColumn')}</div>
                        <div className='discount-content'>{t('discount.detailSecondColumn')}</div>
                    </Col>
                    <Col xs={6} sm={6} md={3} lg={3} className='discount-col'>
                        <div className='discount'>{t('discount.titleThirdColumn')}</div>
                        <div className='discount'>{t('discount.subTitleThirdColumn')}</div>
                        <div className='discount-content'>{t('discount.detailThirdColumn')}</div>
                    </Col>
                    <Col xs={6} sm={6} md={3} lg={3} className='discount-col'>
                        <div className='discount'>{t('discount.titleFourthColumn')}</div>
                        <div className='discount'>{t('discount.subTitleFourthColumn')}</div>
                        <div className='discount-content'>{t('discount.detailFourthColumn')}</div>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}