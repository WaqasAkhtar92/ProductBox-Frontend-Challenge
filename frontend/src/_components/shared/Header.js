import React, { Component } from 'react'
import { NavLink } from 'react-router-dom';

export default class header extends Component {
    render() {
        return (
            <div>
               <NavLink to="/">Home</NavLink>
               <NavLink to="/CheckOut">CheckOut</NavLink>
            </div>
         );
    }
}
