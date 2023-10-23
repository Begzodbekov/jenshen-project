import React from "react";
import "./Hususiyat.scss";
import big__img__right from  "../../img/big__img__right.png";
import Hususiyat__bg from  "../../img/Hususiyat__divImg.png";
function Hususiyat() {
  return (
    <div className="Hususiyat">
      <div className="container">
        <div className="hususiyat__inner">
          <div className="big">
            <img className="hususiyat__bg" src={Hususiyat__bg} alt="Hususiyat__bg" />
            <div className="big__box">
            <div className="big__left">
              <p>
                Qizil jenshen bilan jenshenni foydali hususiyatlaridagi farqi-
                1-qizil jenshenni aks tasiri oddiy jenshenga qaraganda kamroq,
                o'zi esa kuchliroq shuning uchun qizil jenshen 50 yoshdan
                yuqoridagilar uchun judaham qulay va foydali. 2- qizil jenshen
                hozirgi kundagi eng ko'p kasalliklar( davlenya, saxr,jinsiy
                zaiflik)ni davolashdagi eng uchun eng kuchli giyohdir. Oddiy
                jenshen esa asosan yoshlar(15-40 yosh) uchundir u judaham kuchli
                issiqlik manbayidir. U insondagi dangasa immunitetlarni
                uyg'otadi va odamni ishchanlik, harakatchanligini oshiradi,
                insondagi sovuqlikni tanadan quvib chiqaradi va insonni kop
                bezovta qiladigan shamollash,grip,tanadagi og'riqlar,prostata
                kabi kasalliklarni yoq qiladi. Korealik jenshen mutahasislari va
                doctorlarning hulosasiga ko'ra qizil jenshenni 50 yoshdan
                yuqorilar uchun. Oddiy jenshenni esa 15 yoshdan-50 yoshgacha
                bolgan insonlar uchun tafsiya qilish eng to'g'ri yo'ldir.
              </p>
            </div>
            <div className="big__right">
              <img src={big__img__right} alt="big__img__right" />
            </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hususiyat;
