import React from 'react';
import './svgClick.css';

export function SvgClick(props) {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" className="svg-click" viewBox="0 0 28 28">
            <text x="50%" y="50%" dominantBaseline="middle" textAnchor="middle">
                {
                props.value
            }</text>
        </svg>
    );
}
export function SvgImageClick(props) {
    return (
        <div className="svg-click">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 30 30">
            <image href={
                    props.imagepath
                }
                x="0"
                y="0"
                width="30"
                height="30"></image>
        </svg>
        <span>{props.value}</span>
        </div>

    );
}
