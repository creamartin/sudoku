import React, {useCallback} from "react";
import './topmenu.css';
import Menu from './menu.js';
import Timer from './timer.js';

export default function TopMenu(props) {
    const onTrue = useCallback(() => {
        const wrapper = document.getElementsByClassName("rotation-wrapper")[0];
        wrapper.classList.remove("rotated");
    }, []);
    const onFalse = useCallback(() => {
        const wrapper = document.getElementsByClassName("rotation-wrapper")[0];
        wrapper.classList.add("rotated");
    }, [])
    return (
        <div className="topmenu_wrapper">
            <div className="topmenu">
                <Menu onStateFalse={onFalse}
                    onStateTrue={onTrue}/>
                <Timer restart={
                        props.restart
                    }
                    onPause={
                        props.onPause
                    }
                    onContinue={
                        props.onContinue
                    }/>

            </div>
        </div>
    );
}

