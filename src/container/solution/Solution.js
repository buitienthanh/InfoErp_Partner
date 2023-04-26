import React from 'react'
import TransitionLine from '../../component/transitionLine/TransitionLine'
import { Container, Row, Col } from 'react-bootstrap'
import SolutionCard from '../../component/solutionCard/SolutionCard';
import solutionBackground from '../../img/background/solutionBackground.png';
import publicIcon from '../../img/solution/publicIcon.svg';
import solutionImg_1 from '../../img/solution/solution_1.png';
import solutionImg_2 from '../../img/solution/solution_2.png';
import solutionImg_3 from '../../img/solution/solution_3.png';
import './Solution.css';
import { useTranslation } from 'react-i18next';

export default function Solution(props) {
    const { t, } = useTranslation();

    const publicContent = {
        title: 'solution.public.title', subTitle: 'solution.public.subTitle', content: [
            'solution.public.detail.1','solution.public.detail.2'
        ], lastLine: 'solution.public.slogan', imgSrc: solutionImg_1, percent : ""
    }

    const privateContent = {
        title: 'solution.private.title', subTitle: 'solution.private.subTitle', content: [
            'solution.private.detail.1', 'solution.private.detail.2'
        ], lastLine: 'solution.private.slogan', imgSrc: solutionImg_2, percent : ""
    }

    const productivityContent = {
        title: 'solution.productivity.title', subTitle: 'solution.productivity.subTitle', content: [
            'solution.productivity.detail.1','solution.productivity.detail.2'
        ], imgSrc: solutionImg_3, percent : ""
    }

    return (
        <div id='solution' style={{ marginTop: 80 }} ref={props.refer}>
            <div id='solBackDiv'/>
            <div id='solImgBack'></div>
            {/* <img src={solutionBackground}  id='solImgBack' alt='' /> */}
            {/* <TransitionLine /> */}
            <div>
                <Container>
                    <Row style={{ textAlign: 'center' }} className='web'>
                        <Col lg={12}>
                            <div className='backgroundTitle web'>{t('solution.mobileTitle1')}</div>
                            <h2 className='labelTitle' dangerouslySetInnerHTML = {{ __html:t('solution.title')}} ></h2>
                        </Col>
                    </Row>
                    <Row style={{ textAlign: 'center' }} className='mobile'>
                        <Col sm={12}>
                            {/* <div className='backgroundTitle'>{t('solution.mobileTitle1')}</div> */}
                            <label className='labelTitle'> {t('solution.mobileTitle1')}</label>
                        </Col>
                        <Col sm={12}>
                            <label className='labelTitle'>{t('solution.mobileTitle2')}</label>
                        </Col>
                    </Row>
                    <Row style={{ textAlign: 'center' }}>
                        <Col>
                            <label className='solSubLabel'>{t('solution.subTitle')}</label>
                        </Col>
                    </Row>
                    <Row>
                        <Col lg={4} sm={12}>
                            <SolutionCard value={publicContent} id={'cardLeft'}/>
                        </Col>
                        <Col lg={4} sm={12}>
                            <SolutionCard value={privateContent} id={'cardLeft'} />
                        </Col>
                        <Col lg={4} sm={12}>
                            <SolutionCard value={productivityContent} id={'cardRight'} />
                        </Col>
                    </Row>
                </Container>
            </div>
        </div>
    )
}