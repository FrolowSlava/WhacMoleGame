﻿var registrationForm = document.getElementById('RegistrationForm');

registrationForm.addEventListener('submit', function (event) {
    event.preventDefault();

    var formData = {
        Login: document.getElementById('Login').value,
        Password: document.getElementById('Password').value,
        RepeatPassword: document.getElementById('RepeatPassword').value,
        Email: document.getElementById('Email').value,
        PhoneNumber: document.getElementById('PhoneNumber').value
    };

    fetch('/Account/Registration', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
    }).then(response => response.json())
        .then(data => {
            if (data.isSuccess) {
                window.location.href = '/Account/Index';
            }
            else {
                Toastify({
                    text: data.textError,
                    duration: 3000
                }).showToast();
            }
        }).catch(error => console.log('Error: ' + error.message));
});