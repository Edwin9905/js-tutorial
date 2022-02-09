const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");
const loginForm = document.querySelector("#login-form");


function onLoginBtnClick(event) {
    event.preventDefault();
    loginForm.classList.add("hidden");
    const username = loginInput.value;
    greeting.innerText = `Hello ${username}`;
    greeting.classList.remove("hidden");
    
}
loginForm.addEventListener("submit",onLoginBtnClick);