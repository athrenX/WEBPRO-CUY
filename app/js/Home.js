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


// fungsi untuk notifikasi pada bell dropdown di Home.html
$(document).ready(function() {
  // Cek status pembayaran saat halaman dimuat
  const paymentSuccess = localStorage.getItem('paymentSuccess');

  // Cek apakah ada notifikasi yang belum dibaca
  const hasNotification = localStorage.getItem('hasNotification');

  if (hasNotification === 'true') {
      // Tampilkan badge jika ada notifikasi
      $('#notification-badge').show();
      $('#notification-badge').text('1'); // Set jumlah notifikasi
      // Tampilkan dropdown
      $('#notification-dropdown').show();
      // Hapus status notifikasi setelah ditampilkan
      localStorage.removeItem('hasNotification');
  }

  // Nonaktifkan link jika pembayaran belum berhasil
  if (paymentSuccess !== 'true') {
      $('#cetak-tiket-link').css('pointer-events', 'none').css('color', 'gray'); // Menonaktifkan klik dan mengubah warna
  }  

  // Reset status pembayaran saat halaman dimuat
  localStorage.removeItem('paymentSuccess');
});
