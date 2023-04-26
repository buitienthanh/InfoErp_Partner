import React from 'react';

export default function RenderHTML(props) {
    return (
        <span dangerouslySetInnerHTML={{__html:props.HTML}}></span>
    )
}