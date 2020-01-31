import React from "react"
import productsData from "./schoolproducts"
import Product from './Product'

function App() {

const productComponent =     productsData.map(function(product) {

        return <Product id={product.id} name={product.name} price={product.price} description={product.description} />

    })
  return (
    <div>
        {productComponent}
    </div>
  )
}

export default App