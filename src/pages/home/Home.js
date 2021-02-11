import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
    return (
        <div>
           <p className='homeText'>Here you can create your own phonebook <Link to='/register'>Sing up</Link> </p>
        </div>
    )
}

export default Home
