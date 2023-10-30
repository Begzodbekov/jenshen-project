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
            <div className='shop_left_group'>
             <img className='shop__leftSet' src={shop__leftSet} alt="img" />
             <div className='shop_left_definition'>
               <p>Qizil jen shen</p>
               <p>1 199 000</p>
             </div>
            </div>
          </div>
          <div className="shop_right">
            <div className="shop_left_group">
              <img className='shop__leftSet' src={shop__leftSet} alt="img" />
              <div className='shop_left_definition'>
                <p>Qizil jen shen</p>
                <p>1 199 000</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Shop