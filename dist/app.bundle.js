(()=>{"use strict";const e={firstName:document.querySelector("#first"),lastName:document.querySelector("#last"),company:document.querySelector("#company"),address:document.querySelector("#address"),city:document.querySelector("#city"),state:document.querySelector("#state"),zipCode:document.querySelector("#zipcode"),amount:document.querySelector("#amount"),invNumber:document.querySelector("#poNumber"),cardNumber:document.querySelector("#cardNumber"),expDate:document.querySelector("#expDate"),cvv:document.querySelector("#cvv")},t=function(e,t){var r=document.querySelector(e),a=document.createElement("p");a.className="error",a.appendChild(document.createTextNode(t)),r.appendChild(a)};var r=document.querySelector(".submit");document.querySelector(".go-back"),r.addEventListener("click",(function(t){o(),n(e),c(a)})),document.querySelector("#amount"),amount.addEventListener("change",(function(e){var t=function(e){return Number.parseFloat(e).toFixed(2)}(e.target.value);e.target.value=t}));var a=[],n=function(e){var r=e.firstName,n=e.lastName,o=e.address,c=e.city,u=e.state,s=e.zipCode,i=e.amount,l=e.invNumber,m=e.cardNumber,d=e.expDate,p=e.cvv;""===r.value?(t("#first-item","Enter a first name"),a.push("error")):/^[a-zA-Z]*$/g.test(r.value)||(t("#first-item","Names can only contain letters"),a.push("error")),""===n.value?(t("#last-item","Enter a last name"),a.push("error")):/^[a-zA-Z]*$/g.test(n.value)||(t("#last-item","Names can only contain letters"),a.push("error")),""===o.value&&(t("#address-item","Enter a biling address"),a.push("error")),""===c.value?(t("#city-item","Enter a city"),a.push("error")):/^[a-zA-Z, ]*$/g.test(c.value)||(t("#city-item","City can only contain letters"),a.push("error")),""===u.value&&(t("#state-item","Select a state"),a.push("error")),""===s.value?(t("#zipcode-item","Enter a zip code"),a.push("error")):/^[0-9]*$/g.test(s.value)||(t("#zipcode-item","Zip code can only contain numbers"),a.push("error")),""===l.value?(t("#poNumber-item","Enter an invoice number"),a.push("error")):/^[0-9]*$/g.test(l.value)||(t("#poNumber-item","Po Number can only contain numbers"),a.push("error")),""===i.value&&(t("#amount-item","Enter an amount"),a.push("error")),""===m.value?(t("#cardNumber-item","Enter card number"),a.push("error")):/^[0-9]*$/g.test(m.value)||(t("#cardNumber-item","Card number can only contain numbers"),a.push("error")),""===d.value&&(t("#expDate-item","Enter card exp. date"),a.push("error")),""===p.value&&(t("#cvv-item","Enter card cvv"),a.push("error"))},o=function(){var e=document.querySelectorAll(".error");e!==[]&&e.forEach((function(e){return e.remove()})),a!==[]&&(a=[])},c=function(t){!0==(0===t.length)&&u(e)},u=function(e){var t=e.firstName,r=e.lastName,a=e.company,n=e.address,o=e.city,c=e.state,u=e.zipCode,s=e.amount,i=e.invNumber,l=e.cardNumber,m=e.expDate,d=e.cvv,p={createTransactionRequest:{merchantAuthentication:{name:"5hK5j66VsB",transactionKey:"6u6rHW24cp7j4Mfa"},transactionRequest:{transactionType:"authCaptureTransaction",amount:s.value,payment:{creditCard:{cardNumber:l.value,expirationDate:m.value,cardCode:d.value}},poNumber:i.value,billTo:{firstName:t.value,lastName:r.value,company:a.value,address:n.value,city:o.value,state:c.value,zip:u.value,country:"US"}}}};fetch("https://apitest.authorize.net/xml/v1/request.api",{method:"POST",body:JSON.stringify(p)}).then((function(e){return e.json()})).then((function(e){!function(e){var t=e.messages.resultCode,r=e.messages.message[0].text,a=document.querySelector(".billing"),n=document.querySelector(".payment"),o=document.querySelector("button");if(n.classList="hide",o.classList="hide","Error"===t)if(e.transactionResponse){var c=e.transactionResponse.errors[0].errorText;a.innerHTML='\n      <p class="py-bottom"> Transaction Result: '.concat(t,'</p>\n      <p class="py-bottom"> Message: ').concat(r,'</p>\n      <p class="py-bottom"> Message: ').concat(c,'</p>\n      <button class="go-back" onClick="window.location.reload();">Go Back</button>\n    ')}else a.innerHTML='\n      <p class="py-bottom"> Transaction Result: '.concat(t,'</p>\n      <p class="py-bottom"> Message: ').concat(r,'</p>\n      <button class="go-back" onClick="window.location.reload();">Go Back</button>\n    ');else a.innerHTML='\n    <p class="py-bottom"> Transaction Result: '.concat(t,'</p>\n    <p class="py-bottom"> Message: ').concat(r,'</p>\n    <button class="go-back" onClick="window.location.reload();">Go Back</button>\n  ')}(e)}))}})();