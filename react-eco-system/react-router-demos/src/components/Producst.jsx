
import React from 'react'
import { Link, Outlet } from 'react-router-dom'

function Producst() {
    return (
        <div>
            <h2> Products Component </h2>
            <input type="text" placeholder='Searech Products' />
            <nav>
                 {/* relative paths without / */}
                <Link to="featured">Featured</Link> 
                <Link to="new">New</Link>
                
                {/* absolute paths with full url */}
                {/* <Link to="/products/featured">Featured</Link>  
                <Link to="/products/new">New</Link> */}
            </nav>
            <Outlet />
        </div>
    )
}
export default Producst
