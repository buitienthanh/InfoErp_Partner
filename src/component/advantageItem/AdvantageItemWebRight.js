import React from 'react';
import './AdvantageItemWeb.css';
import ImgCom from '../imgCom/ImgCom';
import AdvantageItemContent from './AdvantageItemContent';

export default function AdvantageItemWebRight(props) {

    const imgRight = props.imgRight;

    return (
        <div id='advDivWeb' style={{ display: 'flex' }}>
            <div className='col-6 itemAdvDivWeb'>
                <div className='contentImg' style={{ marginLeft: 'auto', marginRight: 60 }}>
                    <AdvantageItemContent value={props.value} />
                </div>
            </div>
            <div className='col-6 itemAdvDivWeb'>
                <div className='imgRight'>
                    <ImgCom src={imgRight} alt='' />
                </div>
            </div>
        </div>
    )
}