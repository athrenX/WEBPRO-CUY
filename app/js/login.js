document.addEventListener("DOMContentLoaded", function() {
  const loginForm = document.getElementById("loginForm");
  const feedback = document.getElementById("feedback");

  loginForm.addEventListener("submit", function(event) {
    event.preventDefault();

    // Ambil nilai email dan password dari input
    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value.trim();

    // Ambil data pengguna dari localStorage
    const storedUserData = JSON.parse(localStorage.getItem("user"));

    // Validasi input
    if (email === "" || password === "") {
      feedback.innerHTML = `<div class="alert alert-danger">Please fill in all fields.</div>`;
      return;
    }

    // Cek data login dengan data di localStorage
    if (storedUserData && storedUserData.email === email && storedUserData.password === password) {
      // Simpan status login dan nama pengguna
      localStorage.setItem("isLoggedIn", "true");
      localStorage.setItem("username", storedUserData.fullname);

      feedback.innerHTML = `<div class="alert alert-success">Login successful! Redirecting...</div>`;
      setTimeout(() => {
        window.location.href = "Home.html"; // Redirect ke halaman utama
      }, 2000);
    } else {
      feedback.innerHTML = `<div class="alert alert-danger">Invalid email or password.</div>`;
    }
  });
});
