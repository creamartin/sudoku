import React from 'react';
import './header.css'; 
import Dropdown from './dropdown.js';

export default function Header(props){
    return(<div className="header-wrapper"><div className="header">
        <span className="title-span">Sudoku</span>
        <Dropdown
                        text="New game"
                        className="newgame-span"
                        info="The current game state will be lost!"
                        cancel="true"
                        tooltip="true"
                        options={[
                            {option:"Restart", onClick:()=>alert("restart")},
                            {option:"New game", onClick:()=>alert("new Game")}]}>        
                    </Dropdown></div>
    </div>);
}
