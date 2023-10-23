import React from 'react'
import './Facts.scss'
function Facts() {
  return (
    <div className='Facts'>
      <div className="container">
        <div className="facts_inner">
          <h1 className='facts_title'>Faktlar sonlarda</h1>
          <div className='facts_cards_father'>
            <div className='facts_card card1'>
              <h1>100</h1>
              <span className='facts_card_span'></span>
              <p className='facts_definition1'>100 ga yaqin kasalliklarni oldini olish va davolashda qollaniladi</p>
            </div>
            <div className='facts_card card2'>
              <h1>1.3 <span>mlrd</span></h1>
              <span className='facts_card_span'></span>
              <p className='facts_definition2'>1,3 mlrd xitoyliklar jenshenni inson uchun eng foydali mahsulot deb hisoblashadi</p>
            </div>
            <div className='facts_card card3'>
              <h1>100</h1>
              <span className='facts_card_span'></span>
              <p className='facts_definition3'>Jenshen o'simligi 100 yilgacha umr ko'radi</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Facts