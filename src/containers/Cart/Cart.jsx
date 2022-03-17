import React, { useContext } from 'react'
import './cart.css'
import { Link } from 'react-router-dom'
import CartItem from '../../components/CartItem/CartItem'
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { CartContext } from '../../CartContext'

const Cart = ({ setIsOpen, isCheckout }) => {

    const { value, button, quantity, cart_total, global_cart, openOrder } = useContext(CartContext)

    const [the_value, setValue] = value
    const [the_button, setButton] = button
    const [the_quantity, setQuantity] = quantity
    const [the_cart_total, setTheCartTotal] = cart_total
    const [globalCart, setGlobalCart] = global_cart

    const [myOpenOrder, setMyOpenOrder] = openOrder

    // const [cartItems, setCartItems] = useState(get_cart_items())

    setTheCartTotal(get_total())

    function remove_all() {
        const new_cart = []
        localStorage.setItem('cart', JSON.stringify(new_cart));
        setValue(0)
        setButton(false)
        setQuantity(1)
        setTheCartTotal(get_total())
        setGlobalCart(new_cart)
        toast.error('Your cart is now empty!', {
            position: "top-left",
            autoClose: 2500
          })
    }

    function get_cart_items() {
        var data = localStorage.getItem('cart');

        if (data) {
        return JSON.parse(data);
        }
        else {
        return [];
        }
    }

    function get_total() {
        var items = get_cart_items()
        var the_total = 0
        if (items.length > 0) {
            for (var i = 0; i < items.length; i++) {
                the_total += items[i].total
            }
        }
        return the_total
    }

    function continue_and_pay() {
        document.getElementById('register').click()
        setTimeout(() => {
            const errors = JSON.parse(localStorage.getItem('errors'))

            if (Object.keys(errors).length > 0) {
                document.getElementById('register').click()
            }
            else {
                setMyOpenOrder(true)
            }
        }, [100])
    }

  return (
    <>
        {isCheckout ? <div></div> : <div className='darkBG' onClick={() => setIsOpen(false)} />}
        <section className={ isCheckout ? 'cart-section-for-checkout' : "cart-section-for-navbar" }>
            <div className="cart-container">
                <div className="cart-header">
                    {
                        isCheckout ? 
                            <h3>summary</h3>
                        :<>
                            <h3>cart ({value})</h3>
                            <button onClick={remove_all}>Remove all</button>
                        </> 
                    }
                </div>
                <div className="cart-body">
                    <div className="cart-item-container">
                        {
                            globalCart.length > 0 ? 
                            globalCart.map(item => (
                                <CartItem 
                                    image={item.image}
                                    alt={item.alt}
                                    id={item.id}
                                    name={item.name}
                                    price={item.price}
                                    isCheckout={isCheckout}
                                />
                              ))
                            : <div className='empty-cart-message'>Your cart is empty!</div>
                        }
                    </div>
                </div>
                { isCheckout ? 
                    <>
                        <div className='cart-total'>
                            <p className='total'>total</p>
                            <p className="total-amount">$ {the_cart_total.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</p>
                        </div>
                        <div className='shipping'>
                            <p className='shipping-total'>shipping</p>
                            <p className="shipping-amount">$ {Math.floor(0.01 * the_cart_total).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</p>
                        </div>
                        <div className='grand-total'>
                            <p className='shipping-total'>grand total</p>
                            <p className="grand-total-amount">$ {(the_cart_total + Math.floor(0.01 * the_cart_total)).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</p>
                        </div>
                    </>
                  :
                    <div className='cart-total'>
                        <p className='total'>total</p>
                        <p className="total-amount">${the_cart_total.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</p>
                    </div>

                }
                <div className="cart-checkout">
                    { isCheckout ? 
                       <button type='submit' onClick={continue_and_pay}>continue & pay</button>     
                        :
                        <Link to='/checkout'>checkout</Link> }
                </div>
            </div>
        </section>
    </>
  )
}

export default Cart