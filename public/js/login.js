document.addEventListener("DOMContentLoaded", function () {
    const form = document.querySelector(".login-form");
  
    form.addEventListener("submit", async function (event) {
      event.preventDefault();
  
      const email = document.getElementById("email").value;
      const password = document.getElementById("password").value;
  
      const url = `/user/login?email=${email}&password=${password}`;
  
      const response = await fetch(url, {
        method: "GET",
      })
        .then((response) => response.json())
        .then((data) => {
          if (data.message == "success") {
            swal.fire({
              title: "Login Successful!",
              icon: "success",
              timer: 2000,
              buttons: false,
            });
          } else if (data.error == "InvalidCredentialsError") {
            swal.fire({
              title: "Invalid Credentials",
              icon: "error",
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
  