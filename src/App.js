import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {correct, improveSolution} from './solver.js'

function Stepper(props) {
    return (<button className="step"
        onClick={
            props.onClick
    }>Hint
    </button>)
}

function Solver(props) {
    return (<button className="solve"
        onClick={
            props.onClick
    }>Init
    </button>)
}

function Square(props) {
    if (props.value.constructor === Number) {
        return (<td className="container"><div onClick={props.onClick} className={"square"}><span>{props.value}</span></div></td>);
    } 
    else {
        let values = [];
        for (let i = 0; i < 3; i++) {
            let row = [];
            for (let j = 0; j < 3; j++) {
                const id = i * 3 + j + 1;
                const show = props.value.indexOf(id) > -1 ? "possible" : "impossible";
                const el = <div key={id} className={show}>{id}</div>;
                row.push(el);
            }
            values.push(row);
        }
        return (<td className="container"><div onClick={props.onClick} className={"multi_square"}>{values}</div></td>);
   
    }
}


class Board extends React.Component {
    renderSquare(i) {
        return (<Square key={i}
            value={
                this.props.squares[i]
            }
            index={i}
            onClick={()=>{alert("ah");}}//this.props.onClick(i)}
        />);
    }

    render() {
        let squares = [];
        for (let j = 0; j < 9; j++) {
            let row = [];
            for (let i = 0; i < 9; i++) {
                const index = j * 9 + i;
                const square = this.renderSquare(index);
                /*if (index % 3 === 0 && index % 9 !== 0) 
                    row.push (<div key={"bound"+index} className="vertical-bounds"></div>);*/
                row.push(square);
                
            }
            const divRow = <tr key={j} className="board-row">{row}</tr>;
            /*if(j%3===0 && j !==0)
                squares.push(<div key={"bound"+j} className="horizontal-bounds"></div>);*/
            squares.push(divRow);

        }
        return (<tbody>{squares}</tbody>);
    }
}

class Sudoku extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            squares: correct,
            initialized: false
        }
    };

    step = () => {
        const old = this.state.squares;
        const improved = improveSolution(old);
        this.setState({squares: improved});

    };

    initialize = () => {
        this.setState({
            squares: this.state.squares.map(el => el ? el : [...Array(10).keys()].splice(1)),
            initialized: true
        });
    }

    render() {
        const navigation = this.state.initialized ? <Stepper onClick={
            this.step
        }/> : <Solver onClick={
            this.initialize
        }/>
        return (<div className="game">
            <table className="game-board">
                <Board squares={
                    this.state.squares
                }/>
            </table>
            {navigation} </div>);
    }
}

// ========================================

// ReactDOM.render(<Sudoku />, document.getElementById("root"));

export default Sudoku;

