import React, { Component } from 'react'
import Menu from '../../assets/img/bars-solid.svg'
import Close from '../../assets/img/times-solid.svg'
import CartIcon from '../../assets/img/shopping-cart-solid.svg'
import {Link} from 'react-router-dom'
import '../assets/css/Header.css'
import {DataContext} from '../contexts/Context'



export class Header extends Component {
    static contextType = DataContext;

    state = {
        toggle: false
    }

    menuToggle = () =>{
        this.setState({toggle: !this.state.toggle})
    }


    render() {
        const {toggle} = this.state;
        const {cart} = this.context;
        return (
            <header>
                <div className="menu" onClick={this.menuToggle}>
                    <img src={Menu} alt="Menu" width="20"/>
                </div>
                <div className="logo">
                    <h1><Link to="/">FrontEnd Task</Link></h1>
                </div>
                <nav>
                    <ul className={toggle ? "toggle" : ""}>
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/product">Product</Link></li>
                        <li><Link to="/checkout">Checkout</Link></li>
                        <li><Link to="/about">About</Link></li>
                        <li><Link to="/login">Login / Register</Link></li>
                        <li className="close" onClick={this.menuToggle}>
                            <img src={Close} alt="" width="20"/>
                        </li>
                    </ul>
                    <div className="nav-cart">
                        <span>{cart.length}</span>
                        <Link to="/cart">
                            <img src={CartIcon} alt="Cart" width="20"/>
                        </Link>
                    </div>
                </nav>
            </header>
        )
    }
}

export default Header
