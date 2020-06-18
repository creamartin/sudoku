import React,{useState} from 'react';
import './menu.css'
function Menu(props) {
    const[state,setState]=useState(false);
    return (
        <div className="animated-menu" onClick={()=>setState(!state)}>
            <div className={state?"menu-item top-wrapper active":"menu-item top-wrapper"}>
                <span className={state?"stick top active":"stick top"}></span>
            </div>
            <div className={state?"menu-item bottom-wrapper active":"menu-item bottom-wrapper"}>
                <span className={state?"stick bottom active":"stick bottom"}></span>
            </div>
        </div>
        
    );
}
export default Menu;

