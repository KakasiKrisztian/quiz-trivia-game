import React from "react";

export default function Answer(props){

    function setStyle(){
      const style = {
        backgroundColor: ""
      }

      if(!props.getResult){
        style.backgroundColor = props.selected ? "#94D7A2" : "#F5F7FB"
      } else {
          if (props.selected && props.right){
            style.backgroundColor = "#94D7A2"
          }else if(props.right){
            style.backgroundColor = "#94D7A2"
          }else if(props.selected && !props.right){
            style.backgroundColor = "#F8BCBC"
          }
        }
        console.log("gere")
        return style
    }

    return <h4 style={setStyle()} key={props.ans} onClick={props.handleSelect}>{props.ans}</h4>
}