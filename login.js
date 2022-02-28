var email = document.getElementById("email");
var password = document.getElementById("password");
var form = document.getElementById("login-form");
var button = document.getElementById("loginbtn");

const login = async (e) => {
  e.preventDefault();
  console.log("LONGIN INVOKED");
  const data = await fetch(
    "https://login-signup-production.up.railway.app/login",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: email.value,
        password: password.value,
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
button.addEventListener("click", login);
// form.onsubmit(login);
