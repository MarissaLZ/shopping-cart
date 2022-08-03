import { Card, Button } from "react-bootstrap"
import { formatCurrency } from "../utilities/formatCurrency"
import { useShoppingCart } from "../context/ShoppingCartContext"


// type StoreItemProps = {
//   id: number
//   name: string
//   price: number
//   imgUrl: string
// }
type StoreItemProps = {
  category: string
  description: string
  id: number
  image: string
  price: number
  rating?: object
  title: string
}

// export function StoreItem({ id, name, price, imgUrl } :
export function StoreItem({ category, description, id, image, price, rating, title } :
  StoreItemProps) {
    const {
        getItemQuantity,
        increaseCartQuantity,
        decreaseCartQuantity,
        removeFromCart
    } = useShoppingCart()
    const quantity = getItemQuantity(id)

    return (
      <Card className="h-100">
        <Card.Img 
          variant="top" 
          src={image}
          height="200px"
          style={{objectFit: "cover" }} 
        />
        <Card.Body className="d-flex flex-column">
       <Card.Title className="d-flex justify-content-between align-items-baseline mb-4">
        <span className="fs-2">{title}</span>
        <span className="fs-2 text-muted">{formatCurrency(price)}</span>
       </Card.Title>
       <div className="mt-auto">
        {quantity === 0 ? (
        <Button className="w-100" onClick={() => increaseCartQuantity(id)}>+Add To Cart</Button> 
       ) : (<div className="d-flex align-items-center flex-column" style={{ gap: ".5rem"}}>
           <div className="d-flex align-items-center justify-content-center" 
           style={{ gap: ".5rem" }}>
            <Button onClick={() => decreaseCartQuantity(id)}>-</Button>
            <div> 
              <span className="fs-3">{quantity}</span> in
              cart
              </div>
            <Button onClick={() => increaseCartQuantity(id)} >+</Button>
          </div>
          <Button variant="danger" size="sm" onClick={() => removeFromCart(id)}>Remove</Button>
        </div>
        )}
       </div>
       </Card.Body>
      </Card>    
    )
}
//This condition will always return 'false' since the types '1' and '0' have no overlap.ts(2367)