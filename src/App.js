import './App.css';
import {useState, useEffect} from 'react';
import JSEncrypt from 'jsencrypt';

function App() {

  const [details, setdetasils] = useState([])

  useEffect(() => {
    fetch('http://127.0.0.1:5000/getcolumn', {
      'method':'GET',
      headers:{
        'content-Type':'appliations/json'
      }
    })
    .then(res => res.json())
    .then(res => setdetasils(res))
    .catch(error => console.log(error))

  },[])

  onsubmit(() => {
    
  })

  // for(let i = 0; i < details.length; i++){
  //   // console.log(details[i].text, details[i].privateKey);
  //   const x = decryptText(details[i].text, details[i].privateKey)
  //   // console.log(x);
    
  // }

  // function decryptText(text, key){
  //   // console.log(text, key);
  //   const decrypt = new JSEncrypt();
  //   decrypt.setPrivateKey(key);
  //   let decrypted = decrypt.decrypt(text);
  //   console.log(decrypted);
  //   return decrypted;
  // }

  // const PRIV_KEY = details.privateKey

  // function decryptText(text){
  //   const decrypt = new JSEncrypt();
  //   decrypt.setPrivateKey(PRIV_KEY);
  //   let decrypted = decrypt.decrypt((details.text));
  //   console.log(decrypted);
  //   return decrypted;
  // }
  // decryptText(details.text)


  return (
    <div className = "container mt-5">
      <table class="table table-striped">
        <thead>
          <tr>
            <th scope="col"><div style={{width:100}}>Text</div></th>
            <th scope="col"><div style={{width:200}}>Public Key</div></th>
            <th scope="col"><div style={{width:200}}>Private Key</div></th>
          </tr>
        </thead>
        <tbody>
        {details.map(details => {
          return(
            <div key = {details.id}>
                <tr>
                  {/* <th scope="row"><div style={{width:100}}>{details.text}</div></th> */}
                  <th scope="row"><div style={{width:100}}>{details.text}</div></th>
                  <td scope="row"> <div style={{width:600}}> {details.publicKey}</div> </td>
                  <td scope="row"> <div style={{width:600}}>{details.privateKey}</div> </td>
                </tr>
            </div>
          )
        })}
        </tbody>
      </table>
    </div>
  );
}

export default App;
