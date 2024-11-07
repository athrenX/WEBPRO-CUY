document.addEventListener("DOMContentLoaded", function() {
  const loginForm = document.getElementById("loginForm");
  const feedback = document.getElementById("feedback");

  if (loginForm) { // Pastikan form ada di DOM
    loginForm.addEventListener("submit", function(event) {
      event.preventDefault();

      // Ambil nilai email dan password
      const email = document.getElementById("email").value.trim();
      const password = document.getElementById("password").value.trim();

      // Ambil data pengguna dari localStorage
      const storedUserData = JSON.parse(localStorage.getItem("user"));

      // Validasi input kosong
      if (!email || !password) {
        feedback.innerHTML = `<div class="alert alert-danger">Please fill in all fields.</div>`;
        return;
      }

      // Cek kecocokan data login
      if (storedUserData && storedUserData.email === email && storedUserData.password === password) {
        // Simpan status login, nama, dan email
        localStorage.setItem("isLoggedIn", "true");
        localStorage.setItem("username", storedUserData.fullname);
        localStorage.setItem("email", storedUserData.email);

        // Tampilkan pesan sukses dan redirect
        feedback.innerHTML = `<div class="alert alert-success">Login successful! Redirecting...</div>`;
        setTimeout(() => {
          window.location.href = "Home.html";
        }, 2000);
      } else {
        feedback.innerHTML = `<div class="alert alert-danger">Invalid email or password.</div>`;
      }
    });
  }
});
