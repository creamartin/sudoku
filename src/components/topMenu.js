import React from "react";
import './topmenu.css';
import Menu from './menu.js';
import Timer from './timer.js';

export default function TopMenu(props) {
    return (<div className="topmenu_wrapper">
        <div className="topmenu">
        <Menu onPause={
                    props.onPause
                }/>
        <Timer restart={
                    props.restart
                }
                onPause={
                    props.onPause
                }
                onContinue={
                    props.onContinue
                }/></div>
    </div>);
}
/*
        <Difficulty difficulty={props.difficulty}/>
        <ToggleSwitch onClick={props.onToggle}/>*/