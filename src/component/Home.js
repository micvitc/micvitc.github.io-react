import React from 'react'
import '../Home.css'
import logo from '../mic.svg'

export default function Home() {
    return (
        <div className = "home">
            <div className='left'>
                <h2><b>MICROSOFT INNOVATIONS CLUB</b></h2>
                <h4>VIT CHENNAI</h4>
                <br/>
                <h6><b>TOGETHER WE LEARN, TOGETHER WE GROW</b></h6>
                <button className = 'home' style = {{backgroundColor: 'black', borderRadius: 120}}>
                    <b>GET STARTED</b>
                </button>
            </div>
            <div className='right'>
                <img src={logo} alt="logo"
                style = {{width: 400, height: 400}}
                />
            </div>
        </div>
    )
}
