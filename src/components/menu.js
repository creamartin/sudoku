import React,{useState, useEffect} from 'react';
import './menu.css'
function Menu(props) {
    const[state,setState] = useState(false);
    useEffect(()=>{
        const wrapper = document.getElementsByClassName("rotation-wrapper")[0];
        state?wrapper.classList.add("rotated"):wrapper.classList.remove("rotated");
    },[state]);
    
    return (
        <div className="animated-menu" onClick={()=>{setState(!state)}}>
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

