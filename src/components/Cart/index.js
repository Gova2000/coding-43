import Header from '../Header'
import CartListView from '../CartListView'

import CartContext from '../../context/CartContext'
import EmptyCartView from '../EmptyCartView'
import Summary from '../CartSummary'
import './index.css'

const Cart = () => (
  <CartContext.Consumer>
    {value => {
      const {cartList, removeAllCartItems} = value
      const showEmptyView = cartList.length === 0
      // TODO: Update the functionality to remove all the items in the cart

      const RemoveAll = () => {
        removeAllCartItems()
      }

      return (
        <>
          <Header />
          <div className="cart-container">
            {showEmptyView ? (
              <EmptyCartView />
            ) : (
              <div className="cart-content-container">
                <div className="row">
                  <h1 className="cart-heading">My Cart</h1>
                  <button className="remove" type="button" onClick={RemoveAll}>
                    Remove all
                  </button>
                </div>
                <CartListView />
                {/* TODO: Add your code for Cart Summary here */}
                <Summary />
              </div>
            )}
          </div>
        </>
      )
    }}
  </CartContext.Consumer>
)
export default Cart
