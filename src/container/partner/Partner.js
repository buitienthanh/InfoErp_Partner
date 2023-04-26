import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './Partner.css'
import { useTranslation } from 'react-i18next';
import businessPartner1 from '../../img/partner/business_partner_1.png';
import businessPartner2 from '../../img/partner/business_partner_2.png';
import businessPartner3 from '../../img/partner/business_partner_3.png';
import businessPartner4 from '../../img/partner/business_partner_4.png';
import businessPartner5 from '../../img/partner/business_partner_5.png';
import businessPartner6 from '../../img/partner/business_partner_6.png';
import businessPartner7 from '../../img/partner/business_partner_7.png';
import businessPartner8 from '../../img/partner/business_partner_8.png';
import businessPartner9 from '../../img/partner/business_partner_9.png';
import businessPartner10 from '../../img/partner/business_partner_10.png';
import businessPartner11 from '../../img/partner/business_partner_11.png';
import businessPartner12 from '../../img/partner/business_partner_12.png';
import businessPartner13 from '../../img/partner/business_partner_13.png';
import businessPartner14 from '../../img/partner/business_partner_14.png';
import businessPartner15 from '../../img/partner/business_partner_15.png';
import businessPartner16 from '../../img/partner/business_partner_16.png'; 
import businessPartner17 from '../../img/partner/vnpt_invoice.jpg'; 
import businessPartner18 from '../../img/partner/LOGO_MIFI.png'; 
import businessPartner19 from '../../img/partner/genCRM.jpg'; 
import trainPartner1 from '../../img/partner/train_partner_1.png';
import trainPartner2 from '../../img/partner/train_partner_2.png';
import trainPartner3 from '../../img/partner/train_partner_3.png';
import memberUnit from '../../img/partner/member_Unit.png';
import RenderHTML from '../../component/renderHTML';
import line_break from '../../img/Line_break.png';

export default function Partner() {
    const { t, } = useTranslation();
    return (
     <>
     <Container id="partner">
         <Row>
             <Col>
                <img style={{ width: '114px', height: '8px', display: 'block', marginLeft: 'auto', marginRight: 'auto' }} src={line_break} alt="line_break.png" />
                <div className='backgroundTitle web'>{t('partner.markTitle')}</div>
                <h3 className="text-center bussiness-title"> <RenderHTML HTML={t('partner.title')} /> </h3>
             </Col>
         </Row>
         <Row className = 'partner-row'>
            <Col md={6}>
               <div className='bussiness-sub-title'>{t('partner.memberUnit')}</div>
               <div className='web tick'></div>
               <div>
                    <img src={memberUnit} alt="" className="memberUnit" style={{width:'125px',height:'38px',marginRight:'58px'}}/>               
               </div>
             </Col>
             <Col md={6}>
               <div className='bussiness-sub-title'>{t('partner.educatePartner')}</div>
               <div className='web tick'></div>
               <div>
                    <img src={trainPartner1} className="trainPartner1" alt="" />
                    <img src={trainPartner2} className="trainPartner2" alt="" />
                    <img src={trainPartner3} className="trainPartner3" alt="" />
               </div>
             </Col>
         </Row>
         <Row className = 'partner-row'>
             <Col> 
               
                <div className='bussiness-sub-title'>{t('partner.businessPartner')}</div>
                <div className='web tick'></div>
                <div>
                    <img src={businessPartner1} className='businessPartner1' alt="" />
                    <img src={businessPartner2} className='businessPartner2' alt="" />
                    <img src={businessPartner3} className='businessPartner3' alt="" />
                    <img src={businessPartner4} className='businessPartner4' alt="" />
                    <img src={businessPartner5} className='businessPartner5' alt="" />
                    <img src={businessPartner6} className='businessPartner6' alt="" />
                    
                </div>
                <div>
                    <img src={businessPartner9} className='businessPartner9' alt="" />
                    <img src={businessPartner7} className='businessPartner7' alt="" />
                    <img src={businessPartner8} className='businessPartner8' alt="" />
                    <img src={businessPartner14} className='businessPartner14' alt="" />
                    <img src={businessPartner15} className='businessPartner15' alt="" />
                    <img src={businessPartner13} className='businessPartner13' alt="" />
                    {/* <img src={businessPartner10} className='businessPartner10' alt="" /> */}
                </div>
                <div>
                    <img src={businessPartner11} className='businessPartner11' alt="" />
                    <img src={businessPartner12} className='businessPartner12' alt="" />
                    <img src={businessPartner16} className='businessPartner12' alt="" />
                    <img src={businessPartner17} className='businessPartner12' alt="" />
                    <img src={businessPartner18} className='businessPartner12' alt="" />
                    <img src={businessPartner19} className='businessPartner12' alt="" />
                </div>          
             </Col>
         </Row>
        
     </Container>
     </>   
    )
}