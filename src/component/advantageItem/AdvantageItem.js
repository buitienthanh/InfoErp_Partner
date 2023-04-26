import React from 'react'
import { Container, Row, Col } from 'react-bootstrap';
import './AdvantageItem.css'
import { useTranslation } from 'react-i18next';
import ImgCom from '../imgCom/ImgCom';
import RenderHTML from '../../component/renderHTML';

export default function AdvantageItem(props) {
    const imageUrl = props.value.imageUrl;
    const titleUp = props.value.titleUp;
    const content = props.value.content;
    const subTitle = props.value.subTitle;
    const subImage = props.value.imageUrl_2;
    const { t, } = useTranslation();

    return (
        <div>
            <Container id={props.id}>
                <div className="tick"></div>
                <Row style={{ marginBottom: 40 }}>
                    <Col lg={6} sm={12}>
                        <div className='advTotalContent'>
                            <div className='advTitleLabel'>
                                <RenderHTML HTML={t(titleUp)} />
                            </div>
                            <div className='advDetailContent'>
                                <RenderHTML HTML={t(content)} />
                            </div>
                        </div>
                    </Col>
                    <Col lg={6} sm={12}>
                        <ImgCom className='advAppImage' src={imageUrl} alt='' />
                        {subImage != null ? <ImgCom src={subImage}   alt=''/> : <></>}
                    </Col>
                </Row>
            </Container>
        </div>
    )
}