import React, { useState, useEffect } from 'react';

function Getti () {

  //const [taulukko, setTaulukko] = useState( [] );
  const [virhe, setVirhe] = useState('Haetaan ...');

  const fetchUrl = async () => {
    try {
      //const response = await fetch('https://www.themealdb.com/api/json/v1/1/filter.php?c=Chicken');
      const response = await fetch(`https://etappi-ticketguru.herokuapp.com/api/liput/search/lippu?koodi=ee99dbf5-a488-4832-8dea-9fe39d653713`);
   
      const json = await response.json();
     // setTaulukko(json.meals);
     console.log(json);
      setVirhe('onnistui GET');
    } catch (error) {
      setVirhe('Haku ei onnistunut');
    }
  }
 
  useEffect(() => {
    fetchUrl();
    
  }, []);

  if (virhe.length > 0) {
    return (<div>{virhe}</div>)
  }

  return (
    <div>
      
          <div >
          
          </div>
       
      
   
    </div>
  );
}
export default Getti;
 