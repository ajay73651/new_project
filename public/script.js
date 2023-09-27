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
        if (data.message == "success") {
          swal.fire({
            title: "User Created Successfully!",
            icon: "success",
            timer: 2000,
            buttons: false,
          });
        } else if (data.error == "SequelizeUniqueConstraintError") {
          swal.fire({
            title: "User Already Exists",
            icon: "info",
            timer: 2000,
            buttons: false,
          });
        }
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  });
});
