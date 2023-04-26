import React from 'react'
import { useTranslation } from 'react-i18next';
import vector from '../../img/solution/vector_2.png'
import ImgCom from '../../component/imgCom/ImgCom';
import RenderHTML from '../../component/renderHTML';

export default function AdvantageItemContent(props) {
    const detail = props.value.content;
    const titleUp = props.value.titleUp;
    const detail_2 = props.value.content_2;
    const detail_3 = props.value.content_3;
    const subImage = props.value.imageUrl_2;
    const { t, } = useTranslation();

    return (
        <div>
             <div className='tick'></div>
            <div style={{marginTop:'12px'}}>
                <div className='advTitleWeb'>
                    <RenderHTML HTML={t(titleUp)} />
                </div>
            </div>
            <div className='advSubDetail'>
                {
                    detail_2 == null ? 
                        <RenderHTML HTML={t(detail)} />
                    :
                    <>
                        <div className='solItemCard'>
                            <div style={{marginRight: 8,marginTop: 3}}>
                                <ImgCom src={vector} style={{width:'12px'}} alt=''/>
                            </div>
                            <div className='solItemLabel' style={{fontSize:16}}>
                                <label><RenderHTML HTML={t(detail)} /></label>
                            </div>
                        </div>
                        {
                            detail_2 == '' ? <></>: 
                            <div className='solItemCard' style={{marginTop: -10 }}>
                            <div style={{marginRight: 8,marginTop: 3}}>
                                <ImgCom src={vector} style={{width:'12px'}} alt=''/>
                            </div>
                            <div className='solItemLabel' style={{fontSize:16}}>
                                <label>{t(detail_2)}</label>
                            </div>
                            </div>
                        }
                        {
                            detail_3 == '' ? <></>: 
                            <div className='solItemCard' style={{marginTop: -10 }}>
                            <div style={{marginRight: 8,marginTop: 3}}>
                                <ImgCom src={vector} style={{width:'12px'}} alt=''/>
                            </div>
                            <div className='solItemLabel' style={{fontSize:16}}>
                                <label>{t(detail_3)}</label>
                            </div>
                            </div>
                        }
                    </>
                }

                {subImage != null ? <ImgCom src={subImage} style={{width:'473.4px',height:'101px',marginTop:'11px',marginLeft:'-15px'}}  alt=''/> : <></>}
            </div>
        </div>
    )
}