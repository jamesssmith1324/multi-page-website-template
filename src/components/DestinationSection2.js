import React from "react"
import "./DestinationSection2.css"

function Section2(props){
    console.log(props)
    return(
        <div className="dSContainer">
            <div className="videoContainer">
            <iframe width="100%" height="100%" title="Video" src={props.video} frameBorder="0" allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen/>
            </div>
        </div>
    )
}

export default Section2