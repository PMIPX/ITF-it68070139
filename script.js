// log textarea
function logMessage(msg) {
  const log = document.getElementById("output_log");
  const time = new Date().toLocaleTimeString();
  log.value = `[${time}] ${msg}\n` + log.value;
}


function setBalance() {
  let account = parseFloat(document.getElementById("account_balance").value) || 0;
  let cash = parseFloat(document.getElementById("cash_balance").value) || 0;
  logMessage(`Balances updated: Account=${account}, Cash=${cash}`);
}

// Bank Operation
function doOperation() {
  let type = document.getElementById("operation_type").value;
  let amount = parseFloat(document.getElementById("operation_amount").value);

  if (!amount || amount <= 0) {
    logMessage("Invalid amount entered.");
    return;
  }

  let accountInput = document.getElementById("account_balance");
  let cashInput = document.getElementById("cash_balance");

  let accountBalance = parseFloat(accountInput.value) || 0;
  let cashBalance = parseFloat(cashInput.value) || 0;

  if (type === "Deposit") {
    if (amount > cashBalance) {
      logMessage(`Deposit failed: (Insufficient account balance) (Cash=${cashBalance}, Requested=${amount})`);
      return;
    }
    accountBalance += amount;
    cashBalance -= amount;
    logMessage(`Deposit ${amount} success → Account=${accountBalance}, Cash=${cashBalance}`);
  } 
  else if (type === "Withdraw") {
    if (amount > accountBalance) {
      logMessage(`Withdraw failed: (Insufficient account balance) (Account=${accountBalance}, Requested=${amount})`);
      return;
    }
    accountBalance -= amount;
    cashBalance += amount;
    logMessage(`Withdraw ${amount} success → Account=${accountBalance}, Cash=${cashBalance}`);
  }

  accountInput.value = accountBalance;
  cashInput.value = cashBalance;
}
