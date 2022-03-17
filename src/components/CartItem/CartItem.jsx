import React, { useContext, useState } from 'react'
import { useLocation } from 'react-router-dom';
import { CartContext } from '../../CartContext'

import './cart-item.css'

const CartItem = (props) => { 

    var my_null;

    const { pathname } = useLocation();

    const { quantity, cart_total, global_cart } = useContext(CartContext)

    const [the_quantity, setQuantity] = quantity
    const [the_total, setTheTotal] = cart_total
    const [globalCart, setGlobalCart] = global_cart

    const [myQuantity, setMyQuantity] = useState(get_quantity())

    

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
    
    function get_quantity() {
        var cart_items = get_cart_items()
        var quantity;

        for (var i = 0; i<cart_items.length; i++) {
            if (cart_items[i].id === props.id) {
                quantity = cart_items[i].quantity
            }
        }

        return quantity
    }

    function get_index() {
      var cart_items = get_cart_items()
      var index;

      for (var i = 0; i<cart_items.length; i++) {
          if (cart_items[i].id === props.id) {
            index = i
          }
      }

      return index
    }

    function increase_quantity(e) {
        e.preventDefault();
        var cart_items = get_cart_items();
        var inc_index = -22222;
    
        if (cart_items.length > 0) {
    
          for (var inc = 0; inc<cart_items.length; inc++) {
            if (cart_items[inc].id === props.id) {
              inc_index = inc;
              break
            }
          }
    
          if (inc_index !== -22222) {
            if (myQuantity >= 1) {
              var inc_num = myQuantity + 1;
              (cart_items[inc_index].slug === pathname.slice(9)) ? setQuantity(inc_num) : my_null = null;
              // props.isCheckout ? setMyQuantity(5) : my_null = null;
              setMyQuantity(inc_num);
              cart_items[inc_index].quantity = inc_num;
              cart_items[inc_index].total = inc_num * cart_items[inc_index].price;
              localStorage.setItem('cart', JSON.stringify(cart_items))
              setTheTotal(get_total());
              setGlobalCart(cart_items)
            }
            else {
              setQuantity(1)
            }
          }
        }
    }

      function decrease_quantity(e) {
        e.preventDefault();
        var cart_items = get_cart_items();
        var dec_index = -22222;
    
        if (cart_items.length > 0) {
    
          for (var dec = 0; dec < cart_items.length; dec++) {
            if (cart_items[dec].id === props.id) {
              dec_index = dec;
              break
            }
          }
    
          if (dec_index !== -22222) {
            if (myQuantity > 1) {
              var dec_num = myQuantity - 1;
              (cart_items[dec_index].slug === pathname.slice(9)) ? setQuantity(dec_num) : my_null = null;
              setMyQuantity(dec_num);
              cart_items[dec_index].quantity = dec_num;
              cart_items[dec_index].total = dec_num * cart_items[dec_index].price;
              localStorage.setItem('cart', JSON.stringify(cart_items))
              setTheTotal(get_total());
              setGlobalCart(cart_items)
            }
            else {
              setQuantity(1)
            }
          }
        }
    }

    return (
    <div className="cart-item main-style">
        <div className="cart-item-image main-style">
            <div className="cart-item-image-container main-style">
                <img src={require(`../../assets/${props.image}`)} alt="" />
            </div>
        </div>
        <div className="cart-item-body main-style">
            <h4>{props.name}</h4>
            <p>${(props.price * (globalCart.length > 0 ? globalCart[get_index()].quantity : 0)).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</p>
        </div>
        <div className="cart-item-buttons main-style">
        { props.isCheckout ? 
          <div className="x-section">
            <p> x {
              globalCart.length > 0 ? globalCart[get_index()].quantity : 0
            } </p>
          </div> 
          : 
          <form>
          <div className="cart-item-buttons-container">
              <div className="decrement-cart-item main-style">
                  <button onClick={decrease_quantity}>-</button>
              </div>
              <div className="cart-item-quantity main-style">
                  <input type="number" readOnly value={myQuantity} />
              </div>
              <div className="increment-cart-item main-style">
                  <button onClick={increase_quantity}>+</button>
              </div>
          </div>
      </form>
        }
        
        </div>
    </div>
  )
}

export default CartItem