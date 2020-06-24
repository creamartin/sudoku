import React,{useState, useEffect} from 'react';
import './menu.css'
function Menu(props) {
    const[menuState,setMenuState] = useState(false);
    useEffect(()=>{
        if(props.active){
            setMenuState(true);
        }
    },[props.active]);

  // useEffect(()=>menuState?props.onStateTrue:props.onStateFalse,[menuState]);
    useEffect(()=>menuState?props.onStateTrue:props.onStateFalse,[menuState,props.onStateFalse,props.onStateTrue]);
    
    return (
        <div className="animated-menu" onClick={()=>{setMenuState(!menuState);}}>
            <div className={menuState?"menu-item top-wrapper active":"menu-item top-wrapper"}>
                <span className={menuState?"stick top active":"stick top"}></span>
            </div>
            <div className={menuState?"menu-item bottom-wrapper active":"menu-item bottom-wrapper"}>
                <span className={menuState?"stick bottom active":"stick bottom"}></span>
            </div>
        </div>
    );
}
export default Menu;

