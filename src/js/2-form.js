const STORAGE_KEY = "feedback-form-state";
const form = document.querySelector(".feedback-form");
const textarea = form.querySelector("textarea");
const button = form.querySelector("button");


textarea.addEventListener("input", onTextareaInput);
form.addEventListener("submit", handleSubmit);

populateTextarea();


function handleSubmit(event) {
    event.preventDefault();

    console.log("send");
    event.currentTarget.reset();
    localStorage.removeItem(STORAGE_KEY);
}

function onTextareaInput(event) {
    const message = event.target.value;
    localStorage.setItem(STORAGE_KEY, message);
}

function populateTextarea() {
    const savedMessage = localStorage.getItem(STORAGE_KEY);

    if(savedMessage) {
        textarea.value = savedMessage;
    }
}


console.log("Form"); 