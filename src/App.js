import React, { useState } from "react";
import './App.css';
import './assets/Employees.css'
import Banner from "./components/Banner";
import Employes from "./components/Employes";

function App() {
  const [employees, setEmployees] = useState([]);
  const [isReady, setisReady] = useState(false);


  React.useEffect(()=> {
    fetch('https://dummy.restapiexample.com/api/v1/employees').then(result => result.json())
    .then(jsonResult => {
      console.log(jsonResult);
      // recuperation de l'objet data
      setEmployees(jsonResult.data)

      setisReady(true);
    })
    .catch(e => console.error(e))
  },[]);
  if (isReady) {

    return (
      <div className="App">

          <Banner></Banner>
          <Employes name={employees}></Employes>
      </div>
    );
  }else{
    return <div>Chargement en cours ...</div>;
  }
  
}

export default App;
