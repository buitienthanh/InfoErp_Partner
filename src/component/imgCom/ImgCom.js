import React from 'react';
import LazyLoad from 'react-lazyload';
import './ImgCom.css'

export default function ImgCom(props) {
    return(
        <LazyLoad once offset={100}> 
            <img src={props.src} alt={props.alt} style={props.style} className={props.className} id={props.id}/>
        </LazyLoad>
    )
}