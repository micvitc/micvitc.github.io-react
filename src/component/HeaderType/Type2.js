import React from 'react'
import Wave from '../wave.svg'

var style = {
        position: "absolute",
        top: "0",
        width: "100%",
        zIndex: "-1"
}

export default function Type2() {
    return (
        <div>
            <img className={style} src={Wave} alt="" />
        </div>
    )
}
