import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './NavbarStyles.css';

import { MenuItems } from './MenuItems';


class Navbar extends Component {
    state = {clicked:false};
    handleClick = () =>{
        this.setState({clicked: !this.state.clicked})
    }
    render() {
        return (
            <nav className='NavbarItems'>
                <h1 className='navbar-logo'>INDTravel</h1>
                <div className='menu-icons' onClick={this.handleClick}>
                    <i className={this.state.clicked ? "fas fa-times" : "fas fa-bars"}></i>
                    
                    
                </div>
                <ul className={this.state.clicked ? "nav-menu active" : "nav-menu" }>
                    {MenuItems.map((item, index) => (
                        <li key={index}>
                            <Link  to={item.url} className={item.cName}>
                                <i className={item.icon}></i>{item.title}
                            </Link>
                        </li>
                    ))}
                <Link to={"/SignUp"}> 
                <button>LOG OUT</button>
                </Link>   
                </ul>
                
            </nav>
        )
    }
}

export default Navbar;