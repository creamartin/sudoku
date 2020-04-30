import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { correct, improveSolution } from './solver.js'

function Stepper(props){
  return(
  <button className="step" onClick={props.onClick}>Step
  </button>)
}

function Solver(props){
  return(
  <button className="solve" onClick={props.onClick}>Solve
  </button>)
}

function Square(props) {
    if (props.value.constructor === Number) {
        return (<button className={"square"}
            onClick={
                props.onClick
        }> {
            props.value
        } </button>);
    } else {
        let values = [];
        for (let i = 0; i < 3; i++) {
            let row = [];
            for (let j = 0; j < 3; j++) {
                const id = i * 3 + j + 1;
                const show = props.value.indexOf(id) > -1 ? "possible" : "impossible";
                const el = <div key={id}
                    className={show}> {id}</div>;
                row.push(el);
            }
            const divRow = <div key={i}
                className="possible-row"> {row}</div>;
            values.push(divRow);
        }

        return (<button className={"multi_square"}
            onClick={
                props.onClick
        }> {values} </button>);
    }
}


class Board extends React.Component {
    renderSquare(i) {
        return (<Square key={i}
            value={
                this.props.squares[i]
            }
            //onClick={() => this.props.onClick(i)}
        />);
    }

    render() {
        let squares = [];
        for (let j = 0; j < 9; j++) {
            let row = [];
            for (let i = 0; i < 9; i++) {
                const square = this.renderSquare(j * 9 + i);
                row.push(square);
            }
            const divRow = <div key={j}
                className="board-row"> {row}</div>;
            squares.push(divRow);
        }
        return (<div> {squares}</div>);
    }
}

class Sudoku extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            squares: correct,
            initialized:false
        }
    };
    
    step = ()=>{
      const old = this.state.squares;
      const improved = improveSolution(old);
      this.setState({squares: improved});

    };

    initialize=()=>{
      this.setState({squares: this.state.squares.map(el => el ? el : [...Array(10).keys()].splice(1)) ,initialized:true});
    }

    render() {
        const navigation = this.state.initialized?<Stepper onClick={this.step}/>:<Solver onClick={this.initialize}/>
        return (<div className="game">
            <div className="game-board">
                <Board squares={
                    this.state.squares
                }/>
            </div>
            {navigation}
        </div>);
    }
}

// ========================================

// ReactDOM.render(<Sudoku />, document.getElementById("root"));

export default Sudoku;

