import { useState, useEffect } from "react"
//T can be any value
/*
Generics allow for type safety in components where the 
arguments & return types are unknown ahead of time
*/
/* union types (|) a variable can be assigned more than one type */
export function useLocalStorage<T>(key: string, initialValue: T | (() => T)) {
//gets an item from storage
    const [value, setValue] = useState<T>(() => {
        const jsonValue = localStorage.getItem(key)
        if(jsonValue != null) return JSON.parse(jsonValue)

        if (typeof initialValue === "function") {
            return (initialValue as () => T)()
        } else {
            return initialValue
        }
    })
//every time value or setvalue changes the useEffect to store an item will run
    useEffect(() => {
        localStorage.setItem(key, JSON.stringify(value))
    }, [key, value])
    
    /* 
    The 'as' keyword is a Type Assertion in TypeScript which tells the 
    compiler to consider the object as another type than the type the 
    compiler ..
    The 'as' keyword can cast a type that can be a more specific or less 
    specific version of the expected type.
    */
    return [value, setValue] as [typeof value, typeof setValue]
}