import React from 'react'
import { Route } from 'react-router-dom'
import Cart from './shCart/Cart'
import Checkout from './shCart/Checkout'
import ProductDetail from './shCart/ProductDetail'
import ProductList from './shCart/ProductList'

export default function ShCart() {
    return (
        <div>
           <Route path="/" component={ProductList} exact />
           <Route path="/product" component={ProductList} exact />
           <Route path="/product/:id" component={ProductDetail} exact />
           <Route path="/cart" component={Cart} exact />
           <Route path="/checkout" component={Checkout} exact />
        </div>
    )
}
