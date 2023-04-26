import React from 'react';
import { useTranslation } from 'react-i18next';
import './Workshop.css'
import teamBuilding from '../../img/workshop/team-building.png'
import { Container, Row, Col } from 'react-bootstrap';
import RenderHTML from '../../component/renderHTML';

export default function Workshop(props) {
    const { t, } = useTranslation();

    return (
        <div id='workshopDiv' ref={props.refer}>
            <div>
                <div className='backgroundTitle web'>{t('workshop.markTitle')}</div>
                <h2 className='labelTitle'>{t('workshop.title')}</h2>
            </div>
            <Container className = 'ws-container'>
                <Row>
                    <Col xs={12} md={5} className='col-img-workshop'>
                        <img src={teamBuilding} alt="img-facebook" className='img-workshop'/>
                    </Col>
                    <Col xs={12} md={7} className='col-img-content'>
                        <p className='workshop-content'>
                            <RenderHTML HTML={t('workshop.contentFirst')} />
                            {/* <span style={{fontWeight:'bold'}}>{t('workshop.emphasisContent')}</span> {t('workshop.contentFirst')} */}
                        </p>
                        <p className='workshop-content'>
                            {t('workshop.contentSecond')}
                        </p>
                        <p className='workshop-content'>
                            {t('workshop.contentThree')}
                        </p>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}