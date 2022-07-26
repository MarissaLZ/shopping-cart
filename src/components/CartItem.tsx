import { useShoppingCart } from "../context/ShoppingCartContext"
// import storeItem from "../data/items.json"
import { Stack, Button } from "react-bootstrap"
import { formatCurrency } from "../utilities/formatCurrency"

type CartItemProps = {
  id: number
  quantity: number
  [storeItems: string]: any
}


export function CartItem({ id, quantity, storeItems }: CartItemProps) {
  const { removeFromCart } = useShoppingCart()
  let i = object: any;
  const item = storeItems.find(i: object  => i.id === id)
  console.log('item find',item)
  if(item == null) return null

  return(
    <Stack direction="horizontal" gap={2} className="d-flex
    align-items-center">
      <img 
        src={item.imgUrl}
        style={{ width: "125px", height: "75px", objectFit:
      "cover"}}
      />
      <div className="me-auto">
          {item.name} {quantity > 0 && (
            <span className="text-muted" style={{ fontSize: ".65rem" }}>
              {quantity}x
            </span>
            )}
        </div>
        <div className="text-muted" style={{ fontSize: ".75rem" }}>
          {formatCurrency(item.price)}
        </div>
        <div> {formatCurrency(item.price * quantity)}</div>
        <Button variant="outline-danger" size="sm" onClick={()=> removeFromCart(item.id)}>&times;</Button>
    </Stack>
  )
}