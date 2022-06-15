import React from 'react'
import {Link} from 'react-router-dom'
import './landingPage.css'



export default function LandingPage() {

    return (
        <>
        <div class="deconstructed">
          WELLCOME TO POKEAPP
         <div>WELLCOME TO POKEAPP</div>
         <div>WELLCOME TO POKEAPP</div>
         <div>WELLCOME TO POKEAPP</div>
         <div>WELLCOME TO POKEAPP</div>
         
         </div>
         <Link to = '/home'>
                <button className='myButton'>Start</button>
            </Link>
         </>
    )
}
