(()=>{var e=document.querySelector(".submit"),t=document.querySelector("#amount"),n=document.querySelector("#authKey"),a=document.querySelector("#transKey");e.addEventListener("click",(function(e){console.log(t.value),o()}));var o=function(){var e={createTransactionRequest:{merchantAuthentication:{name:n.value,transactionKey:a.value},refId:"123456",transactionRequest:{transactionType:"authCaptureTransaction",amount:t.value,payment:{creditCard:{cardNumber:"5424000000000015",expirationDate:"2025-12",cardCode:"999"}},billTo:{firstName:"Ellen",lastName:"Johnson",company:"Souveniropolis",address:"14 Main Street",city:"Pecan Springs",state:"TX",zip:"44628",country:"US"}}}};console.log(e),fetch("https://apitest.authorize.net/xml/v1/request.api",{method:"POST",body:JSON.stringify(e)}).then((function(e){return e.json()})).then((function(e){return console.log(e)}))}})();