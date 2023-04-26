import React from 'react';
import Item from './item/Item';
import './SolutionCard.css'
import { useTranslation } from 'react-i18next';
import ImgCom from '../imgCom/ImgCom';
import ButtonModal from '../buttonModal/ButtonModal';
import vertorPercentUp from '../../img/solution/vertor_percent_up.png'

export default function SolutionCard(props) {
    const title = props.value.title;
    const subTitle = props.value.subTitle;
    const content = props.value.content;
    const lastLine = props.value.lastLine;
    const imgSrc = props.value.imgSrc;
    const percent = props.value.percent;
    const {t, } = useTranslation();

    const contentList = content.map((v, i) => {        
        return (
            <div key={i}>
                <Item content={t(v)} />
            </div>
        )
    })
    return (
        <div className='solCard' id={props.id}>
            <div style={{ padding: '20px 25px 15px 25px', height: '100%', display: 'flex', flexDirection: 'column' }}>
                <div>
                    <div style={{textAlign:'center'}}>
                        <ImgCom src={imgSrc} alt='' className='solImgCard' />
                    </div>
                    <div style={{textAlign:'center'}}>
                        <label className='solTitleCard'><span style={{color:'#38BF86'}} ><img src={vertorPercentUp} style={{width:'12px',marginTop:'-5px'}} /> {percent}  {t(title)}</span></label>
                    </div>
                    {/* <div>
                        <label className='solSubTitleCard'>{t(subTitle)}</label>
                    </div> */}
                </div>
                {/* <div className='solLineSeparate' /> */}
                <div>
                    {contentList}
                </div>
                <div style={{marginTop: 'auto'}}>
                    {/* <div className='divSolLastLine'>
                        <label className='solLastLine'>{t(lastLine)}</label>
                    </div> */}
                    {/* <div>
                        <ButtonModal name={'solution.registerBtn'} id={'btnCard'}/>
                    </div> */}
                </div>
            </div>
        </div>
    )
}