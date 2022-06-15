import React from "react";
import './paginado.css'

export default function Paginado({pokemonsPerPage, allPokemons, paginado}) {
    const pageNumbers = []

    for (let i = 1; i<=Math.ceil(allPokemons/pokemonsPerPage); i++) {
        pageNumbers.push(i)
    }

    return (
        <nav>
            <ul className="paginado">
                {pageNumbers && 
                pageNumbers.map(number => (
                    <li className="li" key={number}>
                    <button className="myButton" onClick={() => paginado(number)}>{number}</button>
                    </li>
                ))}
            </ul>
        </nav>
    )
}