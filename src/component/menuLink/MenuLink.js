import React from 'react'
import { Nav } from 'react-bootstrap'
import './MenuLink.css'

export default function MenuLink(props) {
    const executeScroll = props.executeScroll;
    
    return ( 
         <>
         <Nav.Link className='linkLabel' onClick={() => executeScroll(props.refer)} style={{color:props.css}} >
            {props.name}
            {
            props.i == 0 ? 
                <div style={{width:'77px',height:'4px',backgroundColor:'#54D19C',marginTop:'3.25px'}}></div>
                :
                <></>
            }
         </Nav.Link>
         </>
    )
}