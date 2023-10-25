import React from 'react'
import './Drinks.scss'
function Drinks() {
  return (
    <div className='Drinks'>
          <div className="container">
            <div className="drinks_inner">
              <div className="drinks_hero">
                <h2>Koreya qizil jensheni ichimligini kimlar iste'mol qiladilar?</h2>
                <ul className='drinks_list'>
                  <li className='drinks_items'>O’zida doimiy charchoq va holsizlik xis qiladiganlar</li>
                  <li className='drinks_items'>Jinsiy quvvati kamligidan aziyat chekadiganlar</li>
                  <li className='drinks_items'>Saraton kasalligini oldini olishni istaganlar</li>
                  <li className='drinks_items'>Qarilikni sekinlashtirishni istaganlar</li>
                  <li className='drinks_items'>Aqliy va jismoniy faoliyati pasayganlar</li>
                  <li className='drinks_items'>Tana va bo’g’imlarda doimiy og’riq xis qiladiganlar</li>
                  <li className='drinks_items'>Bemorlikdan keyin oyoqqa tezroq turishni xohlaganlar</li>
                </ul>
              </div>
            </div>
          </div>
    </div>
  )
}

export default Drinks