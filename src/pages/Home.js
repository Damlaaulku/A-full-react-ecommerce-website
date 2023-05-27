import React from 'react'
import { Link } from 'react-router-dom'
import BackgroundImage from '../assets/pizza.jpeg'
import '../styles/Home.css'

function Home() {
  return (
    <div>
      <div className='home' style={{ backgroundImage: `url(${BackgroundImage})` }}>
        <div className='headerContainer' >
            <h1> Damla's Pizza </h1>
            <p> AWESOME PIZZAS! </p>
            <Link to='/menu'> <button> ORDER NOW </button> </Link>
        </div>
      </div>
    </div>
  )
}

export default Home
