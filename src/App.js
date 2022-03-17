import { Route, Routes, useLocation } from 'react-router-dom';
import Home from './pages/Home/Home';
import Earphones from './pages/Earphones/Earphones';
import Headphones from './pages/Headphones/Headphones';
import Speakers from './pages/Speakers/Speakers';
import Product from './pages/Product/Product';
import NotFound from './components/NotFound/NotFound';
import Checkout from './pages/Checkout/Checkout';
import { useEffect, useState } from 'react';
import { CartContext } from './CartContext'


function App() {

  // To enable us to scroll automatically to the top of the page after it loads

  const [value, setValue] = useState(get_cart_items().length)
  const [button, setButton] = useState(false)
  const [quantity, setQuantity] = useState(1)
  const [cartTotal, setCartTotal] = useState(0)
  const [globalCart, setGlobalCart] = useState(get_cart_items())
  const [openOrder, setOpenOrder] = useState(false)

  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  function get_cart_items() {
    var data = localStorage.getItem('cart');

    if (data) {
      return JSON.parse(data);
    }
    else {
      return [];
    }
  }

  return (
    <div>
      <CartContext.Provider value={{ value: [value, setValue], button: [button, setButton], quantity: [quantity, setQuantity], cart_total: [cartTotal, setCartTotal], openOrder: [openOrder, setOpenOrder] , global_cart: [globalCart, setGlobalCart] }}>
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/headphones' element={<Headphones />} />
            <Route path='/earphones' element={<Earphones />} />
            <Route path='/speakers' element={<Speakers />} />
            <Route path='/product/:name' element={<Product />} />
            <Route path='/checkout' element={<Checkout />} />
            <Route path='*' element={<NotFound />} />
        </Routes>
      </CartContext.Provider>
    </div>
  );
}

export default App;
