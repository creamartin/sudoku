import React, {useState, useEffect, useCallback} from "react";
import './timer.css';

function Timer(props) {
    const [count, setCount] = useState(0);
    const [paused, setPaused] = useState(false);
    const onPause = props.onPause;
    const onContinue = props.onContinue;
    const togglePause = useCallback(() => {
        setPaused(!paused);
        paused ? onContinue() : onPause();
    }, [paused, onContinue, onPause]);

    function restart() {
        setCount(0);
        setPaused(false);
    }
    function prettyTime(time) {
        let hours = Math.floor(time / 3600);
        let minutes = "" + Math.floor((time % 3600) / 60) || 0;
        let seconds = "" + Math.floor((time % 60)) || 0;
        return hours ? hours.padStart(2, '0') + ":" + minutes.padStart(2, '0') + ":" + seconds.padStart(2, '0') : minutes.padStart(2, '0') + ":" + seconds.padStart(2, '0');

    }
    useEffect(() => {
        if (paused) {
            document.getElementsByClassName("pause")[0].addEventListener('click', e => {
                e.preventDefault();
                togglePause();
                e.target.style.display = "none";
            }, false);
        } else {
            document.getElementsByClassName("pause")[0].style.display = "none";
        }
    }, [togglePause, paused]);

    useEffect(() => {
        let timeout = null;
        if (!paused) {
            timeout = setTimeout(() => setCount(count + 1), 1000);
        } else {
            clearTimeout(timeout);
        }
        return() => clearTimeout(timeout);
    }, [count, paused]);

    useEffect(() => {
        restart();
    }, [props.restart]);
    return (<div className="timer-wrapper">
        <span className="info-span"></span>
        <svg xmlns="http://www.w3.org/2000/svg" height="100%" width="200px" viewBox="0 0 30 30">
            <text x="50%" y="50%" dominantBaseline="middle" textAnchor="middle">Time: {
                prettyTime(count)
            }</text>
        </svg>
        <svg xmlns="http://www.w3.org/2000/svg" height="100%" width="30px" viewBox="0 0 120 120"
            onClick={togglePause}><image height="120" width="120"
                href={
                    !paused ? "./images/pause.svg" : "./images/play.svg"
                }/></svg>
    </div>);
}
export default Timer;