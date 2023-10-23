import './App.scss';
import Buyurtma from './Components/Buyurtma/Buyurtma';
import Difference from './Components/Difference/Difference';
import Header from './Components/Header/Header';
import Hero from './Components/Hero/Hero';
import Hususiyat from './Components/Hususiyat/Hususiyat';
import Shop from './Components/Shop/Shop';

function App() {
  return (
    <div className="App">
      <Header/>
      <Hero/>
      <Buyurtma/>
      <Shop/>
      <Difference/>
      <Hususiyat/>
    </div>
  );
}

export default App;
