import React from 'react'
import { useState } from 'react';


export default function Questionpage(props) {

    if(props.start===true )
  return (
    <>
   <div className="app">
      <div className="main">
        <h1>Quiz</h1>
        <div className="scores">
          <p id="attempts">Attempt number : 1</p>
          <p id="highscore">HighScore : 0</p>  
        </div>          
      </div>
     

      <div className="quiz">
        <h2 id="question">Question {props.quesNumber}: {props.question}</h2>

        
        <div id="answer-btns">
         <button onClick={props.check_hurray(0)} className="btn">{props.opt1}</button>
            <button onClick={props.check_hurray(1)} className="btn">{props.opt2}</button>
            <button onClick={props.check_hurray(2)} className="btn">{props.opt3}</button>
            <button onClick={props.check_hurray(3)} className="btn">{props.opt4}</button> 
        </div>  
        <button id="nxt-btn" onClick={props.startQuestion}>Next</button>
      </div>
    </div>
    </>
  )

}
