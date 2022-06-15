import React from "react";
import { useState, useEffect } from "react";
import {useDispatch, useSelector} from "react-redux"
import { getPokemons, filterPokemonsByType, filterPokemonsByDb, orderByAttack, orderByAz } from "../actions";
import { Link } from "react-router-dom";
import Card from "./Card";
import Paginado from "./Paginado";
import SearchBar from "./SearchBar";
import './home.css'

export default function Home () {
    const dispatch = useDispatch()
    const allPokemons = useSelector ((state) => state.pokemons)
    const [orden, setOrden] = useState("")
    const [currentPage, setCurrentPage] = useState(1)
    const [pokemonsPerPage, setPokemonsPerPage] = useState(12)  //estados locales para el paginado
    const indexOfLastPokemon = currentPage * pokemonsPerPage
    const indexOfFirstPokemon = indexOfLastPokemon - pokemonsPerPage
    const currentPokemons = allPokemons.slice(indexOfFirstPokemon,indexOfLastPokemon)
    


    const paginado = (pageNumber) => {
        setCurrentPage(pageNumber)        //para renderizado
    }

    
        
        useEffect (() => {
            dispatch(getPokemons());
        }, [dispatch] )  // montate este componente simepre y cuando suceda esto

       
    
    
    

    function handleClick (e) {
        e.preventDefault()
        dispatch(getPokemons())
    }

    function handleFilterType(e) {
        setCurrentPage(1)
        dispatch(filterPokemonsByType(e.target.value))
    }

    function handleFilterDb(e) {
        dispatch(filterPokemonsByDb(e.target.value))
    }

    function handleSortAttc(e) {
        e.preventDefault()
        dispatch(orderByAttack(e.target.value))
        setCurrentPage(1)
        setOrden(`Ordenado por ${e.target.value}`)

    }

    function handleSortAz(e) {
        e.preventDefault()
        dispatch(orderByAz(e.target.value))
        setCurrentPage(1)
        setOrden(`Ordenado por ${e.target.value}`)

    }

    return (
    <>
        { currentPokemons.length > 0 ?
        
            
            <>
           
            <div className="box">
                <select className="select" onChange={e => handleSortAz(e)}>
                <option disabled selected>Order by Name</option>
                    <option value = 'asc'>Asc</option>
                    <option value = 'desc'>Desc</option>
                </select>
                <select className="select" onChange={e => handleFilterType(e)}>
                <option disabled selected>Select a type</option>
                    <option value = 'all'>All</option>
                    <option value = 'normal'>normal</option>
                    <option value = 'fire'>fire</option>
                    <option value = 'unknown'>unknown</option>
                    <option value = 'ice'>ice</option>
                    <option value = 'flying'>flying</option>
                    <option value = 'ground'>ground</option>
                    <option value = 'electric'>electric</option>
                    <option value = 'shadow'>shadow</option>
                    <option value = 'grass'>grass</option>
                    <option value = 'fairy'>fairy</option>
                    <option value = 'rock'>rock</option>
                    <option value = 'bug'>bug</option>
                    <option value = 'steel'>steel</option>
                    <option value = 'psychic'>psychic</option>
                    <option value = 'poison'>poison</option>
                    <option value = 'water'>water</option>
                    <option value = 'ghost'>ghost</option>
                    <option value = 'dragon'>dragon</option>
                    <option value = 'fighting'>fighting</option>
                    <option value = 'dark'>dark</option>
                </select>
                <select className="select" onChange={e => handleFilterDb(e)} >
                <option disabled selected>Select origin</option>
                    <option value = 'all'>All pokemons</option>
                    <option value = 'original'>Original only</option>
                    <option value = 'db'>Created only</option>
                </select>
                <select  className="select" onChange={e => handleSortAttc(e)}>
                <option disabled selected>Order by attack</option>
                    <option value = 'asc'>More attack</option>
                    <option value = 'desc'>Less attack</option>
                </select>
                 <button className="searchButton" onClick = { e => {handleClick(e)}}>
                Refresh pokemons
            </button>
                </div>
                <SearchBar/>
                <Link to = '/pokemons'><button className="createButton">Create Pokemon</button></Link>
                <div>
                <Paginado 
                pokemonsPerPage={pokemonsPerPage}
                allPokemons={allPokemons.length}
                paginado={paginado}
                />
                </div>
                
                <div className="contenedorCard" >
                    <div className="fila">
                

                {
                    currentPokemons && currentPokemons.map( e => {

                        
                        return (
                            <Link to = {'/detail/'+e.id}  >
                            <div className="divCard2">
                        <Card name={e.name} image={e.image} types={e.types}/>
                        </div>
                        </Link>
                        )
                    })
                }
                    </div>

                </div>
            

                </>:
        <div>
            <h1>LOADING</h1>
            <img src="https://img1.picmix.com/output/stamp/normal/0/9/0/4/1604090_a14a5.gif"></img>
            </div>
    }
    </>)
}