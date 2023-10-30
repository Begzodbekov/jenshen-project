import React from "react";
import "./Difference.scss";
import difference__top from '../../img/difference__top.png'
import difference__bottom from '../../img/difference__bottom.png'
function Difference() {
  return (
    <div className="Difference">
      <div className="container">
        <div className="difference__inner">
          <div className="difference__top">
            <div className="difference__top-left">
              <p>
                Qizil jenshen bilan oddiy jenshenni farqi,yetishtirilishi.
                Jenshen mahsulotini ekishdan oldin ekin maydoni 2 yil og'itlar
                bilan sugorilib tayyorlanadi. 3-yili esa yerga jenshen 2 xil
                usulda ekiladi,1-jenshen niholini donalab ekish(koreada asosan
                shu usuldan foydalaniladi),2- urugni sepish orqali. Yerga
                jenshen ekilgandan song, 1 ~ 8 yil davomida jenshen turli
                og'itlar bilan sugorilib katta qilinadi.(jenshen yerda qancha
                turganiga qarab oshancha yillik jenshen deb nomlanadi). Yerdan
                yangi uzilgan 1~8 yillik ho'l jenshen(koreyschada
                insam인삼,susam수삼 deb nomlanadi)bu oddiy jenshen
                hisoblanadi(lekin buniham foydali hususiyatlari juda kop.
                Giyohlar ichida qizil jenshendan song birinchi orinda turadi)
              </p>
            </div>
              <div className="difference__top-right">
              <img src={difference__top} alt="difference__top" />

              </div>
          </div>
          <div className="difference__bottom">
              <div className="difference__bottom-right">
                 <img src={difference__bottom} alt="difference__bottom" />
              </div>
            <div className="difference__top-left">
              <p>
                Qizil jenshen bilan oddiy jenshenni farqi,yetishtirilishi.
                Jenshen mahsulotini ekishdan oldin ekin maydoni 2 yil og'itlar
                bilan sugorilib tayyorlanadi. 3-yili esa yerga jenshen 2 xil
                usulda ekiladi,1-jenshen niholini donalab ekish(koreada asosan
                shu usuldan foydalaniladi),2- urugni sepish orqali. Yerga
                jenshen ekilgandan song, 1 ~ 8 yil davomida jenshen turli
                og'itlar bilan sugorilib katta qilinadi.(jenshen yerda qancha
                turganiga qarab oshancha yillik jenshen deb nomlanadi). Yerdan
                yangi uzilgan 1~8 yillik ho'l jenshen(koreyschada
                insam인삼,susam수삼 deb nomlanadi)bu oddiy jenshen
                hisoblanadi(lekin buniham foydali hususiyatlari juda kop.
                Giyohlar ichida qizil jenshendan song birinchi orinda turadi)
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Difference;
