import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Sudoku from './components/sudoku.js';
import * as serviceWorker from './serviceWorker';
import {solved,start} from './logic/solver.js'

ReactDOM.render(
    <Sudoku start={start} solved={solved}/>
,  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
