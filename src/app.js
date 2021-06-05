// Personal Info
const button = document.querySelector('.submit');
const firstName = document.querySelector('#first');
const lastName = document.querySelector('#last');
const company = document.querySelector('#company');
const address = document.querySelector('#address');
const city = document.querySelector('#city');
const state = document.querySelector('#state');
const zipCode = document.querySelector('#zipcode');

// Payment Info
const amount = document.querySelector('#amount');
const invNumber = document.querySelector('#refId');
const cardNumber = document.querySelector('#cardNumber');
const expDate = document.querySelector('#expDate');
const cvv = document.querySelector('#cvv');

// Keys
const authKey = document.querySelector('#authKey');
const transKey = document.querySelector('#transKey');

button.addEventListener('click', (e) => {
  validateFields();
  // runTrans();
})

// Check Field Values for the user
const validateFields = () => {
  // First Name
  if(firstName.value === ""){
    const message = 'Please enter cardholder first name';
    const inputDiv = document.querySelector('.input-container-first');
    const errorMessageEl = document.createElement('p')
    errorMessageEl.className = 'error'
    errorMessageEl.appendChild(document.createTextNode(message))
    inputDiv.appendChild(errorMessageEl);
  } else if (!/^[a-zA-Z]*$/g.test(firstName.value)){
    const message = 'Names can only contain letters';
    const inputDiv = document.querySelector('.input-container-first');
    const errorMessageEl = document.createElement('p')
    errorMessageEl.className = 'error'
    errorMessageEl.appendChild(document.createTextNode(message))
    inputDiv.appendChild(errorMessageEl);
  } 
  // Last Name
  if(lastName.value === ""){
    const message = 'Please enter a cardholder last name'
    const inputDiv = document.querySelector('.input-container-last');
    const errorMessageEl = document.createElement('p')
    errorMessageEl.className = 'error'
    errorMessageEl.appendChild(document.createTextNode(message))

    inputDiv.appendChild(errorMessageEl);
  } else if (!/^[a-zA-Z]*$/g.test(firstName.value)){
    const message = 'Names can only contain letters'
    const inputDiv = document.querySelector('.input-container-last');
    const errorMessageEl = document.createElement('p')
    errorMessageEl.className = 'error'
    errorMessageEl.appendChild(document.createTextNode(message))
    inputDiv.appendChild(errorMessageEl);
  }
  // Billing Address
  if(address.value === ""){
    const message = 'Please enter a billing address'
    const inputDiv = document.querySelector('.input-container-address');
    const errorMessageEl = document.createElement('p')
    errorMessageEl.className = 'error'
    errorMessageEl.appendChild(document.createTextNode(message))
    inputDiv.appendChild(errorMessageEl);
  }
  // City
  if(city.value === ""){
    const message = 'Please enter a city'
    const inputDiv = document.querySelector('.input-container-city');
    const errorMessageEl = document.createElement('p')
    errorMessageEl.className = 'error'
    errorMessageEl.appendChild(document.createTextNode(message))
    inputDiv.appendChild(errorMessageEl);
  } else if (!/^[a-zA-Z]*$/g.test(city.value)){
    const message = 'City can only contain letters'
    const inputDiv = document.querySelector('.input-container-city');
    const errorMessageEl = document.createElement('p')
    errorMessageEl.className = 'error'
    errorMessageEl.appendChild(document.createTextNode(message))
    inputDiv.appendChild(errorMessageEl);
  }
  // State
  if(state.value === ""){
    messages.push('Please select a state')
  }
  // Zip
  if(zipCode.value === ""){
    const message = 'Please enter a zip code'
    const inputDiv = document.querySelector('.input-container-zipcode');
    const errorMessageEl = document.createElement('p')
    errorMessageEl.className = 'error'
    errorMessageEl.appendChild(document.createTextNode(message))
    inputDiv.appendChild(errorMessageEl);
  } else if (!/^[1-9]*$/g.test(zipCode.value)){
    const message = 'Zip code must only contain numbers'
    const inputDiv = document.querySelector('.input-container-zipcode');
    const errorMessageEl = document.createElement('p')
    errorMessageEl.className = 'error'
    errorMessageEl.appendChild(document.createTextNode(message))
    inputDiv.appendChild(errorMessageEl);
  }
  // Amount
  if(amount.value === ""){
    // messages.push('Please select a state')
  }
  // Card Number
  if(amount.value === ""){
    // messages.push('Please enter card number')
  }
  // Exp Date
  if(expDate.value === ""){
    // messages.push('Please enter Exp. Date')
  }
  // Cvv
  if(cvv.value === ""){
    // messages.push('Please enter card CVV')
  }

  // console.log(messages);

}

// Submit Transaction to Auth.net
const runTrans = () => {
  const transData = {
    "createTransactionRequest": {
      "merchantAuthentication": {
        "name": authKey.value,
        "transactionKey": transKey.value
      },
      "refId": invNumber.value,
      "transactionRequest": {
        "transactionType": "authCaptureTransaction",
        "amount": amount.value,
        "payment": {
          "creditCard": {
            "cardNumber": cardNumber.value,
            "expirationDate": expDate.value,
            "cardCode": cvv.value
          }
        },
        "billTo": {
          "firstName": firstName.value,
          "lastName": lastName.value,
          "company": company.value,
          "address": address.value,
          "city": city.value,
          "state": state.value,
          "zip": zipCode.value,
          "country": "US"
        },
      }
    }
  }
  fetch('https://apitest.authorize.net/xml/v1/request.api', {
    method: 'POST',
    body: JSON.stringify(transData)
  })
    .then(response => response.json())
    .then(data => console.log(data));
}