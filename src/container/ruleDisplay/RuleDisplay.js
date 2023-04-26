import React from 'react';
import './RuleDisplay.css';
import { useTranslation } from 'react-i18next';

export default function RuleDisplay(props) {
    const { t, } = useTranslation();
    const myHTML = props.value !== null ? props.value.content : '';

    return (
        <div style={{ maxWidth: 1170, display: 'flex', margin: 'auto', flexDirection: 'column'}}>
            <div style={{ display: 'flex', marginBottom: 30, padding: 10 }}>
                <div>
                    <label id='homeRuleLabel' onClick={props.onClickBack}>{t('homePage')}</label>
                </div>
                <div style={{ marginLeft: 20, marginRight: 20 }}>
                    {'>'}
                </div>
                <div>
                    <label className='ruleTitleLabel'>{props.value !== null ? props.value.title : ''}</label>
                </div>
            </div>
            <div className='ruleDiv'>
                <div className='labelTitle'>
                    <label>{props.value !== null ? props.value.title : ''}</label>
                </div>
                <div style={{ textAlign: 'center', fontSize: 18, marginBottom: 30 }}>
                    <label>{props.value !== null ? props.value.subTitle : ''}</label>
                </div>
                <div className="content" dangerouslySetInnerHTML={{ __html: myHTML }} />
            </div>
        </div>
    )
}