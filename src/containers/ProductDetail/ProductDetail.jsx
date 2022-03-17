import React, { useEffect, useState, useContext } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import Recommended from '../../components/Recommended/Recommended';
import './productdetail.css';
import {toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { CartContext } from '../../CartContext'


toast.configure()

const ProductDetail = (props) => {

  // This is so that when we refresh the page, the quantity will be reset to 1

  const { pathname } = useLocation();


  const { value, button, quantity, global_cart } = useContext(CartContext)
  
  // const [quantity, setQuantity] = useState(1);
  const [the_value, setValue] = value
  const [the_button, setButton] = button
  const [the_quantity, setQuantity] = quantity
  const [globalCart, setGlobalCart] = global_cart
  // const [button, setButton] = useState(false)
  const [cart, setCart] = useState(get_cart_items());

  const navigate = useNavigate();
  
  useEffect(() => {
    init(get_cart_items())
    var the_cart = get_cart_items()
    for (var k = 0; k<the_cart.length; k++) {
      if (get_product_id() === the_cart[k].id) {
        setQuantity(the_cart[k].quantity);
        setButton(true)
        break
      }
      setButton(false)
      setQuantity(1)
    }
  }, [pathname])

  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cart))
  }, [cart]);

  function init(my_cart) {
    var product_id = get_product_id()
    
    if (my_cart.length >= 1) {
      for (var i = 0; i<my_cart.length; i++) {
        if (product_id === my_cart[i].id) {
          setQuantity(my_cart[i].quantity);
          setValue(my_cart.length)
          setButton(true)
          break;
        }
      }
    }
    else {
      setQuantity(1);
      setButton(false)
    }
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

  function get_product_id() {
    return props.product.id
  }

  // The function to increase the quantity

  function increase_quantity(e) {
    e.preventDefault();
    var cart_items = get_cart_items();
    var inc_index = -22222;

    if (cart_items.length > 0) {

      for (var inc = 0; inc<cart_items.length; inc++) {
        if (cart_items[inc].id === props.product.id) {
          inc_index = inc;
          break
        }
      }

      if (inc_index !== -22222) {
        if (the_quantity >= 1) {
          var inc_num = the_quantity + 1;
          setQuantity(inc_num);
          cart_items[inc_index].quantity = inc_num;
          cart_items[inc_index].total = inc_num * cart_items[inc_index].price;
          localStorage.setItem('cart', JSON.stringify(cart_items))
          setGlobalCart(cart_items)
          toast.success('Increased the quantity of ' + props.product.name, {
            position: "top-left",
            autoClose: 2500
          })
        }
        else {
          setQuantity(1)
        }
      }
      else {
        toast.error('Click on ADD TO CART first, then edit the quantity', {
          position: "top-left",
          autoClose: 3000
        })
      }
    }
    else {
      toast.error('Click on ADD TO CART first, then edit the quantity', {
        position: "top-left",
        autoClose: 3000
      })
    }
  }

  // The function to decrease the quantity

  function decrease_quantity(e) {
    e.preventDefault();
    var cart_items = get_cart_items();
    var dec_index = -22222;

    if (cart_items.length > 0) {

      for (var dec = 0; dec < cart_items.length; dec++) {
        if (cart_items[dec].id === props.product.id) {
          dec_index = dec;
          break
        }
      }

      if (dec_index !== -22222) {
        if (the_quantity > 1) {
          var dec_num = the_quantity - 1;
          setQuantity(dec_num);
          cart_items[dec_index].quantity = dec_num;
          cart_items[dec_index].total = dec_num * cart_items[dec_index].price;
          localStorage.setItem('cart', JSON.stringify(cart_items))
          setGlobalCart(cart_items)
          toast.warning('Decreased the quantity of ' + props.product.name, {
            position: "top-left",
            autoClose: 2500
          })
        }
        else {
          setQuantity(1)
        }
      }
      else {
        toast.error('Click on ADD TO CART first, then edit the quantity', {
          position: "top-left",
          autoClose: 3000
        })
      }
    }
    else {
      toast.error('Click on ADD TO CART first, then edit the quantity', {
        position: "top-left",
        autoClose: 3000
      })
    }
  }

  const add_to_cart = (e) => {
    e.preventDefault();

    var cart_items = get_cart_items();
    toast.success('Added ' + props.product.name + ' to Cart', {
      position: "top-left",
      autoClose: 2700
    })
    
    var item = {
      id: props.product.id, 
      name: props.product.short_name,
      image: props.product.image.mobile,
      slug: props.product.slug,
      price: props.product.price,
      quantity: the_quantity,
      total: props.product.price * the_quantity
    }

    cart_items.push(item);
    setCart(cart_items);
    localStorage.setItem('cart', JSON.stringify(cart))
    setGlobalCart(cart_items)
    init(cart_items)
  }

  function remove_from_cart(e) {
    e.preventDefault();

    var cart_items = get_cart_items();
    var new_cart = []
    var removing_index;

    for (var j = 0; j<cart_items.length; j++) {
      if (get_product_id() === cart_items[j].id) {
        removing_index = j
        continue
      }
      else {
        new_cart.push(cart_items[j])
      }
    }

    setCart(new_cart);
    setGlobalCart(new_cart)
    toast.error('Removed ' + cart_items[removing_index].name + ' from the cart', {
      position: "top-left",
      autoClose: 2700
    })
    setButton(false)
    setQuantity(1)
    setValue(new_cart.length)
  } 

  function prevent_default(e) {
    e.preventDefault()
  }

  return (
    <div>
      <section className="go-back-section">
        <div className="go-back">
          <button className="go-back-button" onClick={() => navigate(-1)}>go back</button>
        </div>
      </section>
      <section className="product-detail-section">
        <div className="product-section-container">
          <div className="product-section-image-container">
            <div className="product-section-image-main">
              <div className="product-section-image">
                <img className='desktop-product-image' src={require(`../../assets/${props.product.image.desktop}`)} alt={props.product.alt} />
                <img className='tablet-product-image' src={require(`../../assets/${props.product.image.tablet}`)} alt={props.product.alt} />
                <img className='mobile-product-image' src={require(`../../assets/${props.product.image.mobile}`)} alt={props.product.alt} />
              </div>
            </div>
          </div>
          <div className="product-section-details-container">
            <div className="product-section-details">
              <p className="product-detail-new">{props.product.new ? 'new product' : ''}</p>
              <h2 className="product-detail-name">{props.product.name}</h2>
              <p className="product-detail-description">{props.product.description}</p>
              <h3 className="product-price">${props.product.price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</h3>
              <div className="product-cart-quantity-container">
                <div className="product-cart-and-quantity">
                  <form className="quantity-and-cart-form" onSubmit={prevent_default}>
                    <div className="quantity-buttons">
                      <div className="increase-button-container">
                        <button onClick={decrease_quantity}>-</button>
                      </div>
                      <div className="quantity-container">
                        <input type="number" value={the_quantity} name='increase' readOnly />
                      </div>
                      <div className="decrease-button-container">
                        <button onClick={increase_quantity}>+</button>
                      </div>
                    </div>
                    {
                    the_button ?
                    <button className='add-or-remove-cart-button remove-from-cart' onClick={remove_from_cart}>remove from cart</button>
                     :<button className='add-or-remove-cart-button add-to-cart-button' onClick={add_to_cart}>add to cart</button>}
                    
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="features-section">
        <div className="features-section-container">
          <div className="feature-desc">
            <h2>features</h2>
            <p>{props.product.features}
            </p>
          </div>
          <div className="in-the-box-container">
            <div className="in-the-box">
              <h2>in the box</h2>
              <ul>
              {props.product.includes.map(include => (
                <li>
                  <p className="item-quantity">{include.quantity}x</p>
                  <p className="item-desc">{include.description}</p>
                </li>
              ))}
              </ul>
            </div>
          </div>
        </div>
      </section>
      <section className="image-gallery">
        <div className="gallery-container">
          <div className="image-one-container">
            <div className="image-one">
              <img className='gallery-one-image-desktop' src={require(`../../assets/${props.product.gallery[0].desktop}`)} alt="" />
              <img className='gallery-one-image-tablet' src={require(`../../assets/${props.product.gallery[0].tablet}`)}  alt="" />
              <img className='gallery-one-image-mobile' src={require(`../../assets/${props.product.gallery[0].mobile}`)}  alt="" />
              </div>
            </div>
          <div className="image-two-container">
            <div className="image-two">
              <img className='gallery-two-image-desktop' src={require(`../../assets/${props.product.gallery[1].desktop}`)} alt="" />
              <img className='gallery-two-image-tablet'  src={require(`../../assets/${props.product.gallery[1].tablet}`)} alt="" />
              <img className='gallery-two-image-mobile'  src={require(`../../assets/${props.product.gallery[1].mobile}`)} alt="" />
              </div>
            </div>
          <div className="image-three-container">
            <div className="image-three">
                <img className='gallery-three-image-desktop' src={require(`../../assets/${props.product.gallery[2].desktop}`)} alt="" />
                <img className='gallery-three-image-tablet'  src={require(`../../assets/${props.product.gallery[2].tablet}`)} alt="" />
                <img className='gallery-three-image-mobile'  src={require(`../../assets/${props.product.gallery[2].mobile}`)} alt="" />
                </div>
            </div>
        </div>
      </section>
      <Recommended recommended={props.product.recommended} />
    </div>
  )
}

export default ProductDetail