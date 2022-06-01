import React from "react"
import logo from "./images/logo.svg"

function Nav()
{
    return(
        <nav className="nav">
            <div className="Head1">
            <img className="img" src={logo} />
            <h1 >ReactFacts</h1>
            </div>
            
            <h1 className="Head2">React Course-Project1</h1>
        </nav> 
         )
}
export default Nav