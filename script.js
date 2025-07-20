function login() {
  const username = document.getElementById('username').value;
  const password = document.getElementById('password').value;
  const errorMsg = document.getElementById('error-msg');

  if (username === "admin" && password === "resellergamingxfreya") {
    window.location.href = "admin.html";
  } else if (username === "Buyer" && password === "resellergaming") {
    window.location.href = "user.html";
  } else {
    errorMsg.innerText = "Username atau Password salah!";
  }
}
