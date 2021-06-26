const numberInput = document.getElementById('number');
const btn = document.getElementById('btn');

const randomNumber = Math.floor((Math.random() * 6)) + 1;
btn.addEventListener('click', function (e) {

    const userVal = parseInt(numberInput.value, 10);
    if (userVal == randomNumber) {
        Swal.fire({
            title: 'Awesome!',
            text: 'you are Right !!!',
            icon: 'success',
            confirmButtonText: 'Cool'
        })
        return;
    }
    console.log(userVal, randomNumber);
    if (userVal > randomNumber) {
        Swal.fire({
            title: 'Error!',
            text: 'smaller!!!',
            icon: 'error',
            confirmButtonText: 'Cool'
        })
        return;
    }
    if (userVal < randomNumber) {
        Swal.fire({
            title: 'Error!',
            text: 'bigger!!!',
            icon: 'error',
            confirmButtonText: 'Cool'
        })
        return;
    }
});

