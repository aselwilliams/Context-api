import {useState,useContext} from 'react';
import { MovieContext } from './MovieContext';
import { nanoid } from 'nanoid';

const AddMovie=()=>{
    const [name, setName]=useState('')
    const [price, setPrice]=useState('')
    const [movies,setMovies]=useContext(MovieContext)

    const updateName=(e)=>{
        setName(e.target.value)
    }
    const updatePrice=(e)=>{
        setPrice(e.target.value)
    }

    const addMovie=(e)=>{
        e.preventDefault();
        setMovies((prevMovies)=>[...prevMovies, {name:name, price:price, id: nanoid()}])
        setName('')
        setPrice('')
    }
    return (
        <form onSubmit={addMovie}>
            <input type='text' name='name' value={name} onChange={updateName} placeholder='Movie name' />
            <input type='text' name='price' value={price} onChange={updatePrice} placeholder='Price'/>
            <button>Submit</button>
        </form>
    )
}
export default AddMovie