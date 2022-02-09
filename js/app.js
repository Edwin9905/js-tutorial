const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");
const loginForm = document.querySelector("#login-form");
const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";

function paintgreeting(username) {
    loginForm.classList.add(HIDDEN_CLASSNAME);
    greeting.classList.remove(HIDDEN_CLASSNAME);
    greeting.innerText = `Hello ${username}`;
}

function onLoginBtnClick(event) {
    event.preventDefault();
    loginForm.classList.add(HIDDEN_CLASSNAME);
    const username = loginInput.value;
    localStorage.setItem(USERNAME_KEY, username);
    paintgreeting(username);
}

const savedUsername = localStorage.getItem(USERNAME_KEY);

if (savedUsername === null) {
    //show the form
    loginForm.classList.remove(HIDDEN_CLASSNAME);
    loginForm.addEventListener("submit", onLoginBtnClick);
    console.log(username);
} else {
    //show the h1
    //localStorage.removeItem(USERNAME_KEY);
    paintgreeting(username);

}