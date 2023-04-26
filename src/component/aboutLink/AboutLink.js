import React from 'react'
import { Nav } from 'react-bootstrap'
import './AboutLink.css'

export default function AboutLink(props) {
    const executeScroll = props.executeScroll;
    
    return ( 
         <>
          <Nav.Link className="wrappedLink" style={{padding:'0px',cursor:'pointer'}} onClick={() => executeScroll(props.refer)}>
                <span  className='aboutLink'>
                    {props.name}
                </span>
            </Nav.Link>
         </>
    )
}