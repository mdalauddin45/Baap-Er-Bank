document.getElementById('btn-withdraw').addEventListener('click', function () {
    const newWithdrawAmount = getInputFieldValueById('input-withdraw');
    const previousWithdrawTotal = getTextElementValueById("total-withdraw")

    const newWithdrawTotal = previousWithdrawTotal + newWithdrawAmount;
    setTextElementValueById("total-withdraw", newWithdrawTotal);

    const previousBalanceTotal = getTextElementValueById('total-balance');
    const newBalanceTotal = previousBalanceTotal - newWithdrawAmount;
    setTextElementValueById('total-balance', newBalanceTotal);
})