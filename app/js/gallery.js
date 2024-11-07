document.addEventListener("DOMContentLoaded", function () {
    // Check login status from Local Storage
    let isLoggedIn = localStorage.getItem("isLoggedIn") === "true";
  
    // Update button based on login status
    updateAuthButton();
  
    // Toggle login/logout function
    function toggleLogin() {
      if (isLoggedIn) {
        // Jika sudah login, klik akan melakukan logout dan kembali ke halaman login
        localStorage.removeItem("isLoggedIn");
        window.location.href = "login.html";
      } else {
        // Jika belum login, klik akan mengarahkan ke halaman login
        window.location.href = "login.html";
      }
    }
  
    // Update the auth button text and icon
    function updateAuthButton() {
      const authText = document.getElementById("authText");
      const authIcon = document.querySelector("#authButton i");
  
      if (isLoggedIn) {
        authText.textContent = "Logout";
        authIcon.classList.replace("fa-user", "fa-right-from-bracket");
      } else {
        authText.textContent = "Login";
        authIcon.classList.replace("fa-right-from-bracket", "fa-user");
      }
    }
  
    // Attach toggleLogin function to the button click event
    document.getElementById("authButton").onclick = toggleLogin;
  });