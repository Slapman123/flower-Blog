import React from 'react';
import  { MenuItems } from './MenuItems';
import {Link} from 'react-router-dom';



const Navbar = () =>(

    <nav className='NavbarItems'>
        <h1 className='navbar-logo'>Flowers</h1>
        <ul className='lista'>
        {MenuItems.map((item,index) =>{
            return(
            <Link key={index} to={item.link} className={item.name}>
            
                {item.title}
            
            </Link>
            )
        })}
        </ul>
    </nav>


)



export default Navbar;