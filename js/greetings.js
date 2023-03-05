const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");

function onLoginSubmit(event) {
  event.preventDefault();
  localStorage.setItem("username", loginInput.value);
  loginForm.classList.add("hidden");
  displayGreeting(loginInput.value);
}

function displayGreeting(username) {
  greeting.innerHTML = `Hello ${username}`;
  greeting.classList.remove("hidden");
}

const username = localStorage.getItem("username");

if (username) {
  displayGreeting(username);
}
else {
  loginForm.classList.remove("hidden");
  loginForm.addEventListener("submit", onLoginSubmit);
}
