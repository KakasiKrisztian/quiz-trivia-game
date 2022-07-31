import React from "react";

export default function Start(props){
    return (
        <div className="start">
            <h1 className="start-title">Quizzical</h1>
            <h3 className="start-desc">Test your knowledge...on your own risk</h3>
            <button className="start-button" onClick={props.letsStart}><span>Start quizz</span></button>
        </div>
    )
}