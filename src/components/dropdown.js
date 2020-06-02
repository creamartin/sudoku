import React,{useState, useEffect} from 'react';
import './dropdown.css';

export default function Dropdown(props) {
    const [active, setActive] = useState(false);
    //const [state,setState] = useState("easy");
    const toggle = () => {
        document.removeEventListener('click',toggle);
        setActive(!active);
    }
    
    useEffect(()=>{
        if(active){
            document.addEventListener('click',toggle);
        }
        else{
            document.removeEventListener('click',toggle);
        }
    });

    const btn = active?<button className={props.className} onClick={toggle}>{props.text}</button>:
        <button className={props.className} onClick={toggle}>{props.text}</button>;
    const dialog = active? <DropdownDialog cancel={props.cancel} tooltip={props.tooltip} info={props.info} options={props.options} toggle={toggle}/>:[];
    
    return (<div className="dropdown-wrapper">
                {btn}{dialog}
            </div>);
}
function DropdownDialog(props){
    let options = [];
    for(let [i, option] of Object.entries(props.options)){
        options.push(<DialogOption className="dialog-option" key={i} onClick={option.onClick} option={option.option}/>)
    }

    const tooltip = props.tooltip?<div className="tooltip-arrow"></div>:[];
    const cancel = props.cancel?<DialogOption className="dialog-option dialog-cancel" onClick={props.toggle} option={"Cancel"}/>:[];
    const info = props.info?<span className="dialog-info">{props.info}</span>:[];
    return(<div className="dialog-wrapper">{tooltip}{info}{options}{cancel}</div>);
}
function DialogOption(props){
    return(<span  className={props.className} onClick={props.onClick}>{props.option}</span>);
}
