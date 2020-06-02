import React, {useState} from 'react';
import './gameBoard.css';
import {SvgClick} from './svgClick.js';

function Square(props) {
    if (props.value.constructor === Number) {
        return (
            <td className="square-container same-aspect">
                <div onClick={
                        props.onClick
                    }
                    className={"square"}>
                    <SvgClick value={
                        props.value
                    }/>
                </div>
            </td>
        );
    } else {
        let values = [];
        for (let i = 0; i < 3; i++) {
            let row = [];
            for (let j = 0; j < 3; j++) {
                const id = i * 3 + j + 1;
                const show = props.value.indexOf(id) > -1 ? "possible" : "impossible";
                const el = <div key={id}
                    className={show}>
                    {id}</div>;
                row.push(el);
            }
            values.push(row);
        }
        return (
            <td className="container">
                <div onClick={
                        props.onClick
                    }
                    className={"multi_square"}>
                    {values}</div>
            </td>
        );

    }
}
function Board(props) {
    const [selected, setSelected] = useState();
    function renderSquare(i) {
        return (<Square key={i}
                    value={props.squares[i]}
                    index={i}
                    onClick={() => {setSelected(i);}}
                />);}                    
    let squares = [];
    for (let j = 0; j < 9; j++) {
        let row = [];
        for (let i = 0; i < 9; i++) {
            const index = j * 9 + i;
            const square = renderSquare(index);
            row.push(square);
        }
        const divRow = <tr key={j} className="board-row">{row}</tr>;
        squares.push(divRow);
    }
    return (<div className="board-wrapper same-aspect">
                <table className="game-board">
                    <tbody>{squares}</tbody>
                </table>
            </div>);
            }

export default Board;
