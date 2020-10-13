import React from "react"
import "./TextBlock.css"

function TextBlock(props){
    return(
    <p className="textBlock">{props.text}</p>
    )
}


export default TextBlock