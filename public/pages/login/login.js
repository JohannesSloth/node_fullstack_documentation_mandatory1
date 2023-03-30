const loginForm = document.getElementById("loginForm");
loginForm.addEventListener("submit", async (event) => {
  event.preventDefault();
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  const response = await fetch("/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      email,
      password,
    }),
  });

  if (response.ok) {
    window.location.href = "/admin";
  } else {
    const errorMessage = await response.text();
    alert(errorMessage);
  }
});
