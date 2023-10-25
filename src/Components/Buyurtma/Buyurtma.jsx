import React from 'react'
import './Buyurtma.scss'
import buyurtma__leftImg from '../../img/buyurtma__leftImg.png'
function Buyurtma() {
  return (
    <div className='Buyurtma'>
       <div className="container">
          <div className="buyurtma__inner">
              <div className="buyurtma__left">
                  <div className="box">
                    <h2>Buyurtma berish</h2>
                    <span><p>Formani toʻldiring, mutaxascislardan bepul konsultatsiya oling va chegirmaga ega boling</p></span>
                   <div className="buyurtma__inp">
                   <input type="text" placeholder='Ismingiz' /> <br />
                    <input type="text"  placeholder='+998'/> <br />
                    <button className=''>Buyurtma berish</button>
                   </div>
                  </div>
              </div>
              <div className="buyurtma__right">
                <img src={buyurtma__leftImg} alt="" />
              </div>
          </div>
       </div>
    </div>
  )
}

export default Buyurtma