import React from 'react'
import './CustomerItem.css'
import { useTranslation } from 'react-i18next';

export default function CustomerItem(props) {
    const number = props.number;
    const content = props.content;
    const {t, } = useTranslation();

    return (
        <div className='custNumDiv'>
            <div style={{textAlign:'left'}}>
                <label className='custNumberLabel'>{number}</label>
            </div>
            <div style={{textAlign:'left'}}>
                <label className='custContentLabel'>{t(content)}</label>
            </div>
        </div>
    )
}