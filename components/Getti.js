import React, { useState, useEffect } from 'react';
//import base64 from 'base-64';

function Getti () {

    const [virhe, setVirhe] = useState('Haetaan ...');
   

//  fetch('http://ticketguru-env.eba-mynjmazh.us-east-1.elasticbeanstalk.com/liput/18', 

const fetchUrl = async () => {
  try {
    
    const response = await fetch(`http://ticketguru-env.eba-mynjmazh.us-east-1.elasticbeanstalk.com/liput/18`);
 
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
 