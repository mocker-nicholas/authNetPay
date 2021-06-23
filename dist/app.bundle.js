(() => {
  "use strict";
  const e = function (e, t) {
    var r = document.querySelector(e),
      a = document.createElement("p");
    (a.className = "error"),
      a.appendChild(document.createTextNode(t)),
      r.appendChild(a);
  };
  var t = document.querySelector("#first"),
    r = document.querySelector("#last"),
    a = document.querySelector("#company"),
    u = document.querySelector("#address"),
    n = document.querySelector("#city"),
    o = document.querySelector("#state"),
    c = document.querySelector("#zipcode"),
    l = document.querySelector("#amount"),
    i = document.querySelector("#poNumber"),
    s = document.querySelector("#cardNumber"),
    m = document.querySelector("#expDate"),
    d = document.querySelector("#cvv"),
    v = document.querySelector("#authKey"),
    p = document.querySelector("#transKey");
  document.querySelector(".submit").addEventListener("click", function (e) {
    S(), h(), q(y);
  });
  var y = [],
    h = function () {
      "" === t.value
        ? (e("#first-item", "Enter a first name"), y.push("error"))
        : /^[a-zA-Z]*$/g.test(t.value) ||
          (e("#first-item", "Names can only contain letters"), y.push("error")),
        "" === r.value
          ? (e("#last-item", "Enter a last name"), y.push("error"))
          : /^[a-zA-Z]*$/g.test(t.value) ||
            (e("#last-item", "Names can only contain letters"),
            y.push("error")),
        "" === u.value &&
          (e("#address-item", "Enter a biling address"), y.push("error")),
        "" === n.value
          ? (e("#city-item", "Enter a city"), y.push("error"))
          : /^[a-zA-Z, ]*$/g.test(n.value) ||
            (e("#city-item", "City can only contain letters"), y.push("error")),
        "" === o.value && (e("#state-item", "Select a state"), y.push("error")),
        "" === c.value
          ? (e("#zipcode-item", "Enter a zipcode"), y.push("error"))
          : /^[1-9]*$/g.test(c.value) ||
            (showError("#zipcode-item", "Zipcode can only contain numbers"),
            y.push("error")),
        "" === i.value
          ? (e("#poNumber-item", "Enter an invoice number"), y.push("error"))
          : /^[1-9]*$/g.test(i.value) ||
            (e("#poNumber-item", "Po Number can only contain numbers"),
            y.push("error")),
        "" === l.value &&
          (e("#amount-item", "Enter an amount"), y.push("error")),
        "" === l.value &&
          (e("#cardNumber-item", "Enter card number"), y.push("error")),
        "" === m.value &&
          (e("#expDate-item", "Enter card exp. date"), y.push("error")),
        "" === d.value && (e("#cvv-item", "Enter card cvv"), y.push("error"));
    },
    S = function () {
      var e = document.querySelectorAll(".error");
      e !== [] &&
        e.forEach(function (e) {
          return e.remove();
        }),
        y !== [] && (y = []);
    },
    q = function (e) {
      !0 == (0 === e.length) && f();
    },
    f = function () {
      var e = {
        createTransactionRequest: {
          merchantAuthentication: { name: v.value, transactionKey: p.value },
          transactionRequest: {
            transactionType: "authCaptureTransaction",
            amount: l.value,
            payment: {
              creditCard: {
                cardNumber: s.value,
                expirationDate: m.value,
                cardCode: d.value,
              },
            },
            poNumber: i.value,
            billTo: {
              firstName: t.value,
              lastName: r.value,
              company: a.value,
              address: u.value,
              city: n.value,
              state: o.value,
              zip: c.value,
              country: "US",
            },
          },
        },
      };
      fetch("https://apitest.authorize.net/xml/v1/request.api", {
        method: "POST",
        body: JSON.stringify(e),
      })
        .then(function (e) {
          return e.json();
        })
        .then(function (e) {
          return console.log(e);
        });
    };
})();
