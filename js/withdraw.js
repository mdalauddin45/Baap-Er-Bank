
document.getElementById('btn-withdraw').addEventListener('click', function () {
    const withdrawField = document.getElementById('input-withdraw');
    const newWithdrawAmountString = withdrawField.value;
    const withdrawInputAmount = parseFloat(newWithdrawAmountString);

    withdrawField.value = ``;

    const priviousWithdrawElement = document.getElementById('total-withdraw');
    const previousWithdrawString = priviousWithdrawElement.innerText;
    const previousWithdraw = parseFloat(previousWithdrawString);


    const totalWithdraw = previousWithdraw + withdrawInputAmount;
    priviousWithdrawElement.innerText = totalWithdraw;


    // Balance field 

    const myPreviousTotalBalance = document.getElementById('total-balance');
    const myPreviousTotalBalanceString = myPreviousTotalBalance.innerText;
    const previousBalance = parseFloat(myPreviousTotalBalanceString);


    const newBalanceTotal = previousBalance - totalWithdraw
    myPreviousTotalBalance.innerText = newBalanceTotal;



})