import React from 'react'
import "../Header.css"

export default function Header(props) {
    return (
        <div>
            <h1>{props.heading}</h1>
            <h2>{props.sub}</h2>
            <img className="wave" src={props.name} alt="" />
        </div>
    )
}
