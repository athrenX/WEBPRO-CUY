document.addEventListener("DOMContentLoaded", function() {
    const signupForm = document.getElementById("signupForm");
    const feedback = document.getElementById("feedback");
  
    signupForm.addEventListener("submit", function(event) {
      event.preventDefault();
  
      // Ambil nilai dari input
      const fullname = document.getElementById("fullname").value.trim();
      const email = document.getElementById("email").value.trim();
      const password = document.getElementById("password").value.trim();
      const confirmPassword = document.getElementById("confirmPassword").value.trim();
  
      // Validasi sederhana
      if (fullname === "" || email === "" || password === "" || confirmPassword === "") {
        feedback.innerHTML = `<div class="alert alert-danger">Please fill in all fields.</div>`;
        return;
      }
  
      if (password !== confirmPassword) {
        feedback.innerHTML = `<div class="alert alert-danger">Passwords do not match.</div>`;
        return;
      }
  
      // Simpan data ke localStorage
      const userData = {
        fullname: fullname,
        email: email,
        password: password
      };
  
      localStorage.setItem("user", JSON.stringify(userData));
  
      // Feedback sukses dan redirect ke login
      feedback.innerHTML = `<div class="alert alert-success">Sign up Berhasil!, menuju ke halaman Login...</div>`;
      setTimeout(() => {
        window.location.href = "login.html";
      }, 2000);
    });
  });
  