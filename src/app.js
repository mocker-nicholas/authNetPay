// Personal Info
const button = document.querySelector(".submit");
const firstName = document.querySelector("#first");
const lastName = document.querySelector("#last");
const company = document.querySelector("#company");
const address = document.querySelector("#address");
const city = document.querySelector("#city");
const state = document.querySelector("#state");
const zipCode = document.querySelector("#zipcode");

// Payment Info
const amount = document.querySelector("#amount");
const invNumber = document.querySelector("#refId");
const cardNumber = document.querySelector("#cardNumber");
const expDate = document.querySelector("#expDate");
const cvv = document.querySelector("#cvv");

// Keys
const authKey = document.querySelector("#authKey");
const transKey = document.querySelector("#transKey");

button.addEventListener("click", (e) => {
  validateFields();
  // runTrans();
  // clearError();
});

// Check Field Values for the user
const validateFields = () => {
  // First Name
  if (firstName.value === "") {
    showError("#first-item", "Enter a first name");
  } else if (!/^[a-zA-Z]*$/g.test(firstName.value)) {
    showError("#first-item", "Names can only contain letters");
  }
  // Last Name
  if (lastName.value === "") {
    showError("#last-item", "Enter a last name");
  } else if (!/^[a-zA-Z]*$/g.test(firstName.value)) {
    showError("#last-item", "Names can only contain letters");
  }
  // Billing Address
  if (address.value === "") {
    showError("#address-item", "Enter a biling address");
  }
  // City
  if (city.value === "") {
    showError("#city-item", "Enter a city");
  } else if (!/^[a-zA-Z]*$/g.test(city.value)) {
    showError("#city-item", "City can only contain letters");
  }
  // State
  if (state.value === "") {
    showError("#state-item", "Select a state");
  }
  // Zip
  if (zipCode.value === "") {
    showError("#zipcode-item", "Enter a zipcode");
  } else if (!/^[1-9]*$/g.test(zipCode.value)) {
    showError("#zipcode-item", "Zipcode can only contain numbers");
  }
  // Invoice Number
  if (invNumber.value === "") {
    showError("#refId-item", "Enter an Invoice number");
  }
  // Amount
  if (amount.value === "") {
    showError("#amount-item", "Enter an amount");
  }
  // Card Number
  if (amount.value === "") {
    showError("#cardNumber-item", "Enter card number");
  }
  // Exp Date
  if (expDate.value === "") {
    showError("#expDate-item", "Enter card exp. date");
  }
  // Cvv
  if (cvv.value === "") {
    showError("#cvv-item", "Enter card cvv");
  }
};

// Validation Helper Function
const showError = (flexItemId, errorMessage) => {
  const inputDiv = document.querySelector(flexItemId);
  const errorMessageEl = document.createElement("p");
  errorMessageEl.className = "error";
  errorMessageEl.appendChild(document.createTextNode(errorMessage));
  inputDiv.appendChild(errorMessageEl);
};

// Submit Transaction to Auth.net
const runTrans = () => {
  const transData = {
    createTransactionRequest: {
      merchantAuthentication: {
        name: authKey.value,
        transactionKey: transKey.value,
      },
      refId: invNumber.value,
      transactionRequest: {
        transactionType: "authCaptureTransaction",
        amount: amount.value,
        payment: {
          creditCard: {
            cardNumber: cardNumber.value,
            expirationDate: expDate.value,
            cardCode: cvv.value,
          },
        },
        billTo: {
          firstName: firstName.value,
          lastName: lastName.value,
          company: company.value,
          address: address.value,
          city: city.value,
          state: state.value,
          zip: zipCode.value,
          country: "US",
        },
      },
    },
  };
  fetch("https://apitest.authorize.net/xml/v1/request.api", {
    method: "POST",
    body: JSON.stringify(transData),
  })
    .then((response) => response.json())
    .then((data) => console.log(data));
};
