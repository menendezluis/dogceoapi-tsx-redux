import React from 'react'
import Login from '../Login'
import Favorite from '../Favorite'
const Navbar = (props) => {
    const {breedSelection}=props
    return (
        <nav className="navbar navbar-light bg-light">
            <div className="container">
                <a className ="navbar-brand" href="/">Doggies</a>
                
                <Favorite breedSelection={breedSelection} />
                <Login />
            </div>
        </nav>
    )
}

export default Navbar
