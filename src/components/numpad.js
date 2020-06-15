import React from 'react';
import './numpad.css';
import {SvgClick} from './SvgClick.js';
function Numpad (props){
    let cells =[];
    for(let i=0;i<9;i++){
            const el = <div className="numpad-cell" key={i} onClick={()=>props.onClick(i+1)} ><SvgClick value={i+1} 
                /></div>;
            cells.push(el);
        }
    return(<div className="numpad">{cells}</div>);
}
export default Numpad;