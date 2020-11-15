import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import { DataContext } from '../contexts/Context'
import '../../_assets/css/ProductList.css'

export default class ProductsList extends Component {

    static contextType= DataContext;

    render() {

        const{products, addCart} = this.context;
        console.log(this.context, "this is context on ProductList")
        //console.log(products, "this is products on")

        return (
            <div id="product">

                {
                    products.map(product => {
                        <div className="card" key={product.id}>

                            <Link to={`/product/${product.id}`}>
                                <img src={product.img} alt={product.name} />
                            </Link>

                            <div className="content">
                                <h3>
                                    <Link to={`/product/${product.id}`}>{`${product.name}`}</Link>
                                </h3>

                                <span> {`${product.price}`} </span>
                                <button onClick={()=> addCart(product._id)}>Add to cart</button>
                            </div>
                        </div>
                    })
                }
                
            </div>
        )
    }
}
