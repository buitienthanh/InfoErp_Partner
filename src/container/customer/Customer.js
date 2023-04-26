import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import customerIcon from '../../img/customer/customerIcon.png';
import customerIconMobile from '../../img/customer/customerIconMobile.png';
import CustomerItem from '../../component/customerItem/CustomerItem';
import CJ from '../../img/customer/CJ.png'
import Alpha from '../../img/customer/Alpha.png'
import PSA from '../../img/customer/PSA.png'
import CustomerImage from '../../component/customerImage/CustomerImage';
import './Customer.css'
import { useTranslation } from 'react-i18next';
import ImgCom from '../../component/imgCom/ImgCom';
import ButtonModal from '../../component/buttonModal/ButtonModal';
import i18next from 'i18next';

export default function Customer(props) {
    const { t, } = useTranslation();

    return (
        <div style={{ btextAlign: 'center' }} id="customer" ref={props.refer}>
            <Container>
                <Row>
                    <Col lg={6} sm={12} style={{ margin: 'auto' }}>
                        <div style={{ marginBottom: 20 }} className='custTitleDiv'>
                            <div>
                                <div className='backgroundTitle web'>{t('customer.title1')}</div>
                                {
                                    i18next.language != 'kr' ?   <label className='labelTitle'>{t('customer.title1')}</label> : <></>
                                }
                            </div>
                            <div>
                                <label className='labelTitle'>{t('customer.title2')}</label>
                            </div>
                        </div>
                        <div className='web custItemDiv'>
                            <CustomerItem number='150+' content='customer.customer' />
                            <CustomerItem number='2500+' content='customer.building' />
                            <CustomerItem number='7000+' content='customer.user' />
                        </div>
                        <div className='web'>
                            <ButtonModal name='customer.registerBtn' id={'btnCust'} />
                        </div>
                    </Col>
                    <Col lg={6} sm={12} style={{ display: 'flex' }} id='custImg'>
                        <div className='web'>
                            <ImgCom src={customerIcon} style={{ maxWidth: 578, margin: 'auto' }} alt='' />
                        </div>
                        <div className='mobile'> 
                            <ImgCom src={customerIconMobile} style={{ maxWidth: 578, margin: 'auto' }} alt='' />
                        </div>
                    </Col>
                    <Col className='mobile'>
                        <div className='custItemDiv'>
                            <CustomerItem number='150+' content='customer.customer' />
                            <CustomerItem number='2500+' content='customer.building' />
                            <CustomerItem number='7000+' content='customer.user' />
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}