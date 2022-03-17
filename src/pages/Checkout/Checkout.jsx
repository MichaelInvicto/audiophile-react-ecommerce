import React, { useContext, useEffect } from 'react'
import { Formik, Form } from 'formik'
import { useNavigate } from 'react-router-dom'
import * as Yup from 'yup'
import Footer from '../../components/Footer/Footer'
import Navbar from '../../components/Navbar/Navbar'
import Cart from '../../containers/Cart/Cart'
import Order from '../../components/Order/Order';
import Input from '../../components/Input/Input'
import { CartContext } from '../../CartContext'
import './checkout.css'
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const Checkout = () => {

  const { openOrder, global_cart } = useContext(CartContext)

  const phoneRegExp = /^[+]?[(]?[0-9]{3}[)]?[-\s.]?[0-9]{3}[-\s.]?[0-9]{4,6}$/im;

  const [myOpenOrder, setMyOpenOrder] = openOrder;
  const [myCart, setMyCart] = global_cart

  function save_form(form) {
    localStorage.setItem('form', JSON.stringify(form.values))
    localStorage.setItem('errors', JSON.stringify(form.errors))
  }

  const validate = Yup.object({
    name: Yup.string()
        .max(25, 'Must be 25 characters or less')
        .required('Name is required!'),
    email: Yup.string()
        .email('Email is invalid!')
        .required('Email is required!'),
    number: Yup.string()
        .matches(phoneRegExp, 'Phone number is not valid!')
        .max(16, 'Phone number must not be above 16 characters')
        .required('Phone number is required!'),
    address: Yup.string()
        .max(55, 'Must be 55 characters or less')
        .required('Address is required!'),
    zipCode: Yup.string()
        .matches(/^[0-9]+$/, "Must be only digits")
        .min(5, 'Must be exactly 5 digits')
        .max(5, 'Must be exactly 5 digits')
        .required('Zip code is required'),
    city: Yup.string()
        .max(25, 'Must be 25 characters or less')
        .required('City is required!'),
    country: Yup.string()
    .max(25, 'Must be 25 characters or less')
    .required('Country is required!'),
  })

  const navigate = useNavigate();
  
  useEffect(() => {
    if (myCart.length === 0) {
      toast.error('Your cart empty! Redirecting you to the previous page.', {
        position: "top-left",
        autoClose: 3000
      })
      setTimeout(() => {
        navigate(-1);
      }, 3500)
    }
  }, [myCart])

  return (
    <>
      <Navbar />
      { myOpenOrder && <Order />} 
      <main className="checkout-main">
        <section className="checkout-section">
          <div className="checkout-section-container">
            <section className="checkout-form-section">
                <Formik
                  initialValues={{
                    name: '',
                    email: '',
                    number: '',
                    address: '',
                    zipCode: '',
                    city: '',
                    country: ''
                  }}
                validationSchema={validate}
                >
                  {
                    formik => (
                    <>
                      {save_form(formik)}
                      <Form>
                        <h2 className='checkout-header'>checkout</h2>
                        <div className="billing-details-form">
                          <h3>billing details</h3>
                          <div className="billing-details-inputs-container">
                            <Input label='name' type='text' name='name' placeholder='Michael Jack' />
                            <Input label='email' type='email' name='email' placeholder='Michael@jack.com' />
                            <Input label='phone number' type='text' name='number' placeholder='+1 234 567 8900' />
                          </div>
                        </div>
                        <div className="shipping-info-form">
                          <h3>shipping info</h3>
                          <div className="billing-details-inputs-container">
                            <Input label='address' type='text' name='address' placeholder='671 Lincoln Blvd' />
                            <Input label='zip code' type='text' name='zipCode' placeholder='60007' />
                            <Input label='city' type='text' name='city' placeholder='Chicago' />
                            <Input label='country' type='text' name='country' placeholder='United States' />
                          </div>
                        </div>
                        <button style={{opacity: '0'}} type='submit' id='register' ></button>
                      </Form>
                  </>
                    )
                  }
                  
                </Formik>
                
            </section>
            <section className="checkout-cart-summary">
              <Cart isCheckout={true} />
            </section>
          </div>
        </section>
      </main>
      <Footer />
      </>
  )
}

export default Checkout