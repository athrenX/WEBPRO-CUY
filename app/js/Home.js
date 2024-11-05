document.addEventListener("DOMContentLoaded", function() {
    const isLoggedIn = localStorage.getItem("isLoggedIn");
    const username = localStorage.getItem("fullname");
  
    if (isLoggedIn === "true" && username) {
      const userGreeting = document.getElementById("userGreeting");
      if (userGreeting) {
        userGreeting.textContent = `Hi, ${username}`;
      }
    }
  });
  