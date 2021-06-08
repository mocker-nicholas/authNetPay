(() => {
  var e = document.querySelector(".submit"),
    t = document.querySelector("#first"),
    r = document.querySelector("#last"),
    a =
      (document.querySelector("#company"), document.querySelector("#address")),
    c = document.querySelector("#city"),
    n = document.querySelector("#state"),
    u = document.querySelector("#zipcode"),
    o = document.querySelector("#amount"),
    l = document.querySelector("#refId"),
    m =
      (document.querySelector("#cardNumber"),
      document.querySelector("#expDate")),
    d = document.querySelector("#cvv");
  document.querySelector("#authKey"),
    document.querySelector("#transKey"),
    e.addEventListener("click", function (e) {
      i();
    });
  var i = function () {
      "" === t.value
        ? s("#first-item", "Enter a first name")
        : /^[a-zA-Z]*$/g.test(t.value) ||
          s("#first-item", "Names can only contain letters"),
        "" === r.value
          ? s("#last-item", "Enter a last name")
          : /^[a-zA-Z]*$/g.test(t.value) ||
            s("#last-item", "Names can only contain letters"),
        "" === a.value && s("#address-item", "Enter a biling address"),
        "" === c.value
          ? s("#city-item", "Enter a city")
          : /^[a-zA-Z]*$/g.test(c.value) ||
            s("#city-item", "City can only contain letters"),
        "" === n.value && s("#state-item", "Select a state"),
        "" === u.value
          ? s("#zipcode-item", "Enter a zipcode")
          : /^[1-9]*$/g.test(u.value) ||
            s("#zipcode-item", "Zipcode can only contain numbers"),
        "" === l.value && s("#refId-item", "Enter an Invoice number"),
        "" === o.value && s("#amount-item", "Enter an amount"),
        "" === o.value && s("#cardNumber-item", "Enter card number"),
        "" === m.value && s("#expDate-item", "Enter card exp. date"),
        "" === d.value && s("#cvv-item", "Enter card cvv");
    },
    s = function (e, t) {
      var r = document.querySelector(e),
        a = document.createElement("p");
      (a.className = "error"),
        a.appendChild(document.createTextNode(t)),
        r.appendChild(a);
    };
  Testtesttesttesttest;
})();
