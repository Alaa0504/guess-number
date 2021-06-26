const numberInput = document.getElementById('number');
const btn = document.getElementById('btn');

const randomNumber = Math.floor((Math.random() * 6)) + 1;
btn.addEventListener('click', function (e) {

    const userVal = parseInt(numberInput.value, 10);
    if (userVal == randomNumber) {
        alert('You are right!!!');
        return;
    }
    console.log(userVal, randomNumber);
    if (userVal > randomNumber) {
        alert('smaller');
        return;
    }
    if (userVal < randomNumber) {
        alert('bigger');
        return;
    }
});