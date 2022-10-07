import storeItems from "../data/items.json"
import { Col, Row } from "react-bootstrap"
import { StoreItem } from '../components/StoreItem'
import React, { useEffect, useState } from 'react'
import { CartItem } from "../components/CartItem"
// import {getData} from "./storeAPI"

//Product type interface to handle fetched data
interface Product {
  category: string
  description: string
  id: number
  image: string
  price: number
  rating?: object
  title: string
}

// function getData<T>(url: string): Promise<T> {
//   return fetch(url).then(response => {
//     return response.json<T>()
//   })
// }

// export function Store({getData}: StoreProps)  {
export function Store()  {
  const [products, setProducts] = useState([])
  const url: string = "https://fakestoreapi.com/products/";

  function getData<T>(url:string): Promise<T> {
    return fetch(url)
    .then(response => {
      return response.json<T>()
    })
  }

  useEffect(() => {
    getData<Product>(url) 
    .then((item) => {{
      let fetchedData: Product = item;
      setProducts(fetchedData)
    }}) 
  }, [])
    return(
      <>
        <h1>Store</h1>
        <Row md={2} xs={1} lg={3} className="g-3">
          {/* {storeItems.map(item => (
            <Col key={item.id}>
              <StoreItem {...item} />
            </Col> 
          ))} */}
          {products.map((product) => {
            return(
              <Col key={product.id}>
              <StoreItem {...product} />
            </Col> 
              )
          })}
        </Row>
        <CartItem storeItems={products}/>
      </> 
)
}
