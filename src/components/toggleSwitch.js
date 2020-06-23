import React from "react";
import './toggleSwitch.css';

function ToggleSwitch(props) {
    return (<div className="toggle-wrapper">
  <span>Check for Mistakes</span>
    <label className="toggle"><input type="checkbox" onClick={props.onClick}/><div/>
    </label>
    </div>);
}

export default ToggleSwitch;