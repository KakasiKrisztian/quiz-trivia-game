import React from "react";
import {nanoid} from "nanoid"
import Answer from "./Answer";

export default function Question(props) {

    let count = 0;

    const [obj, setObj] = React.useState(() =>settingUp())

    function settingUp(){
        const answersObj = props.answers.map(answer => {
            const obj = {
                right: false,
                ans: answer,
                selected: false,
                id: nanoid()
            }
    
            if(count === 0){
                obj.right = true;
            }
    
            count++
    
            return obj
        })
    
        return answersObj.sort((a, b) => 0.5 - Math.random())
    }

    function handleSelect(id){
        setObj(prevObj => prevObj.map(current => {
            return current.id === id ?
                {...current, selected: !current.selected} :
                current
        }))
    }

    const answersArr = obj.map(answer => 
        <Answer 
            selected={answer.selected} 
            key={answer.ans} 
            handleSelect={() => handleSelect(answer.id)} 
            ans={answer.ans} 
            getResult={props.getResult} 
            right={answer.right}
            addCount={props.addCount}
        />
    )

    return (
        <div className="trivia">
            <h2 className="trivia-title">{props.title}</h2>
            <div className="trivia-answers">
                {answersArr}
            </div>
            <hr />
        </div>
    )
}