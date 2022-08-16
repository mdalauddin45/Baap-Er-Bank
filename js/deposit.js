




document.getElementById('btn-deposit').addEventListener('click', function () {


    const depositField = document.getElementById('input-deposit');
    const newDepositAmountString = depositField.value;
    const depositInputAmount = parseFloat(newDepositAmountString);

    depositField.value = ``;

    const previousDeposit = document.getElementById('total-deposit');
    const previousDepositString = previousDeposit.innerText;
    const totalPreviousDeposit = parseFloat(previousDepositString);

    const totalDeposit = depositInputAmount + totalPreviousDeposit;
    previousDeposit.innerText = totalDeposit;



    // Balance field 

    const myPreviousTotalBalance = document.getElementById('total-balance');
    const myPreviousTotalBalanceString = myPreviousTotalBalance.innerText;
    const previousBalance = parseFloat(myPreviousTotalBalanceString);

    const newBalance = depositInputAmount + previousBalance;
    myPreviousTotalBalance.innerText = newBalance;
})

