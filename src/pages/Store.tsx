import storeItems from "../data/items.json"
import { Col, Row } from "react-bootstrap"
import { StoreItem } from '../components/StoreItem'

export function Store() {
    //storeItems is an array of objects
    return(
      <>
        <h1>store</h1>
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