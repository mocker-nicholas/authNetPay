const transVariables = {
  // Personal Info
  firstName: document.querySelector("#first"),
  lastName: document.querySelector("#last"),
  company: document.querySelector("#company"),
  address: document.querySelector("#address"),
  city: document.querySelector("#city"),
  state: document.querySelector("#state"),
  zipCode: document.querySelector("#zipcode"),

  // Billing Info
  amount: document.querySelector("#amount"),
  invNumber: document.querySelector("#poNumber"),
  cardNumber: document.querySelector("#cardNumber"),
  expDate: document.querySelector("#expDate"),
  cvv: document.querySelector("#cvv"),

  // Keys
  authKey: document.querySelector("#authKey"),
  transKey: document.querySelector("#transKey"),
};

export default transVariables;
