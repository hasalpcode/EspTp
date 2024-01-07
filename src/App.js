import React, { useState } from "react";
import './App.css';
import CardWeather from "./components/CardWeather";
import './assets/CardWeather.css'
import Banner from "./components/Banner";

function App() {
  const [temp, settemp] = useState('');
  const [desc, setdesc] = useState('');
  const [main, setmain] = useState('');
  const [icon, seticon] = useState('');
  const [isReady, setisReady] = useState(false);
  const [city, setCity] = useState('');
  const [sunrise, setSunRise] = useState('');
  const [sunset, setSunSet] = useState('');
  const [lat, setLat] = useState('');
  const [lon, setLong] = useState('');
  //  const img = "https://static.vecteezy.com/ti/photos-gratuite/p2/5692250-beau-ciel-bleu-et-nuages-avec-lumiere-du-jour-fond-naturel-le-vaste-ciel-bleu-et-nuages-ciel-gratuit-photo.jpg";

   

  React.useEffect(()=> {
    fetch('https://api.openweathermap.org/data/2.5/weather?lat=12.5833&lon=-16.2719&exclude={daily}&appid=852e2d73bbd06732bd91ee035c2255f6&units=metric').then(result => result.json())
    .then(jsonResult => {
      console.log(jsonResult);
      settemp(jsonResult.main.temp);
      setdesc(jsonResult.weather[0].description);
      setmain(jsonResult.weather[0].main);
      seticon(jsonResult.weather[0].icon);
      setCity (jsonResult.name);
      setSunRise (jsonResult.sys.sunrise);
      setSunSet (jsonResult.sys.sunset);
      setLong (jsonResult.coord.lon);
      setLat (jsonResult.coord.lat);
      setisReady(true);
    })
    .catch(e => console.error(e))
  },[]);
  if (isReady) {
    const image1 =  "https://static.vecteezy.com/ti/photos-gratuite/p2/5692250-beau-ciel-bleu-et-nuages-avec-lumiere-du-jour-fond-naturel-le-vaste-ciel-bleu-et-nuages-ciel-gratuit-photo.jpg";
    const image2 = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRz82dEBoRtZ7wPxZbThfPwfv-WSDUT3G7Efg&usqp=CAU";
    const image3 = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT5nQ89Hh5JeCflkHZdpKTMTXR_0cjV4Qlchg&usqp=CAU";
  
    // image a afficher selon la temperature
    let img;
    if (temp < 0) {
      img = image2;
    } else if (temp >= 0 && temp < 34) {
      img = image1;
    } else {
      img = image3;
    }

    return (
      <div className="App col-md-6">
        {/* <p>Temperature : {temp} c</p>
        <p>Description : {desc}</p>
        <img src={`http://openweathermap.org/img/wn/${icon}@2x.png`} />
         */}
          <Banner></Banner>
         <CardWeather img={img} name={city} temperature={temp} main={main} description={desc} sunrise={sunrise} sunset={sunset} lon={lon} lat={lat}></CardWeather>
      </div>
    );
  }else{
    return <div>Chargement en cours ...</div>;
  }
  
}

export default App;
