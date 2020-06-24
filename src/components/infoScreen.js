import React from 'react';
import './infoScreen.css';
import Menu from './menu.js';

function InfoScreen(props) {
    return (
        <div className="infoOverlay" id={props.id}>
            <div className="infoTop">{props.title}<Menu onStateTrue={()=>{document.getElementById(props.id).style.display="none"}} active={true}/></div>
            {props.children}
            </div>
    );
    }
    export default InfoScreen;