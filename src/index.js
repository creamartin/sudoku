import React, {useState} from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Sudoku from './components/sudoku.js';
import * as serviceWorker from './serviceWorker';
import {solved, start} from './logic/solver.js'
function Game(props) {
    const [restart, setRestart] = useState(false);
    return (<Sudoku sudoku={
            {
                start: start,
                solved: solved,
                difficulty: "easy"
            }
        }
        restart={restart}
        setRestart={setRestart}/>);
}

ReactDOM.render (<Game/>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
