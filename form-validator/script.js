//get element
const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const passwrod2 = document.getElementById('password2');

//show input error input
const showError = (input, message) => {
    const formControl = input.parentElement;
    formControl.className = 'form-control error';
    const small = formControl.querySelector('small');
    small.innerText = message;
}

//show success
const showSuccess = (input) => {
    const formControl = input.parentElement;
    formControl.className = 'form-control success';
}

//check email if it is valid
const isValidEmail = (email) => {
    const result = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
    //这是一个邮箱的regular expression
    return result.test(String(email));
}

//event listening
form.addEventListener('submit', (e) => {
    e.preventDefault(); //注册表单，会默认表单事件，console.log 转瞬即逝，所以调用此函数
    // console.log(username.value);

    // (username.value === '') ? showError(username, 'username must be filled') : showSuccess(username);
    // (email.value === '') ? showError(email, 'email must be filled') : showSuccess(email);
    // (password.value === '') ? showError(password, 'password must be filled') : showSuccess(password);
    // (passwrod2.value === '') ? showError(passwrod2, 'confirmed password must be filled') : showSuccess(passwrod2);

    if (username.value === '') {
        showError(username, 'username must be filled');
    } else {
        showSuccess(username);
    }

    if (email.value === '') {
        showError(email, 'Email must be filled');
    } else if (!isValidEmail(email.value)) {
        showError(email, 'Email format is incorrect')
    } else {
        showSuccess(email);
    }

    if (password.value === '') {
        showError(password, 'password must be filled');
    } else {
        showSuccess(password);
    }

    if (passwrod2.value === '') {
        showError(passwrod2, 'confirmed password must be filled');
    } else {
        showSuccess(passwrod2);
    }
});