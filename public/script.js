document.addEventListener("DOMContentLoaded", function () {
  const form = document.querySelector(".signup-form");

  form.addEventListener("submit", async function (event) {
    event.preventDefault();

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    const data = {
      name: name,
      email: email,
      password: password,
    };

    const response = await fetch("/user/sigup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("Success:", data.user);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  });
});
