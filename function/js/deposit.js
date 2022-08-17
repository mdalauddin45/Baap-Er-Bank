document.getElementById('btn-deposit').addEventListener('click', function () {

    const newDepositAmount = getInputFieldValueById("input-deposit");
    const previousDepositTotal = getTextElementValueById("total-deposit");

    const newDepositTotal = newDepositAmount + previousDepositTotal;

    setTextElementValueById("total-deposit", newDepositTotal);

    const previousBalanceTotal = getTextElementValueById('total-balance');
    const newBalanceTotal = previousBalanceTotal + newDepositAmount;
    setTextElementValueById('total-balance', newBalanceTotal);
}) 