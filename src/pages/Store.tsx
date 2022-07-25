import storeItems from "../data/items.json"
import { Col, Row } from "react-bootstrap"
import { StoreItem } from '../components/StoreItem'
import React, { useEffect, useState } from 'react'
import {getData} from "./storeAPI"


// type StoreProps = {
//   getData: void
//   // url: string
// }

interface Products {
  id?: number
  title?: string
  price?: number
  description?: string
  category?: string
  image?: string
  rating: object
}

// export function Store({getData}: StoreProps)  {
export function Store()  {

  const [productList, setProductList] = useState <any>([])

//   function getUsers(): Promise<User[]> {
//     // For now, consider the data is stored on a static `users.json` file
//     return fetch('/users.json')
//             // the JSON body is taken from the response
//             .then(res => res.json())
//             .then(res => {
//                     // The response has an `any` type, so we need to cast
//                     // it to the `User` type, and return it from the promise
//                     return res as User[]
//             })
// }
const url2 = "https://fakestoreapi.com/products/";

  // function getDataAgain(url3): Promise<Products> {
  //   return fetch(url3)
  //   .then((response) => response.json())
  //   .then(response => {
  //     return response as Products[]
  //   })
  //  }
  //  getDataAgain()

//   export function getData(url: string) {

//     fetch(url)
//     .then((response) => response.json())

// }
  useEffect(() => {
    //const url = 'https://fakestoreapi.com/products/'
    const url2 = "https://fakestoreapi.com/products/";
    getData(url2)
    .then(res => setProductList(res))

  }, [])

  console.log('product list after',productList)
  // console.log('response', getData())
  // getData()
  //storeItems is an array of objects
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
