import React from "react";
import "./Button.css";
import { Link } from "react-router-dom";


export default function Button(props){
  return(
    props.form ? <button className={`btn ${props.checkButtonStyle} ${props.checkButtonSize}`}
    type={props.type}>{props.text}</button>
    : 
    <Link to={props.to} className="btnMoblie">
  <button className={`btn ${props.checkButtonStyle} ${props.checkButtonSize}`}
  type={props.type}>{props.text}{props.icon}</button></Link>
  )
}


