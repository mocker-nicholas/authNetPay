// Make Card Type Display based on card number
const button = document.querySelector('.submit');
const amount = document.querySelector('#amount');
const authKey = document.querySelector('#authKey');
const transKey = document.querySelector('#transKey');

button.addEventListener('click', (e) => {
  console.log(amount.value)
  runTrans();
})

const runTrans = () => {
  const transData = {
    "createTransactionRequest": {
      "merchantAuthentication": {
        "name": authKey.value,
        "transactionKey": transKey.value
      },
      "refId": "123456",
      "transactionRequest": {
        "transactionType": "authCaptureTransaction",
        "amount": amount.value,
        "payment": {
          "creditCard": {
            "cardNumber": "5424000000000015",
            "expirationDate": "2025-12",
            "cardCode": "999"
          }
        },
        "billTo": {
          "firstName": "Ellen",
          "lastName": "Johnson",
          "company": "Souveniropolis",
          "address": "14 Main Street",
          "city": "Pecan Springs",
          "state": "TX",
          "zip": "44628",
          "country": "US"
        },
      }
    }
  }
  console.log(transData)
  fetch('https://apitest.authorize.net/xml/v1/request.api', {
    method: 'POST',
    body: JSON.stringify(transData)
  })
    .then(response => response.json())
    .then(data => console.log(data));
}