import throttle from "lodash.throttle";

const form = document.querySelector('.feedback-form');
const emailInput = form.querySelector('input[name="email"]');
const messageInput = form.querySelector('textarea[name="message"]');

const savedInput = JSON.parse(localStorage.getItem('feedback-form-state')) || {};
emailInput.value = savedInput.email || '';
messageInput.value = savedInput.message || '';

const saveInputForm = throttle(() => {
    const currentInput = {
        email: emailInput.value,
        message: messageInput.value,
    };
    localStorage.setItem('feedback-form-state', JSON.stringify(currentInput));
}, 500);

form.addEventListener('input', saveInputForm);

form.addEventListener('submit', function(event) {
    event.preventDefault();

    localStorage.removeItem('feedback-form-state');
    emailInput.value = '';
    messageInput.value = '';

    const formData = {
        email: emailInput.value,
        message: messageInput.value,
    };
    console.log(formData);
});
