const signUpButton=document.getElementById('signUpButton');
const signInButton=document.getElementById('signInButton');
const signInForm=document.getElementById('signIn');
const signUpForm=document.getElementById('signup');

signUpButton.addEventListener('click',function(){
    signInForm.style.display="none";
    signUpForm.style.display="block";
})
signInButton.addEventListener('click', function(){
    signInForm.style.display="block";
    signUpForm.style.display="none";
})

const phoneInput = document.getElementById('phone');
const phoneError = document.getElementById('phone-error');

phoneInput.addEventListener('input', () => {
    if (!phoneInput.value.match(/^[0-9]{10}$/)) {
        phoneError.textContent = 'Enter a valid 10-digit mobile number';
    } else {
        phoneError.textContent = '';
    }
});

const nameInput = document.getElementById('name');
const emailInput = document.getElementById('rEmail');
const passwordInput = document.getElementById('rPassword');

const nameError = document.getElementById('name-error');
const emailError = document.getElementById('email-error');
const passwordError = document.getElementById('password-error');

nameInput.addEventListener('input', () => {
    if (!nameInput.value.match(/^[a-zA-Z]+ ?[a-zA-Z]*$/)) {
        nameError.textContent = 'Please enter a valid name (letters only)';
    } else {
        nameError.textContent = '';
    }
});

emailInput.addEventListener('input', () => {
    if (!emailInput.value.match(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/)) {
        emailError.textContent = 'Please enter a valid email address';
    } else {
        emailError.textContent = '';
    }
});

passwordInput.addEventListener('input', () => {
    if (!passwordInput.value.match(/.{6,}/)) {
        passwordError.textContent = 'Please enter a password with at least 6 characters';
    } else {
        passwordError.textContent = '';
    }
});