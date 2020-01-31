import React from 'react'
import './product.css'

    function Product(props) {
        return (

            <div>
                <p>product name :{props.name} </p>
                <p>Product price : {props.price} </p>
                <p>product description : {props.description}</p>

            </div>

        )
    }

export default Product