document.addEventListener("DOMContentLoaded", function() {
  const loginForm = document.getElementById("loginForm");
  const feedback = document.getElementById("feedback");

  if (loginForm) { 
    loginForm.addEventListener("submit", function(event) {
      event.preventDefault();

 
      const email = document.getElementById("email").value.trim();
      const password = document.getElementById("password").value.trim();

      const storedUserData = JSON.parse(localStorage.getItem("user"));

      if (!email || !password) {
        feedback.innerHTML = `<div class="alert alert-danger">Please fill in all fields.</div>`;
        return;
      }


      if (storedUserData && storedUserData.email === email && storedUserData.password === password) {
     
        localStorage.setItem("isLoggedIn", "true");
        localStorage.setItem("username", storedUserData.fullname);
        localStorage.setItem("email", storedUserData.email);

        feedback.innerHTML = `<div class="alert alert-success">Login Berhasil! Menuju halaman Utama...</div>`;
        setTimeout(() => {
          window.location.href = "Home.html";
        }, 2000);
      } else {
        feedback.innerHTML = `<div class="alert alert-danger">Invalid email or password.</div>`;
      }
    });
  }
});
