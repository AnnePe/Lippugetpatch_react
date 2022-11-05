import React, { useState, useEffect } from 'react';

function Patchi () {

  const [virhe, setVirhe] = useState('Haetaan ...');
  //fetch('http://ticketguru-env.eba-mynjmazh.us-east-1.elasticbeanstalk.com/liput/a5oeur8',

  const patchUrl = async () => {
        
    fetch('http://ticketguru-env.eba-mynjmazh.us-east-1.elasticbeanstalk.com/liput/olao89r', {
      method: "PATCH",
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
 