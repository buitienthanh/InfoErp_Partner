import React from 'react';
import RuleDisplay from '../ruleDisplay/RuleDisplay';
import './Rule.css';

export default function SecurityPage(props) {
    
    return (
        <div className='ruleItemDiv'>
            <div style={{marginBottom: 30, marginTop: 30}}>
                <RuleDisplay value={props.regulation} onClickBack={props.onClickBack}/>
            </div>
        </div>

    )
}