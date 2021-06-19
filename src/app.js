// Personal Info
const firstName = document.querySelector("#first");
const lastName = document.querySelector("#last");
const company = document.querySelector("#company");
const address = document.querySelector("#address");
const city = document.querySelector("#city");
const state = document.querySelector("#state");
const zipCode = document.querySelector("#zipcode");

// Payment Info
const amount = document.querySelector("#amount");
const invNumber = document.querySelector("#poNumber");
const cardNumber = document.querySelector("#cardNumber");
const expDate = document.querySelector("#expDate");
const cvv = document.querySelector("#cvv");

// Keys
const authKey = document.querySelector("#authKey");
const transKey = document.querySelector("#transKey");

// General
const body = document.querySelector("body");
const button = document.querySelector(".submit");

button.addEventListener("click", (e) => {
  clearError();
  validateFields();
  submissionCheck(messages);
  // Change payment body html to display whether or not transaction was successful
});

// Check Field Values for the user
let messages = [];
// Add an error item to an array for every error present
const validateFields = () => {
  // First Name
  if (firstName.value === "") {
    showError("#first-item", "Enter a first name");
    messages.push("error");
  } else if (!/^[a-zA-Z]*$/g.test(firstName.value)) {
    showError("#first-item", "Names can only contain letters");
    messages.push("error");
  }
  // Last Name
  if (lastName.value === "") {
    showError("#last-item", "Enter a last name");
    messages.push("error");
  } else if (!/^[a-zA-Z]*$/g.test(firstName.value)) {
    showError("#last-item", "Names can only contain letters");
    messages.push("error");
  }
  // Billing Address
  if (address.value === "") {
    showError("#address-item", "Enter a biling address");
    messages.push("error");
  }
  // City
  if (city.value === "") {
    showError("#city-item", "Enter a city");
    messages.push("error");
  } else if (!/^[a-zA-Z, ]*$/g.test(city.value)) {
    showError("#city-item", "City can only contain letters");
    messages.push("error");
  }
  // State
  if (state.value === "") {
    showError("#state-item", "Select a state");
    messages.push("error");
  }
  // Zip
  if (zipCode.value === "") {
    showError("#zipcode-item", "Enter a zipcode");
    messages.push("error");
  } else if (!/^[1-9]*$/g.test(zipCode.value)) {
    showError("#zipcode-item", "Zipcode can only contain numbers");
    messages.push("error");
  }
  // Invoice Number
  if (invNumber.value === "") {
    showError("#poNumber-item", "Enter an invoice number");
    messages.push("error");
  } else if (!/^[1-9]*$/g.test(invNumber.value)) {
    showError("#poNumber-item", "Po Number can only contain numbers");
    messages.push("error");
  }
  // Amount
  if (amount.value === "") {
    showError("#amount-item", "Enter an amount");
    messages.push("error");
  }
  // Card Number
  if (amount.value === "") {
    showError("#cardNumber-item", "Enter card number");
    messages.push("error");
  }
  // Exp Date
  if (expDate.value === "") {
    showError("#expDate-item", "Enter card exp. date");
    messages.push("error");
  }
  // Cvv
  if (cvv.value === "") {
    showError("#cvv-item", "Enter card cvv");
    messages.push("error");
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

// Clear errors after submit
const clearError = () => {
  const errorEl = document.querySelectorAll(".error");
  if (errorEl !== []) {
    errorEl.forEach((error) => error.remove());
  }
  // If there are error messages, clear them before validation runs on next submission
  if (messages !== []) {
    messages = [];
  }
};

// Check for errors then submit
const submissionCheck = (messages) => {
  let errorPresent;
  if (messages.length === 0) {
    errorPresent = true;
  } else {
    errorPresent = false;
  }

  // If there are no error messages in the array after the validation run the transaction.
  if (errorPresent === true) {
    runTrans();
  }
};

// Submit Transaction to Auth.net
const runTrans = () => {
  const transData = {
    createTransactionRequest: {
      merchantAuthentication: {
        name: authKey.value,
        transactionKey: transKey.value,
      },
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
        poNumber: poNumber.value,
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
    .then((data) => console.log(data.messages));
};
