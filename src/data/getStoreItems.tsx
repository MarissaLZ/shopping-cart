import { useState, useEffect } from 'react';
interface Product {
  category: string
  description: string
  id: number
  imgUrl: string
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
// export default function Store()  {
  // const [products, setProducts] = useState([])

  // function getData<T>(url:string): Promise<T> {
  //   return fetch(url)
  //   .then(response => {
  //     return response.json<T>()
  //   })

  //   useEffect(() => {
  //   getData<Product>(url) 
  //   .then((item) => {{
  //     let fetchedData: Product = item;
  //     setProducts(fetchedData)
  //   }}) 
  // }, [])
  //}
// }
export const url: string = "https://fakestoreapi.com/products/";

async const getStoreData = (url:string): Promise<Product> | undefined {
  try{
  const storeData = await fetch(url);
  return await storeData.json();
  }
  catch (Error){
    console.log(Error)
  }
};

export default getStoreData;

