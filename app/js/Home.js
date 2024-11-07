// Fungsi utama untuk cek status login dan mengupdate tombol login/logout
document.addEventListener("DOMContentLoaded", function () {
  const authText = document.getElementById("authText");
  const authIcon = document.querySelector("#authButton i");
  const authButton = document.getElementById("authButton");
  let isLoggedIn = localStorage.getItem("isLoggedIn") === "true";

  // Update tampilan tombol login/logout berdasarkan status login
  function updateAuthButton() {
    if (isLoggedIn) {
      authText.textContent = "Logout";
      authIcon.classList.replace("fa-user", "fa-right-from-bracket");
    } else {
      authText.textContent = "Login";
      authIcon.classList.replace("fa-right-from-bracket", "fa-user");
    }
  }

  // Fungsi toggle login/logout
  function toggleLogin() {
    if (isLoggedIn) {
      // Logout dan kembali ke halaman login
      localStorage.removeItem("isLoggedIn");
      localStorage.removeItem("username");
      localStorage.removeItem("email");
      window.location.href = "login.html";
    } else {
      // Arahkan ke halaman login jika belum login
      window.location.href = "login.html";
    }
  }

  // Hubungkan toggleLogin ke tombol authButton
  authButton.onclick = toggleLogin;

  // Perbarui tampilan tombol authButton pertama kali
  updateAuthButton();
});

// Fungsi untuk mensimulasikan login (digunakan saat login berhasil)
function loginUser(username, email) {
  localStorage.setItem("isLoggedIn", "true");
  localStorage.setItem("username", username);
  localStorage.setItem("email", email);

  // Perbarui tampilan navbar setelah login
  $("#loginButton").hide();
  $("#profileNavItem").show();
}

// Inisialisasi jQuery saat dokumen siap
$(document).ready(function () {
  const isLoggedIn = localStorage.getItem("isLoggedIn") === "true";
  const username = localStorage.getItem("username") || "Guest";
  const email = localStorage.getItem("email") || "No email available";

  // Cek status login dan perbarui tampilan navbar
  if (isLoggedIn) {
    $("#loginButton").hide();
    $("#profileNavItem").show();
    $("#profileName").text(username);
    $("#profileEmail").text(email);
  } else {
    $("#loginButton").show();
    $("#profileNavItem").hide();
  }

  // Buka sidebar profil saat tombol profil diklik
  $("#profileButton").click(function (e) {
    e.preventDefault();
    $("#profileSidebar").addClass("open");
  });

  // Tutup sidebar profil saat tombol tutup diklik
  $("#closeProfileSidebar").click(function () {
    $("#profileSidebar").removeClass("open");
  });

  // Aksi logout
  $("#logoutButton").click(function () {
    localStorage.setItem("isLoggedIn", "false");
    localStorage.removeItem("username");
    localStorage.removeItem("email");
    $("#profileSidebar").removeClass("open");
    $("#loginButton").show();
    $("#profileNavItem").hide();
  });

  // Ubah gambar profil
  $("#uploadImage").change(function (event) {
    const reader = new FileReader();

    reader.onload = function () {
      $("#profileImage").attr("src", reader.result);
    };

    if (event.target.files[0]) {
      reader.readAsDataURL(event.target.files[0]); // Baca file sebagai URL
    }
  });
});

