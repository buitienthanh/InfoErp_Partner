import React, { useState } from 'react';
import './ButtonModal.css';
import { useTranslation } from 'react-i18next';
import RegisterModal from '../registerModal/RegisterModal';
import { useHistory } from "react-router-dom";

export default function ButtonModal(props) {
    const { t, } = useTranslation();
    const [show, setShow] = useState(false);
    let history = useHistory();
    const handleClose = () => {
        setShow(false);
        history.push("/");
    }

    return (
        <div>
            <div id={props.id} className='registerButton' onClick={() => setShow(true)}>
                <div className='btnLayout'>
                    <label className='registerLabel'>{t(props.name)}</label>
                </div>
            </div>
            <RegisterModal showModal={show} onClose={handleClose} />
        </div>
    )
}