/* eslint-disable operator-assignment */
// Write your code here
import CartContext from '../../context/CartContext'

import './index.css'

const Summary = () => (
  <CartContext.Consumer>
    {value => {
      const {cartList} = value

      const countPrices = cartList.map(each => each.quantity * each.price)

      const Total = countPrices.reduce((num, each) => num + each)

      console.log(Total)

      return (
        <div className="alignRight">
          <div className="div">
            <h1>
              Order Total: <span className="span">RS {Total}</span>
            </h1>
            <p>{cartList.length} Items in cart</p>
            <button type="button" className="check">
              Checkout
            </button>
          </div>
        </div>
      )
    }}
  </CartContext.Consumer>
)

export default Summary
