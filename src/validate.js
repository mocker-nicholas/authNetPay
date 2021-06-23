const validate = {
  showError: function (flexItemId, errorMessage) {
    const inputDiv = document.querySelector(flexItemId);
    const errorMessageEl = document.createElement("p");
    errorMessageEl.className = "error";
    errorMessageEl.appendChild(document.createTextNode(errorMessage));
    inputDiv.appendChild(errorMessageEl);
  },
};

export default validate;
