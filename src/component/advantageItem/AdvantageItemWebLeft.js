import React from 'react';
import './AdvantageItemWeb.css';
import ImgCom from '../imgCom/ImgCom';
import AdvantageItemContent from './AdvantageItemContent';

export default function AdvantageItemWebLeft(props) {
    const imgLeft = props.imgLeft;

    return (
        <div id='advDivWeb' style={{ display: 'flex' }}>
            <div className='col-6 itemAdvDivWeb'>
                <div className='imgLeft'>
                    <ImgCom src={imgLeft} alt='' />
                </div>
            </div>
            <div className='col-6 itemAdvDivWeb'>
                <div className='contentImg' style={{ marginRight: 'auto', marginLeft: 60 }}>
                    <AdvantageItemContent value={props.value} />
                </div>
            </div>
        </div>
    )
}