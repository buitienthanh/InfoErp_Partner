import React from 'react';

import './Register.css'
import RegisterFormClass from '../../component/registerForm/RegisterFormClass';
import html1 from '../../util/html/securityHtml';
import html2 from '../../util/html/companyRule';
import html3 from '../../util/html/regulationHtml';
import { useLocation } from 'react-router-dom';

export default function Register(props) {

    const onClick = props.onClickRegulation;

    const location = useLocation();

    return (
        <div id="register" ref={props.refer}>
            <div id="regBackground"></div>
            <RegisterFormClass isModal={false} pathName={location.pathname}/>
            <div id='divRule'></div>
            <div style={{ border: '1px solid #ffffff', maxWidth: 1168, margin: 'auto' }} className = 'white-space' />
        </div>
    )
}