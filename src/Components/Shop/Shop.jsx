import React from 'react'
import './Shop.scss'
import shop__left from '../../img/Shop__left.png'
import shop__leftSet from '../../img/shop__leftSet.png'
function Shop() {
  return (
    <div className='Shop'>
      <div className="container">
          <div className="shop__inner">
              <div className="shop__left">
                  <img className='shop__leftImg' src={shop__left} alt="shop__left" />
                  <img className='shop__leftSetImg' src={shop__leftSet} alt="shop__leftSet" />
                  <span className='shop__bottom'>
                    <span className='shop__bottom__item'><p className='shop__name'>Qizil jen shen</p>
                    <p className='shop__price'>1 199 000</p></span>
                  </span>
              </div>
              <div className="shop__right">
                <img className='shop__leftImg' src={shop__left} alt="shop__left" />
                <img className='shop__leftSetImg' src={shop__leftSet} alt="shop__leftSet" />
                <span className='shop__bottom'>
                   <span className='shop__bottom__item'>
                   <p className='shop__name'>Qizil jen shen</p>
                    <p className='shop__price'>1 199 000</p>
                   </span>
                  </span>
              </div>
          </div>
      </div>
    </div>
  )
}

export default Shop