
const BoxSDK = require("box-node-sdk") 
require('dotenv').config()

// Configure the SDK with your developer token
const sdk = new BoxSDK({
  clientID: "9dcg03pujejw82a26q8k6wdpot0zo6wu",
  clientSecret: "piGtl0nSBnJrjP2yhBHhhOKnxC8UXKvO",
});



const boxclient = sdk.getBasicClient("3qCF23RuNjFEYWF76yGdffZuOfEgSTV9"); //60 mins sandbox



async function boxCreateShareLink() {
    boxclient.folders.update("202313246758", {
        shared_link: {
          access: "open",
          password: "do-not-use-this-password",
          unshared_at: "2024-12-12T10:53:43-08:00",
          permissions: {
            can_view: false,
            can_download: false
          }
        }
      }).then(folder => {
        console.log(folder)
      })
}

boxCreateShareLink();