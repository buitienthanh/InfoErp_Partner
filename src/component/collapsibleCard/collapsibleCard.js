import React, { useState } from 'react'
import { Accordion, Card } from 'react-bootstrap'
import './collapsibleCard.css'
import { useTranslation } from 'react-i18next';
import ImgCom from '../imgCom/ImgCom';
import imgArrow from '../../img/introduction/arrow.png'

export default function CollapsibleCard(props) {
    const title = props.value.title;
    const detail = props.value.detail;
    const icon = props.value.icon;
    const key = props.value.key;
    const color = props.value.color;
    const { t, } = useTranslation();
    const [id, setId] = useState(key === 0 ? 'introArrowOpen' : 'introArrowClose');

    function onClick() {
        if (id === 'introArrowOpen') {
            setId('introArrowClose');
        } else {
            setId('introArrowOpen');
        }
    }

    return (
        <Card className='collapsibleCard' style={{ margin: 6, borderRadius: 8 }}>
            <Accordion.Toggle as={Card.Header} eventKey={key}>
                <div id='introDivHeader' style={{ display: 'flex' }} onClick={() => onClick()}>
                    <div style={{ backgroundColor: color }} className='background-icon'>
                        <ImgCom src={icon} alt='' />
                    </div>
                    <div style={{ display: 'flex' }}>
                        <label className='titleCard'>{t(title)}</label>
                    </div>
                    <div className='introArrowDiv'>
                        <img alt='' src={imgArrow} id={id} />
                    </div>
                </div>
            </Accordion.Toggle>
            <Accordion.Collapse eventKey={key} onExit={() => setId('introArrowClose')}>
                <Card.Body>
                    <div className='detailCard'>
                        {t(detail)}
                    </div>
                </Card.Body>
            </Accordion.Collapse>
        </Card>
    )
}