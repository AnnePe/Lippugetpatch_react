import React, { useState, useEffect, Alert } from 'react';

function Getti () {

    const [virhe, setVirhe] = useState('Haetaan ...');
    const [id, setId] = useState('')
    const [lippu, setLippu] = useState('')


  const haeLippu = () => {
    console.log(id);
    fetch(`http://ticketguru-env.eba-mynjmazh.us-east-1.elasticbeanstalk.com/liput/${id}`)
    .then(response => response.json()
    .then(responseJson => setLippu(responseJson))
    .catch(error => { 
      Alert.alert('Error', error); 
    }));
    console.log(lippu);
  }

  //useEffect(() => {
  //  haeLippu();
  //}, []);

  const vaihdaId = (event) => {
    event.preventDefault();
    haeLippu(id);
  }

  const merkitseKaytetty = () => {
    fetch(`http://ticketguru-env.eba-mynjmazh.us-east-1.elasticbeanstalk.com/liput/${lippu.lipputunnus}`, {
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

  return (
    <div>
      <form onSubmit={vaihdaId}>
        <label>
          Hae lippu: 
          <input
            type="text"
            value={id}
            onChange={(e) => setId(e.target.value)}
          />
        </label>
        <input type="submit" value="Hae" />
        
      </form>

      <p>
        Id {lippu.id}<br />
        Lipputunnus {lippu.lipputunnus}<br />
        LipputyyppiId {lippu.lippuyuuppiId}<br />
        Myyntiaika {lippu.myyntiaika}<br />
        Myyntihinta {lippu.myyntihinta}<br />
        TilausId {lippu.tilausId}<br />
        Käytetty {lippu.kaytetty}<br /><br />

        <button onClick={merkitseKaytetty}>
          Merkitse käytetyksi
        </button>
      </p>
    </div>
  );
}
export default Getti;
 