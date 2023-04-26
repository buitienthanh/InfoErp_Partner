import React from 'react'
import './CustomerImage.css'
import ImgCom from '../imgCom/ImgCom';

export default function CustomerImage(props) {
    const imgSrc = props.imgSrc;

    return (
        <div className='custLogoDiv' id={props.id}>
            <ImgCom src={imgSrc} alt='' className='custLogoImg'/>
        </div>
    )
}