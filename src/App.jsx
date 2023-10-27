import './App.scss';
import Buyurtma from './Components/Buyurtma/Buyurtma';
import Difference from './Components/Difference/Difference';
import Drinks from './Components/Drinks/Drinks';
import Facts from './Components/Facts/Facts';
import Footer from './Components/Footer/Footer';
import Header from './Components/Header/Header';
import Hero from './Components/Hero/Hero';
import Hususiyat from './Components/Hususiyat/Hususiyat';
import Kompaniya from './Components/Kompaniya/Kompaniya';
import Root from './Components/Root/Root';
import Shop from './Components/Shop/Shop';

function App() {
  return (
    <div className="App">
      {/* <Header/> */}
      {/* <Hero/> */}
      {/* <Buyurtma/> */}
      {/* <Shop/> */}
      {/* <Difference/> */}
      {/* <Hususiyat/> */}
      <Kompaniya/>
      <Drinks/>
      <Root/>
      <Facts/>
      <Footer/>
    </div>
  );
}

export default App;
