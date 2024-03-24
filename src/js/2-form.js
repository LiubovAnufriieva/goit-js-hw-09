const STORAGE_KEY = "feedback-form-state";
const form = document.querySelector(".feedback-form");
const { email, message } = form.elements;
const localData = localStorage.getItem(STORAGE_KEY);

form.addEventListener("input", onInput);
form.addEventListener("submit", onSubmit);

checkLocalData();

function checkLocalData() {
    if (localData) {
        email.value = JSON.parse(localData).email;
        message.value = JSON.parse(localData).message;
    }
    else {
        email.value = "";
        message.value = "";
    }
};

function onInput(event) {
    const message = event.target.value;
    localStorage.setItem(STORAGE_KEY, message);
}

// function onInput() {
//     const formData = {
//         email: email.value.trim(),
//         message: message.value.trim()
//     }
//     localStorage.setItem(STORAGE_KEY, JSON.stringify(formData))
// };

function onSubmit(event) {
    event.preventDefault();
    if(!email.value) {
        alert("You forget to add your email!")
        return
    }
    if(!message.value) {
        alert("You forget to add your message!")
        return
    } else {
        console.log(localStorage.getItem(STORAGE_KEY));
        localStorage.removeItem(STORAGE_KEY);
        evt.target.reset()
    }};




