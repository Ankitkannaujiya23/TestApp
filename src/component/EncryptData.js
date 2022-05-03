import React from 'react'

const EncryptData = () => {

    let obj={
        user:"Ankit",
        password:0987654321
    }
    
    let string=JSON.stringify(obj)           //convert the object/json into string;
    let seckey="abcdefghijk"
    let encrypted=CryptoJS.AES.encrypt(string,seckey).toString();
    console.log(encrypted);
    sessionStorage.setItem("user",encrypted);

    let decrypted= CryptoJS.AES.decrypt(encrypted,seckey);
    console.log(decrypted);

    let arr=['Ankit',1,2,3]
    

  return (
    <div>
        <h1>Learn how to encrypt data </h1>
    </div>
  )
}

export default EncryptData