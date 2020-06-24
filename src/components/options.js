import React from 'react';
import ToggleSwitch from './toggleSwitch.js';
import Difficulty from './difficulty.js';
import './options.css';

function Options(props){
    return(<div className="options">
    <h3>Options</h3>
    <div className="hr"></div>
    <Difficulty difficulty={props.difficulty}/>
    <br/>
    <ToggleSwitch text="Check for Mistakes" onClick={props.handleToggleMistakes}/>
    <div className="hr"></div>
    <ToggleSwitch text="Darkmode" onClick={e =>{e.nativeEvent.target.checked?document.documentElement.classList.add("darkmode"):document.documentElement.classList.remove("darkmode")}}/>
    <div className="hr"></div>
    <span onClick={()=>document.getElementById("legal").style.display="block"}>Legal Notice</span><br/>
    <br/>
    <span onClick={()=>document.getElementById("privacy").style.display="block"}>Privacy</span>
</div>)
}

export default Options;