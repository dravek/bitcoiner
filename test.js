const bitcoiner = require('./bitcoiner.js');

bitcoiner.getvalue((errorMessage, results) => {
  if (errorMessage) {
    console.log(errorMessage);
  } else {
    console.log(results.value);
  }
});
