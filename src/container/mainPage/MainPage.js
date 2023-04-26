import React from 'react'
import { Container, Col, Row } from 'react-bootstrap'
import './MainPage.css'
import { useTranslation } from 'react-i18next';
import ButtonModal from '../../component/buttonModal/ButtonModal';
import main_page from '../../img/mainPage/main_page.png'

export default function MainPage(props) {
    const { t, } = useTranslation();
    return (
        <div id='divMain' className='mainPage'>
            <Container id='containerMain'>
                <div id='imgBack' alt='' />
                <Row id='rowTitleLabel'>
                    <Col id='colTitleLabel'>
                        <div id='contentMainPage'>
                            <div>
                                <h1>
                                    <div>
                                        <label className='titleLabel titleAbove'>
                                            {t('mainPage.touch')} 
                                        </label>
                                    </div>
                                    <div>
                                        <label className='titleLabel titleBelow'>
                                            {t('mainPage.lifeUtil')}
                                        </label>
                                    </div>
                                    <div className='mobile'>
                                        <span className='explain'>Là phần mềm đa ngôn ngữ, được phát triển bởi công ty công nghệ đến từ Hàn Quốc chuyên về các sản phẩm quản lý tài chính, đáp ứng được mọi loại hình doanh nghiệp</span>
                                    </div>
                                    <div>
                                        <label className='titleLabel titleBelowBelow'>
                                            {t('mainPage.solution')}
                                        </label>
                                    </div>
                                </h1>
                            </div>
                        </div>
                        <div>
                            <ButtonModal name={'mainPage.registerBtn'} id={'buttonMainPage'} />
                        </div>
                        {/* <img style={{  }} src={main_page} alt="main_page.png" /> */}
                    </Col>
                    {/* <Col md='4'>
                        <img style={{  }} src={main_page} alt="main_page.png" />
                    </Col> */}
                </Row>
            </Container>
        </div>
    )
}