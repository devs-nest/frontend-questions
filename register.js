var email = document.getElementById("email");
var password = document.getElementById("password");
var form = document.getElementById("login-form");
var button = document.getElementById("registerbtn");

const register = async (e) => {
  e.preventDefault();
  console.log("REGISTER INVOKED");
  const data = await fetch(
    "https://login-signup-production.up.railway.app/register",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: email.value,
        password: password.value,
        name: name.value,
      }),
    }
  );
  const json = await data.json();
  console.log(json);
  if (json.success) {
    window.location.href = "./dashboard.html";
    console.log(window.location.href);
  }
};

console.log(button);
button.addEventListener("click", register);
// form.onsubmit(login);
