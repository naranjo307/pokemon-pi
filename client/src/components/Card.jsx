import React from 'react'
import './cards.css'


export default function Card({ name, image, types}) {

    return (
        <div className='divCard'>
            <img className='imgCard' src = {image} alt = 'img not found'  />
            <h3>{name}</h3>
            <h3>{types.toString()}</h3> 
            
        </div>
    )
}