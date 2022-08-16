function getInputFieldValueById(inputFieldId) {

    const inputField = document.getElementById(inputFieldId);
    const inputFieldValueString = inputField.value;
    const inputFieldValue = parseFloat(inputFieldValueString);
    inputField.value = ' ';
    return inputFieldValue;
}

function getTextElementValueById(elementId) {
    const element = document.getElementById(elementId);
    const elementValueString = element.innerText;
    const elementValue = parseFloat(elementValueString);
    return elementValue;

}

function setTextElementValueById(element, newValue) {
    const textElement = document.getElementById(element);
    textElement.innerText = newValue;
}

document.getElementById('btn-deposit').addEventListener('click', function () {



    const newDepositAmount = getInputFieldValueById("input-deposit");
    const previousDepositTotal = getTextElementValueById("total-deposit");

    const newDepositTotal = newDepositAmount + previousDepositTotal;

    setTextElementValueById("total-deposit", newDepositTotal);

    const previousBalanceTotal = getTextElementValueById('total-balance');
    const newBalanceTotal = previousBalanceTotal + newDepositAmount;
    setTextElementValueById('total-balance', newBalanceTotal);
}) 