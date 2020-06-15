import React, {useState, useEffect, useCallback} from 'react';
import Board from './gameBoard.js';
import Numpad from './numpad.js';
import {SvgImageClick as Control} from './SvgClick.js';
import Dropdown from './dropdown.js';
import './control.css';
import './sudoku.css';
import Header from "./header.js";
import TopMenu from './topMenu.js';
import events from './events.js';

function Sudoku(props) {
    const [history, setHistory] = useState([{
            squares: Object.assign({}, props.sudoku.start),
            notes: new Array(81).fill([])
        }]);
    const [selected, setSelected] = useState(-1);
    const [notesOn, setNotesOn] = useState(false);
    const [mistakes, setMistakes] = useState(false);


    const setSquares = useCallback(input => {
        const latest = Object.assign({}, history[history.length - 1]);
        if (selected === -1 || history[0].squares[selected] !== 0) 
            return;
        

        let newEntry = Object.assign({}, latest);
        newEntry.squares = Object.assign({}, latest.squares);
        newEntry.squares[selected] = input;
        let newHistory = [...history];
        newHistory.push(newEntry);
        setHistory(newHistory);
    }, [selected, history]);
    const setNotes = useCallback(input => {
        input = parseInt(input);
        const latest = Object.assign({}, history[history.length - 1]);
        if (selected === -1 || history[0].squares[selected] !== 0) 
            return;
        

        let newEntry = Object.assign({}, latest);
        newEntry.notes = Object.assign({}, latest.notes);
        let copyNotes = [...latest.notes[selected]];
        const keyIndex = copyNotes.indexOf(input);
        if (keyIndex < 0) {
            copyNotes.push(input);
            newEntry.notes[selected] = copyNotes;
        } else {
            copyNotes.splice(keyIndex, 1)
            newEntry.notes[selected] = copyNotes;
        }
        let newHistory = [...history];
        newHistory.push(newEntry);
        setHistory(newHistory);
    }, [selected, history]);
    const handleUndo = useCallback(() => {
        if (history.length<= 1)
            return;
        const oldHistory = history;
        let newHistory = [...oldHistory].slice(0, -1);
        setHistory(newHistory);
    }, [history]);
    const handleHint = useCallback(() => {
            if (!selected) 
                return;
            
            setSquares(props.sudoku.solved[selected]);
        }, [props.sudoku.solved, selected, setSquares]) 

            const handleRestart = useCallback(() => {
                setHistory([history[0]]);
            }, [history]);
        
        const handleErase = useCallback(() => {
            if (!selected) 
                return;
            

            if (notesOn) {
                if (selected === -1 || history[0].squares[selected] !== 0) 
                    return;
                

                console.log("notes");
                const latest = Object.assign({}, history[history.length - 1]);
                let newEntry = Object.assign({}, latest);
                newEntry.notes = Object.assign({}, latest.notes);
                newEntry.notes[selected] = [];
                let newHistory = [...history];
                newHistory.push(newEntry);
                setHistory(newHistory);
            } else {
                setSquares(0);
            }
        }, [history, notesOn, selected, setSquares]);
        const handleToggleNotes = useCallback(() => {
            setNotesOn(!notesOn);
        }, [notesOn]);
        const handleToggleMistakes = useCallback(() =>{
            setMistakes(!mistakes);
        },[mistakes])
        const handleNumericInput = useCallback(input => {
            (notesOn) ? setNotes(input) : setSquares(input);
        }, [notesOn, setNotes, setSquares]);
        const handlePause = useCallback(() => {
            document.getElementsByClassName("pause")[0].style.display = "block";
            let newHistory = [...history];
            newHistory.push({squares: new Array(81).fill(0), notes: new Array(81).fill([])});
            setHistory(newHistory);
            setSelected(-1);
        }, [history]);
        // handle keyboard input
        useEffect(() => {
            if (selected >= 0) 
                events.subscribe({
                    selected,
                    setSelected,
                    handleNumericInput,
                    handleErase,
                    handleHint,
                    handleUndo,
                    setNotes
                });
             else 
                events.unsubscribe();
            

        }, [
            selected,
            handleNumericInput,
            handleErase,
            handleHint,
            handleUndo,
            setNotes
        ]);

        return (<div>
            <Header/>
            <TopMenu difficulty={props.sudoku.difficulty} onPause={handlePause} onToggle={handleToggleMistakes}
                restart={props.restart}
                onContinue={handleUndo}/>
            <div className="game">
                <Board squares={
                        history[history.length - 1].squares
                    }
                    solved={props.sudoku.solved}
                    notes={
                        history[history.length - 1].notes
                    }
                    selected={selected}
                    mistakes={mistakes}
                    onClick={
                        id => {
                            setSelected(id)
                        }
                    }/>
                <div className="input">
                    <Dropdown text="New game" className="restart-button" info="The current game state will be lost!" cancel="true" tooltip="true"
                        options={
                            [
                                {
                                    option: "Restart",
                                    onClick: handleRestart
                                },
                                // todo
                                {
                                    option: "New game",
                                    onClick: () => alert("new Game")
                                }
                            ]
                    }></Dropdown>
                    <Numpad onClick={handleNumericInput}/>
                    <div className="controls">
                        <div className="control"
                            onClick={handleUndo}><Control value="Undo" imagepath="./images/undo.svg"/></div>
                        <div className="control"
                            onClick={handleErase}><Control value="Erase" imagepath="./images/erase.svg"/></div>
                        <div className="control"
                            onClick={handleToggleNotes}><Control value="Notes"
                                imagepath={
                                    notesOn ? "./images/notes-on.svg" : "./images/notes-off.svg"
                                }/></div>
                        <div className="control"
                            onClick={handleHint}><Control value="Hint" imagepath="./images/hint.svg"/></div>
                    </div>
                </div>
            </div>
        </div>);
    };

    export default Sudoku;
