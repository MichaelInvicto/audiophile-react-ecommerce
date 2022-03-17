import React, { useContext } from 'react'
import './order.css'
import checkmark from '../../assets/shared/desktop/check-mark.svg'
import { Link } from 'react-router-dom'
import { CartContext } from '../../CartContext'

const Order = () => {

  const { cart_total, global_cart, openOrder, value } = useContext(CartContext)

  const [the_cart, setTheCart] = global_cart
  const [the_total, setTheTotal] = cart_total
  const [my_order, setMyOrder] = openOrder
  const [myValue, setMyValue] = value

  // Get the name and capitalize the first letter

  var name = (JSON.parse(localStorage.getItem('form')).name).split(' ')[0]
  name = name.charAt(0).toUpperCase() + name.slice(1)

  function reset() {
      const new_cart = []
      localStorage.setItem('cart', JSON.stringify(new_cart))
      setMyOrder(false)
      setTheCart([])
      setMyValue(0)
  }

  return (
      <>
        <div className="dark_bg" />
        <section className="order-section">
            <div className="order-container">
                <div className="order-checkmark">
                    <div className="order-checkmark-image-container">
                        <img src={checkmark} alt="order checkmark" />
                    </div>
                </div>
                <h2>thank you <br /> for your order</h2>
                <p> {name}, you will receive an email confirmaion shortly. </p>
                <div className="cart-and-total">
                    <div className="cart-order-details">
                        <div className="cart-order-item-container">
                            <div className="cart-order-item">
                                <div className="cart-order-item-image-container">
                                    <div className="cart-order-item-image">
                                        <img src={require(`../../assets/${the_cart[0].image}`)} alt="order image" />
                                    </div>
                                </div>
                                <div className="cart-order-item-details">
                                    <h4>{the_cart[0].name}</h4>
                                    <p>$ {the_cart[0].total.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</p>
                                    
                                </div>
                                <div className="empty-div"></div>
                                <div className="cart-order-item-quantity">
                                    <p>x{the_cart[0].quantity}</p>
                                </div>
                            </div>
                        </div>
                        {
                            the_cart.length > 1 ?
                            <div className="other-cart-items">
                                <p>and {the_cart.length - 1} other { (the_cart.length - 1) > 1 ? 'items' : 'item' }</p>
                            </div>
                            : null
                        }
                    </div>
                    <div className="order-grand-total-container">
                        <div className="order-grand-total">
                            <h3>grand total</h3>
                            <p>$ {((the_total) + Math.floor(0.01 * the_total)).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
                            </p>
                        </div>
                    </div>
                </div>
                <div className="back-to-home">
                     <Link onClick={reset} to='/'>back to home</Link>
                </div>
            </div>
        </section>
      </>
  )
}

export default Order