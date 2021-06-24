import transVariables from "./body.js";
import validate from "./validate.js";

// General
const button = document.querySelector(".submit");
const backButton = document.querySelector(".go-back");

button.addEventListener("click", (e) => {
  clearError();
  validateFields(transVariables);
  submissionCheck(messages);
});

// Check Field Values for the user
let messages = [];
// Add an error item to an array for every error present
const validateFields = ({
  firstName,
  lastName,
  address,
  city,
  state,
  zipCode,
  amount,
  invNumber,
  cardNumber,
  expDate,
  cvv,
}) => {
  // First Name
  if (firstName.value === "") {
    validate.showError("#first-item", "Enter a first name");
    messages.push("error");
  } else if (!/^[a-zA-Z]*$/g.test(firstName.value)) {
    validate.showError("#first-item", "Names can only contain letters");
    messages.push("error");
  }
  // Last Name
  if (lastName.value === "") {
    validate.showError("#last-item", "Enter a last name");
    messages.push("error");
  } else if (!/^[a-zA-Z]*$/g.test(firstName.value)) {
    validate.showError("#last-item", "Names can only contain letters");
    messages.push("error");
  }
  // Billing Address
  if (address.value === "") {
    validate.showError("#address-item", "Enter a biling address");
    messages.push("error");
  }
  // City
  if (city.value === "") {
    validate.showError("#city-item", "Enter a city");
    messages.push("error");
  } else if (!/^[a-zA-Z, ]*$/g.test(city.value)) {
    validate.showError("#city-item", "City can only contain letters");
    messages.push("error");
  }
  // State
  if (state.value === "") {
    validate.showError("#state-item", "Select a state");
    messages.push("error");
  }
  // Zip
  if (zipCode.value === "") {
    validate.showError("#zipcode-item", "Enter a zipcode");
    messages.push("error");
  } else if (!/^[1-9]*$/g.test(zipCode.value)) {
    showError("#zipcode-item", "Zipcode can only contain numbers");
    messages.push("error");
  }
  // Invoice Number
  if (invNumber.value === "") {
    validate.showError("#poNumber-item", "Enter an invoice number");
    messages.push("error");
  } else if (!/^[1-9]*$/g.test(invNumber.value)) {
    validate.showError("#poNumber-item", "Po Number can only contain numbers");
    messages.push("error");
  }
  // Amount
  if (amount.value === "") {
    validate.showError("#amount-item", "Enter an amount");
    messages.push("error");
  }
  // Card Number
  if (cardNumber.value === "") {
    validate.showError("#cardNumber-item", "Enter card number");
    messages.push("error");
  } else if (!/^[1-9]*$/g.test(cardNumber.value)) {
    validate.showError(
      "#cardNumber-item",
      "Card number can only contain numbers"
    );
    messages.push("error");
  }
  // Exp Date
  if (expDate.value === "") {
    validate.showError("#expDate-item", "Enter card exp. date");
    messages.push("error");
  }
  // Cvv
  if (cvv.value === "") {
    validate.showError("#cvv-item", "Enter card cvv");
    messages.push("error");
  }
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
    runTrans(transVariables);
  }
};

// Display the result of the transaction to the user
const displayResult = (data) => {
  const resultCode = data.messages.resultCode;
  const responseText = data.messages.message[0].text;
  const msgContainer = document.querySelector(".billing");
  const payContainer = document.querySelector(".payment");
  const button = document.querySelector("button");
  payContainer.classList = "hide";
  button.classList = "hide";
  msgContainer.innerHTML = `
  <p class="py-bottom"> Transaction Result: ${resultCode}</p> 
  <p class="py-bottom"> Message: ${responseText}</p>
  <button class="go-back" onClick="window.location.reload();">Go Back</button>
`;

  console.log(data);
};

const runTrans = ({
  firstName,
  lastName,
  company,
  address,
  city,
  state,
  zipCode,
  amount,
  invNumber,
  cardNumber,
  expDate,
  cvv,
}) => {
  const transData = {
    createTransactionRequest: {
      merchantAuthentication: {
        name: "5hK5j66VsB",
        transactionKey: "6u6rHW24cp7j4Mfa",
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
        poNumber: invNumber.value,
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
    .then((data) => {
      displayResult(data);
    });
};
