import React from 'react';
import { Modal, Button } from 'react-bootstrap';
import closeBtn from '../../img/closeBtn.png'
import { useTranslation } from 'react-i18next';
import successImg from '../../img/register/successSend.png';
import failImg from '../../img/register/failSend.png';
import './Popup.css';

export default function Popup(props) {

    const contentSuccess = {
        title: 'send.success.title',
        subTitle: 'send.success.subTitle',
        color: '#225DC0',
        img: successImg
    }

    const contentFail = {
        title: 'send.fail.title',
        subTitle: 'send.fail.subTitle',
        color: '#DC2626',
        img: failImg
    }

    const { t, } = useTranslation();
    let data = props.isFail ? contentFail : contentSuccess;

    return (
        <div>
            <Modal id='sendDiv' show={props.show} onHide={props.onClose} centered size='lg' backdrop='static'>
                <Modal.Body >
                    <Button id='btnClose' style={{ top: 0 }} onClick={props.onClose}>
                        <img src={closeBtn} alt='' />
                    </Button>
                    <div style={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
                        <div style={{ margin: 'auto' }}>
                            <div style={{ display: 'flex' }}>
                                <img id='popupImg' src={data.img} alt='' />
                            </div>
                            <div className='sendLabel'>
                                <div id='sendLabelTitle' style={{ color: data.color }}>
                                    <label>{t(data.title)}</label>
                                </div>
                                <div id='sendLabelSubTitle'>
                                    <label>{t(data.subTitle)}</label>
                                </div>
                            </div>
                            <div style={{ display: props.isFail ? 'block' : 'none' , marginTop: 10}}>
                                <div className='registerButton' onClick={props.onClose}>
                                    <div className='btnLayout'>
                                        <label className='registerLabel'>{t('send.fail.registerAgain')}</label>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </Modal.Body>
            </Modal>
        </div>
    )
}