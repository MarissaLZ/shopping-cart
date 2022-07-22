import React from 'react';
import { Offcanvas, Stack } from "react-bootstrap";
import { useShoppingCart } from "../context/ShoppingCartContext"
import {CartItem} from "../components/CartItem"
import storeItems from "../data/items.json"
import { formatCurrency } from "../utilities/formatCurrency"




type ShoppingCartProps = {
    isOpen: boolean
}

//offCanvas allows for slide in epen{ffect
//why is {isOPen} passed down as a prop?
export function ShoppingCart({ isOpen }:ShoppingCartProps) {

  const { closeCart, cartItems} = useShoppingCart()
  
  return ( 
    <Offcanvas show={isOpen} onHide={closeCart} placement="end">
      <Offcanvas.Header closeButton>
        <Offcanvas.Title>
          Cart
        </Offcanvas.Title>
      </Offcanvas.Header>
      <Offcanvas.Body>
        <Stack gap={3}>
          {cartItems.map(item => (
          <CartItem key={item.id} {...item} />
          ))}
          <div className="ms-auto fw-bold fs-5">
            Total{" "}
            {formatCurrency(
                cartItems.reduce((total, cartItem) => {
                const item = storeItems.find(i => i.id ===
                cartItem.id)
                {/* What does ?: mean in TypeScript? Using a question mark followed
                 by a colon ( ?: ) means a property is optional. That said, a property 
                 can either have a value based on the type defined or its value can be 
                 undefined */}
              return total + (item?.price || 0) * cartItem.quantity
                }, 0)
              )}
          </div>
        </Stack>
      </Offcanvas.Body>
    </Offcanvas>
  )
}
