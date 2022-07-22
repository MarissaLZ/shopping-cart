import { createContext, ReactNode, useContext, useState } from "react"
import { ShoppingCart } from "../components/ShoppingCart"
import { useLocalStorage } from "../hooks/useLocalStorage"
/*
There are four steps to using React context:
Create context using the createContext method.
Take your created context and wrap the context provider around your component tree.
Put any value you like on your context provider using the value prop.
Read that value within any component by using the context consumer.
*/
/* The primary type or value that is created when using React 
is known as a React node. A React node is defined as: a light,
 stateless, immutable, virtual representation of a DOM node. 
 React nodes are not real DOM nodes (e.g., text or element nodes)
themselves, but a representation of a potential DOM node. */
type ShoppingCartProviderProps = {
  children: ReactNode  
}

type CartItem = {
  id: number
  quantity: number
}

//functions we would want in our cart?
/*The void type denotes the absence of having any type at all. 
It is a little like the opposite of the any type.
Typically, you use the void type as the return type of functions
 that do not return a value. */
type ShoppingCartContext = {
  openCart: () => void
  closeCart: () => void
  getItemQuantity: (id: number) => number
  increaseCartQuantity: (id: number) => void
  decreaseCartQuantity: (id: number) => void
  removeFromCart: (id: number) => void
  cartQuantity: number
  cartItems: CartItem[]
}

//initializing?
// means  this  ShoppingCartContext contains the functions w/ specified type above
const ShoppingCartContext = createContext({} as ShoppingCartContext)

//custom hook
export function useShoppingCart() {
  return useContext(ShoppingCartContext)
} 

//creating a wrapper around context
export function ShoppingCartProvider({ children }: 
    ShoppingCartProviderProps) {
        
        //ts with a hook
        const [cartItems, setCartItems] = useLocalStorage<CartItem[]>("shopping-cart", [])
        const [isOpen, setIsOpen] = useState(false);
        
        const openCart =() => setIsOpen(true);

        const closeCart =() => setIsOpen(false);

        const cartQuantity = cartItems.reduce(
          (quantity, item) => item.quantity + quantity,
          0
        )
        //Get item -> Add to Cart button?
        
        function getItemQuantity(id: number) {
          return cartItems.find(item => item.id === id)?.quantity || 0
        }

        function increaseCartQuantity(id: number) {
         //if item does not exist in cart then we will add the item to the cart
             setCartItems(currItems => {
            /*
            The equality operator (==) checks whether its two operands are equal, 
            returning a Boolean result. Unlike the strict equality operator, it 
            attempts to convert and compare operands that are of different types.
            */
            if(currItems.find(item => item.id === id) == null) {
              return [...currItems, { id, quantity: 1 }]
            } else {
                //if the item is already present in cart then update the item quantity
                return currItems.map(item => {
                  if (item.id === id) {
                    return { ...item, quantity: item.quantity + 1}
                  } else {
                    return item
                  }
                })
            }
          })
        }

        function decreaseCartQuantity(id: number) {
          setCartItems(currItems => {
             //if item is equal to one then we remove the item completely from cartItems
            if(currItems.find(item => item.id === id)?.quantity === 1) {
              return currItems.filter(item => item.id !== id)
            } else {
                // if item is more than one we decrease the quantity property
                return currItems.map(item => {
                    if( item.id === id ) {
                        return { ...item, quantity: item.quantity -1}
                    } else {
                        return item
                    }
                })
                
            }
          })
        }

        function removeFromCart(id: number) {
          setCartItems(currItems => {
            return currItems.filter(item => item.id !== id)
          })
        }

    return (
        <ShoppingCartContext.Provider 
        value={{
            getItemQuantity,
            increaseCartQuantity,
            decreaseCartQuantity,
            removeFromCart,
            cartQuantity,
            cartItems,
            openCart,
            closeCart,
        }}>
            {children}
            <ShoppingCart isOpen={isOpen}/>
        </ShoppingCartContext.Provider>
    )
}