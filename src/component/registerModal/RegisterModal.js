import React from 'react';
import { Modal, Button } from 'react-bootstrap';
import closeBtn from '../../img/closeBtn.png'
import './RegisterModal.css'
import RegisterFormPopupClass from '../registerForm/RegisterFormPopupClass';

export default function RegisterModal(props) {
    return (
        <div>
            <Modal id='modalRegister' show={props.showModal} onHide={props.onClose} centered size="lg" >
                <Modal.Body>
                    <Button id='btnClose' onClick={props.onClose}>
                        <img src={closeBtn} alt=''/>
                    </Button>
                    <RegisterFormPopupClass id={'modalRegister'} onCloseModal={props.onClose} isModal={true}/>
                </Modal.Body>
            </Modal>
        </div>
    )
}