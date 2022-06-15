import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { getPokemonName } from "../actions";
import './searchBar.css'


export default function SearchBar  (){
    const dispatch = useDispatch()
    const [name, setName] = useState('')

    function handleInputChange (e) {
        e.preventDefault()
        setName(e.target.value)
    }

    function handleSubmit(e){
        
        e.preventDefault()
        dispatch(getPokemonName(name))
    }

    return (
        <div>
            <input className="searchInput"
            type= 'text'
            placeholder="Type a name..."
            onChange={(e) => handleInputChange(e)}
            />
            <button className="searchButton" type = 'submit' onClick={(e) => handleSubmit(e)}>Search</button>
            
        </div>
    )
}