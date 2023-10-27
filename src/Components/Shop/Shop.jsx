import React from 'react'
import './Shop.scss'
// import shop__left from '../../img/Shop__left.png'
import shop__leftSet from '../../img/shop__leftSet.png'
function Shop() {
  return (
    <div className='Shop'>
      <div className="container">
          <div className="shop__inner">
            <div className="shop_left">
             <img className='shop__leftSet' src={shop__leftSet} alt="img" />
             <span>
              <p>Qizil jen shen</p>
              <p>1 199 000</p>
             </span>
            </div>
            <div className="shop_right">
              <img className='shop__leftSet' src={shop__leftSet} alt="img" />
              <span>
              <p>Qizil jen shen</p>
              <p>1 199 000</p>
             </span>
            </div>
          </div>
      </div>
    </div>
  )
}

export default Shop