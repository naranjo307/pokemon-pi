import React, { useEffect, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import {postPokemon, getTypes} from '../actions/index'
import { useDispatch, useSelector } from "react-redux";


export default function CreatePokemon () {
    const dispatch = useDispatch()
    const history = useHistory()
    const types = useSelector((state) => state.types)

    const [input, setInput] = useState({
        name: '',
        types: [],
        hp: '',
        attack: '',
        defense: '',
        speed: '',
        height: '',
        weight: '',
        image: ''
        
    })

    function handleChange(e) {
        setInput({
            ...input,
            [e.target.name] : e.target.value
        })
        console.log(input)
    }
    

    function handleCheck(e) {
        
        if (e.target.checked) {
            
            setInput({
                ...input,
                types: [...input.types, e.target.value]
            })
        }
        console.log(input)
    }

    function handleSubmit(e){
        e.preventDefault()
        console.log(input)
        dispatch(postPokemon(input))
        alert('pokemon creado')
        setInput({
            name: '',
            types: [],
            hp: '',
            attack: '',
            defense: '',
            speed: '',
            height: '',
            weight: '',
            image: ''
        })
        history.push('/home')
    }

    useEffect(() => {
        dispatch(getTypes())
    }, [])

    return (
        <div>
            <Link to = '/home'><button>Return</button></Link>
            <h1>Create Your Pokemon</h1>
            <form onSubmit={(e) => handleSubmit(e)}>
                <div>
                    <label>Name:</label>
                    <input 
                    type = 'text'
                    value = {input.name}
                    name = 'name'
                    onChange = {handleChange}
                    />
                </div>
                <div>
                    <label>Hp:</label>
                    <input 
                    type = 'number'
                    value = {input.hp}
                    name = 'hp'
                    onChange = {handleChange}
                    />
                </div>
               
                <div>
                    <label>Attack:</label>
                    <input 
                    type = 'number'
                    value = {input.attack}
                    name = 'attack'
                    onChange = {handleChange}
                    />
                </div>
                <div>
                    <label>Defense:</label>
                    <input 
                    type = 'number'
                    value = {input.defense}
                    name = 'defense'
                    onChange = {handleChange}
                    />
                </div>
                <div>
                    <label>Speed:</label>
                    <input 
                    type = 'number'
                    value = {input.speed}
                    name = 'speed'
                    onChange = {handleChange}
                    />
                </div>
                <div>
                    <label>Height:</label>
                    <input 
                    type = 'number'
                    value = {input.height}
                    name = 'height'
                    onChange = {handleChange}
                    />
                </div>
                <div>
                    <label>Weight:</label>
                    <input 
                    type = 'number'
                    value = {input.weight}
                    name = 'weight'
                    onChange = {handleChange}
                    />
                </div>
                <div>
                    <label>Image:</label>
                    <input 
                    type = 'text'
                    value = {input.image}
                    name = 'image'
                    onChange = {handleChange}
                    />
                </div>
                

                
                
                <div>
                    <label>Types</label>
                    <label>
                        <input
                        type = 'checkbox'
                        name = "normal"
                        value = "normal"
                        onChange={(e) => handleCheck(e)}
                        />Normal
                    </label>
                    <label>
                        <input
                        type = 'checkbox'
                        name = "fire"
                        value = "fire"
                        onChange={(e) => handleCheck(e)}
                        />Fire
                    </label>
                    <label>
                        <input
                        type = 'checkbox'
                        name = "unknown"
                        value = "unknown"
                        onChange={(e) => handleCheck(e)}
                        />Unknown
                    </label>
                    <label>
                        <input
                        type = 'checkbox'
                        name = "ice"
                        value = "ice"
                        onChange={(e) => handleCheck(e)}
                        />ice
                    </label>
                    <label>
                        <input
                        type = 'checkbox'
                        name = "flying"
                        value = "flying"
                        onChange={(e) => handleCheck(e)}
                        />flying
                    </label>
                    <label>
                        <input
                        type = 'checkbox'
                        name = "ground"
                        value = "ground"
                        onChange={(e) => handleCheck(e)}
                        />ground
                    </label>
                    <label>
                        <input
                        type = 'checkbox'
                        name = "electric"
                        value = "electric"
                        onChange={(e) => handleCheck(e)}
                        />electric
                    </label>
                    <label>
                        <input
                        type = 'checkbox'
                        name = "shadow"
                        value = "shadow"
                        onChange={(e) => handleCheck(e)}
                        />shadow
                    </label>
                    <label>
                        <input
                        type = 'checkbox'
                        name = "grass"
                        value = "grass"
                        onChange={(e) => handleCheck(e)}
                        />Grass
                    </label>
                    <label>
                        <input
                        type = 'checkbox'
                        name = "fairy"
                        value = "fairy"
                        onChange={(e) => handleCheck(e)}
                        />fairy
                    </label>
                    <label>
                        <input
                        type = 'checkbox'
                        name = "rock"
                        value = "rock"
                        onChange={(e) => handleCheck(e)}
                        />rock
                    </label>
                    <label>
                        <input
                        type = 'checkbox'
                        name = "bug"
                        value = "bug"
                        onChange={(e) => handleCheck(e)}
                        />bug
                    </label>
                    <label>
                        <input
                        type = 'checkbox'
                        name = "steel"
                        value = "steel"
                        onChange={(e) => handleCheck(e)}
                        />steel
                    </label>
                    <label>
                        <input
                        type = 'checkbox'
                        name = "psychic"
                        value = "psychic"
                        onChange={(e) => handleCheck(e)}
                        />psychic
                    </label>
                    <label>
                        <input
                        type = 'checkbox'
                        name = "poison"
                        value = "poison"
                        onChange={(e) => handleCheck(e)}
                        />poison
                    </label>
                    <label>
                        <input
                        type = 'checkbox'
                        name = "water"
                        value = "water"
                        onChange={(e) => handleCheck(e)}
                        />water
                    </label>
                    <label>
                        <input
                        type = 'checkbox'
                        name = "ghost"
                        value = "ghost"
                        onChange={(e) => handleCheck(e)}
                        />ghost
                    </label>
                    <label>
                        <input
                        type = 'checkbox'
                        name = "dragon"
                        value = "dragon"
                        onChange={(e) => handleCheck(e)}
                        />dragon
                    </label>
                    <label>
                        <input
                        type = 'checkbox'
                        name = "fighting"
                        value = "fighting"
                        onChange={(e) => handleCheck(e)}
                        />fighting
                    </label>
                    <label>
                        <input
                        type = 'checkbox'
                        name = "dark"
                        value = "dark"
                        onChange={(e) => handleCheck(e)}
                        />dark
                    </label>

                    
                </div>
                <select>
                    {types.map((e) => (
                        <option value={e.nombre}>{e.nombre}</option>
                    ))}
                </select>

                <button type = 'submit'>Create Pokemon</button>
            </form>
        </div>
    )
}
