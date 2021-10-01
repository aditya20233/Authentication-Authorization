import Cookies from 'js-cookie'

import {Redirect} from 'react-router-dom'

import Header from '../Header'

import './index.css'

const Cart = () => {
  const item = Cookies.get('jwt_token')
  if (item === undefined) {
    return <Redirect to="/login" />
  }

  return (
    <>
      <Header />
      <div className="not-found-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-cart-img.png"
          className="not-found-img"
          alt="cart"
        />
      </div>
    </>
  )
}

export default Cart
