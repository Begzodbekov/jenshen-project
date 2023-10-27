import React from 'react'
import './Footer.scss'
import Logo from '../../img/Footer_logo.png'
function Footer() {
  return (
    <div className='Footer'>
      <div className="container">
        <div className="footer_inner">
          <div className='footer_items item1'>
            <img src={Logo} alt="" />
            <p className='footer_description1'>Janubiy Koreyada tayyorlangan haqiqiy 6 yillik qizil jenshen ekstrakti</p>
            <div className='foote_social'>
              <i class="bi bi-telegram"></i>
              <i class="bi bi-instagram"></i>
              <i class="bi bi-facebook"></i>
              <i class="bi bi-youtube"></i>
            </div>
          </div>
          <div className='footer_items item2'>
            <p><a href="">Kompaniya haqida</a></p>
            <p><a href="">faktlar </a></p>
            <p><a href="">mahsulot </a></p>
          </div>
          <div className='footer_items'>
            <h3>Formani toʻldiring, mutaxascislardan bepul konsultatsiya oling va chegirmaga ega boling</h3>
            <form className='footer_form' action="">
              <input type="text" placeholder='Ismingiz' />
              <input type="text" placeholder='+998' />
              <button className='footer_form_btn'>Buyurtma berish</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer