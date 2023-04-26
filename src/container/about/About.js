import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import infocityLogo from '../../img/about/infocityLogo.png';
import AboutPhone from '../../component/aboutPhone/AboutPhone';
import vietFlag from '../../img/about/vietFlag.svg';
import phone from '../../img/about/phone.png';
import './About.css'
import { useTranslation } from 'react-i18next';
import ImgCom from '../../component/imgCom/ImgCom';
import imgGov from '../../img/about/gov.png'
import logoERP from '../../img/Logo_ERP_old.png'
import logoYoutube from '../../img/about/youtube.png'
import logoFB from '../../img/about/facebook.png'
import logoZalo from '../../img/about/zalo.png'
import logoLocation from '../../img/about/location.png'
import logoMail from '../../img/about/mail.png'
import AboutLink from '../../component/aboutLink/AboutLink';

export default function About(props) {
    const { t, } = useTranslation();
    const executeScroll = props.executeScroll;
    const ref = props.refer;
    const arr = props.arr;

    const aboutList = arr.map((v, i) => {
        return (
            <AboutLink key={i} name={t(v.name)} executeScroll={executeScroll}  refer={ref[i]} i={i} />
        )
    })

    return (
        <div id='aboutDiv'>
            <Container style={{position:'relative',margin:'0'}}>
                <Row>
                    <Col  xs={12} md={3} style={{paddingLeft:0}}>
                        <ImgCom src={logoERP} alt='' className='logo-erp' />
                       
                    </Col>
                    <Col className='mobile info-erp'>
                        <div>Giấy CNĐKKD: 0108154862</div>
                        <div>Ngày cấp: 03/02/2018, được sửa đổi lần thứ 07 ngày 16/07/2021</div>
                        <div>Phòng Đăng ký kinh doanh - Sở Kế hoạch và Đầu tư TP. Hà Nội</div>
                    </Col>
                    <Col xs={12} md={9} style={{paddingLeft:'8%'}}>
                        <a href="tel:02473048833" style={{textDecoration:'none'}}>
                            <AboutPhone flag={phone} phoneNumber={'024 7304 8833'} />
                        </a>
                        <Row>
                            <Col className='aboutInfo'>
                                <div className='aboutInfoDetail'>
                                    <label>
                                        <img src={logoLocation} alt="img-zalo" style={{width:'16px',marginRight:'6px'}} /> 
                                        {t('about.mainAddress')}
                                    </label>
                                </div>
                                <div className='aboutInfoDetail'>
                                    <label>
                                        <img src={logoLocation} alt="img-zalo" style={{width:'16px',marginRight:'6px'}} />
                                        {t('about.office')}
                                    </label>
                                </div>
                                <div className='aboutInfoDetail'>
                                    <label>
                                        <img src={logoMail} alt="img-zalo" style={{width:'16px',marginRight:'6px'}} />
                                        {t('about.email')}
                                    </label>
                                </div>
                               
                            </Col>
                        </Row>
                    </Col>
                    <div className='web' style={{marginTop:'4%'}}>
                        <div id='social'>
                                <a href="https://www.facebook.com/InfoERP" target="_blank" alt="link-facebook">
                                    <img src={logoFB} alt="img-facebook" style={{width:'36px',height:'36px',marginRight:'26px'}} />
                                </a>
                                <a href="https://www.youtube.com/channel/UCKG_yIj5o-sUpgpyflWMsjA" target="_blank" alt="link-youtube">
                                    <img src={logoYoutube} alt="img-youtube" style={{width:'36px',height:'36px',marginRight:'26px'}} />
                                </a>
                                {/* <a href="" target="_blank" alt="link-zalo">
                                    <img src={logoZalo} alt="img-zalo" style={{width:'36px',height:'36px'}} />
                                </a> */}
                        </div>
                        <div id='govDiv'>
                            <a href='http://online.gov.vn/Home/WebDetails/87508' target="_blank">
                                <img style={{ height: 70, width: 200 }} alt='' title='' src={imgGov} />
                            </a>
                        </div>
                    </div>
                    <div className='mobile'>
                        <Col className='social'>
                            <a href="https://www.facebook.com/InfoPlusCOLTD" target="_blank" alt="link-facebook">
                                <img src={logoFB} alt="img-facebook" style={{width:'36px',height:'36px'}}  className="img-facebook" />
                            </a>
                            <a href="https://www.youtube.com/channel/UCKG_yIj5o-sUpgpyflWMsjA" target="_blank" alt="link-youtube">
                                <img src={logoYoutube} alt="img-youtube" style={{width:'36px',height:'36px'}}  className="img-youtube"/>
                            </a>
                            {/* <a href="" target="_blank" alt="link-zalo">
                                <img src={logoZalo} alt="img-zalo" style={{width:'36px',height:'36px'}} className="img-zalo"/>
                            </a> */}
                        </Col>
                        <Col className='govDiv'>
                            <a href='http://online.gov.vn/Home/WebDetails/87508' target="_blank">
                                <img style={{ height: 70, width: 200 }} alt='' title='' src={imgGov} />
                            </a>
                        </Col>
                    </div>
                </Row>
            </Container>
        </div>
    )
}