import React from 'react';
import './gameBoard.css';
import {SvgClick} from './svgClick.js';

function isPartOfGroup(self, selected) {
    if (selected < 1) 
        return false;
    


    const colSelf = self % 9;
    const rowSelf = Math.floor(self / 9);
    const colSelected = selected % 9;
    const rowSelected = Math.floor(selected / 9);
    if (colSelf === colSelected) {
        return "same col";
    }
    if (rowSelf === rowSelected) {
        return "same row";
    }
    // same neighbourhood
    if ((Math.floor(colSelf / 3) === Math.floor(colSelected / 3)) && (Math.floor(rowSelf / 3) === Math.floor(rowSelected / 3))) {
        return "same neighbourhood";
    }
    return false;
}
function isSameAsSelected(self, selected, squares) {
    return(squares[selected] !== 0 && squares[self] === squares[selected]) ? true : false;
}
function Square(props) {
    let classes = "square-container same-aspect";
    if (props.isSelected) 
        classes += " selected";
     else if (props.isSameAsSelected) 
        classes += " same";
     else if (props.isPartOfGroup) 
        classes += " group";
    if (props.isMistake) 
        classes += " mistake";
    
    let notes = [];
    if (props.value === 0 && props.notes ?. length > 0) {
        let values = [];
        for (let i = 0; i < 3; i++) {
            let row = [];
            for (let j = 0; j < 3; j++) {
                const id = i * 3 + j + 1;
                const show = props.notes.indexOf(id) > -1 ? "possible" : "impossible";
                const el = <div key={id} className={show}> {id} </div>;
                row.push(el);
            }
            values.push(row);
        }
        notes = <div className={"multisquare"}>{values}</div >;
            }
            return (<td className={classes}
                onClick={
                    () => props.onClick(props.index)
            }>
                <div>
                    <SvgClick value={
                        props.value ? props.value : ""
                    }/>
                </div>
                {notes} </td>);

        }
        function Board(props) {
            function renderSquare(i) {
                return (<Square key={i}
                    value={
                        props.squares[i]
                    }
                    index={i}
                    notes={
                        props.notes[i]
                    }
                    isSelected={
                        i === props.selected
                    }
                    isPartOfGroup={
                        isPartOfGroup(i, props.selected)
                    }
                    isMistake={
                        props.mistakes && parseInt(props.squares[i]) !== 0 && parseInt(props.squares[i]) !== parseInt(props.solved[i])
                    }
                    isSameAsSelected={
                        isSameAsSelected(i, props.selected, props.squares)
                    }
                    onClick={
                        props.onClick
                    }/>);
            }
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
                <div className="pause"></div>
            </div>);
        }

        export default Board;
