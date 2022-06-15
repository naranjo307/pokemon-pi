import React from 'react'
import './cards.css'
import { Link } from 'react-router-dom'


export default function Card({ name, image, types}) {
    // <div className='divCard'>
        //     <img className='imgCard' src = {image} alt = 'img not found'  />
        //     <h3>{name}</h3>
        //     <h3>{types.toString()}</h3> 
            
        // </div>

    

    return (
        

        
        <figure className="card">
  <div class="cardDiv">
  <img className='img' src = {`${image}`} alt = 'img not found'  />   
  </div>
  
  <figcaption class="card__caption">
    <h1 class="cardName">{name}</h1>
    <div className='typesDiv'>
    {
      types.map(e => {
       return ( <h3 class={e}>
    {e}
    </h3>
      )})
    }
    </div>
   
    
   
  </figcaption>
</figure>
    )

}