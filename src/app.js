// Make Card Type Display based on card number
button = document.querySelector('.submit');
button.addEventListener('click', (e) => {
  runTrans(transData);
})

const runTrans = (transData) => {
  fetch('https://apitest.authorize.net/xml/v1/request.api', {
    method: 'POST',
    body: JSON.stringify(transData)
  })
}