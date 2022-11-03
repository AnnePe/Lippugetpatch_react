import React, { useState, useEffect } from 'react';

function Patchi () {

  const [virhe, setVirhe] = useState('Haetaan ...');
  //const data='{"kaytetty":"Jccxxvvv"}';

  const patchUrl = async () => {
        
      fetch('https://etappi-ticketguru.herokuapp.com/api/liput/2', {
        method: "PATCH",
        body: JSON.stringify({"kaytetty":"react testi toimii 3.11.2022"}),
        headers: {
          "Content-Type": "application/json"
        },
      }).then(function(response) {
    //    response.status     //=> number 100–599
    //    response.statusText //=> String
    //    response.headers    //=> Headers
    //    response.url        //=> String
      setVirhe('onnistui PATCH');
        return response.text()
       
      }, function(error) {
    //    error.message //=> String
    setVirhe('erhe');
      })
    }
        
 useEffect(() => {
    patchUrl();
    
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
export default Patchi;
 