import storeItems from "../data/items.json"
import { Col, Row } from "react-bootstrap"
import { StoreItem } from '../components/StoreItem'
import React, { useEffect, useState } from 'react'
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
  const [product, setProduct] = useState([])
  const url: string = "https://fakestoreapi.com/products/";

  function getData<T>(url): Promise<T> {
    return fetch(url)
    .then(response => {
      return response.json<T>()
    })
    .then()
  }
  getData<Product>(url) 
  .then((item) => {{
    let fetchedData: Product = item;
    console.log('generic data!',fetchedData)
  }})

    return(
      <>
        <h1>Store</h1>
        <Row md={2} xs={1} lg={3} className="g-3">
          {storeItems.map(item => (
            <Col key={item.id}>
              <StoreItem {...item} />
            </Col> 
          ))}
        </Row>
      </> 
)
}
