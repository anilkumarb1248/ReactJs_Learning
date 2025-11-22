import React from 'react'
import { NavLink } from 'react-router-dom'
import { useAuth } from './Authentication'

function NavBar() {

    const navLinkStyle = ({isActive}) => {
        return {
            fontWeight: isActive ? "bold" : "normal",
            textDecoration: isActive ? "none" : "underline"
        }
    }

    const auth = useAuth()

    return (
        <nav className='primary-nav'>
            <NavLink to="/" style={navLinkStyle}>Home Page  </NavLink>
            <NavLink to="/about" style={navLinkStyle} >About Page  </NavLink>
            <NavLink to="/profile" style={navLinkStyle} >Profile Page  </NavLink>
            <NavLink to="/products" style={navLinkStyle} >Products  </NavLink>
            <NavLink to="/users" style={navLinkStyle} >Users  </NavLink>
            {
                !auth.user ? (
                    <NavLink to="/login" style={navLinkStyle} >Login  </NavLink>
                ) : auth.user
            }
        </nav>
    )
}
export default NavBar
