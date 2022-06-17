import React, { useState } from "react";
import { Link, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getDetail } from "../actions";
import { useEffect } from "react";
import axios from "axios";
import './home.css'

export default function Detail () {

    const dispatch = useDispatch()

    let { id } = useParams()
   // console.log(id)

    let myPokemon = useSelector((state) =>state.detail)

    console.log(myPokemon)

    

    


useEffect(() => {
    dispatch(getDetail(id))
    
},[dispatch])

    // const dispatch = useDispatch()

    // useEffect(() => {
    //     dispatch(getDetail(props.match.params.id))
    // }, [dispatch])

    // const myPokemon = useSelector((state) => state.detail)

    

    return (
        <div>
                
            {
                myPokemon.length > 0  ? 
                <>
             <div className="gradient-border">
                 <h1>{myPokemon[0].name}</h1>
                 <img className= 'detailImg 'src = {myPokemon[0].image}/>
                 <h2 className="stats" ><img className="icon" src="https://cdn-icons-png.flaticon.com/512/1077/1077035.png"/>  {myPokemon[0].hp} <progress className="progress"  max='160' value={myPokemon[0].hp}></progress></h2>
                 <h2 className="stats"><img className="icon" src="https://cdn-icons.flaticon.com/png/128/2746/premium/2746966.png?token=exp=1655257199~hmac=2eba99004813f6a98224036a1f359f1a"/>  {myPokemon[0].attack} <progress max='160' value={myPokemon[0].attack}></progress></h2>
                 <h2 className="stats"><img className="icon" src="https://cdn-icons.flaticon.com/png/128/3288/premium/3288781.png?token=exp=1655257284~hmac=8bc0fcd8974d19645af9ff6238efcacc"/>  {myPokemon[0].defense} <progress max='160' value={myPokemon[0].defense}></progress></h2>
                 <h2 className="stats"><img className="icon" src="https://cdn-icons-png.flaticon.com/128/1408/1408799.png"/>  {myPokemon[0].speed} <progress max='160' value={myPokemon[0].speed}></progress></h2>
                 <h2 className="stats"><img className="icon" src="https://cdn-icons.flaticon.com/png/128/2330/premium/2330995.png?token=exp=1655257347~hmac=66095b90e19520be8977f5b640eaf7c6"/>  {myPokemon[0].height}</h2>
                 <h2 className="stats"><img className="icon" src="https://cdn-icons-png.flaticon.com/128/847/847345.png"/>  {myPokemon[0].weight}</h2>
                 <h2 className="stats">Types: {myPokemon[0].types.toString()} </h2>
                 </div>
                 <div>
                 <Link to = '/home'>
                <button className="createButton">Return</button>
            </Link>
            </div>
             </>:
               <div>
               <h1>LOADING</h1>
               <img src="https://c.tenor.com/Hg2Mb_mQdhYAAAAi/pokemon-pokeball.gif"></img>
               </div>
            }
            
        </div>
    )
    
}