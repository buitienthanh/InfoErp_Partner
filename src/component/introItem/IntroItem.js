import React from 'react'
import './IntroItem.css'
import { useTranslation } from 'react-i18next';
import ImgCom from '../imgCom/ImgCom';
import Button from 'react-bootstrap/Button'

export default function IntroItem(props) {
    const title = props.value.title;
    const detail = props.value.detail;
    const icon = props.value.icon;
    const color = props.value.color;
    const buttonContent = props.value.buttonContent;
    const {t , } = useTranslation();
    
    return (
        <div className='introItemDiv'>
            <div className='divIcon' style={{backgroundColor: color}}>
                <ImgCom className='imgIcon' src={icon} alt='' />
            </div>
            <div className='introItemTitleDiv'>
                <label>{t(title)}</label>
            </div>
            <div>
                <label>{t(detail)}</label>
            </div>
            <div style={{position:'absolute',right:'0px',marginTop:'20px'}}>
                 <Button variant="outline-secondary">{buttonContent}</Button>{' '}
            </div>
        </div>
    )
}