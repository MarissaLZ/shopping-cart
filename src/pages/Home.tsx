import React, { useEffect, useState } from 'react'
import { Store } from "./Store"




export function Home() {
  // const [stuff, setStuff] = useState([])
  /* get data function */
  // function getData(): void {
  //   fetch('https://fakestoreapi.com/products/')
  //   .then(res=>res.json())
  // } res: array
  //const url = 'https://fakestoreapi.com/products/'
  // const getData = (url: string) => {
  // const getData = () => {
  //   fetch('https://fakestoreapi.com/products/')
  //   .then((response) => {return response.json()})
  //   // .then(response => console.log("Home data", response))
  //  }
  
  //  getData();
  //  useEffect(() => {
  //   getData()
  //  }, [])

  let getData;

    fetch('https://fakestoreapi.com/products/')
    .then(function (response) { response.json()})
    .then(function (response) {getData = response})

  console.log("DATA STORE IN A VARIABLE", getData);
   return (
  
  //  <Store getData={getData} />
     <Store />

   )
} 