import React from 'react';
import './difficulty.css';
import Dropdown from './dropdown.js';

function Difficulty(props) {
    return (<div className="info-span">
        <span>Difficulty</span>
        <div className="level-wrapper">
            <Dropdown className="difficulty"
                text={props.difficulty}
                options={
                    [
                        {
                            option: "easy",
                            onClick: () => alert("restart")
                        }, {
                            option: "middle",
                            onClick: () => alert("new Game")
                        }, {
                            option: "hard",
                            onClick: () => alert("new Game")
                        }
                    ]
            }></Dropdown>
        </div>
    </div>)
}
export default Difficulty;