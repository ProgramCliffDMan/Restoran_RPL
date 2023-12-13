// script.js
function redirectToReservationPage() {
    // Mengarahkan ke halaman reservation-page.html
    window.location.href = "reservation-page.html";
}
document.addEventListener('DOMContentLoaded', function () {
    // Mendapatkan elemen-elemen tombol
    var signUpButton = document.querySelector('.signup button');
    var loginButton = document.querySelector('.login button');

    // Menambahkan event listener untuk tombol "Sign Up"
    signUpButton.addEventListener('click', function (event) {
        event.preventDefault(); // Mencegah formulir dikirim (jika formulir ada)

        // Lakukan logika signup di sini sesuai kebutuhan

        // Pindah ke halaman reservation-page.html
        redirectToReservationPage();
    });

    // Menambahkan event listener untuk tombol "Login"
    loginButton.addEventListener('click', function (event) {
        event.preventDefault(); // Mencegah formulir dikirim (jika formulir ada)

        // Lakukan logika login di sini sesuai kebutuhan

        // Pindah ke halaman reservation-page.html
        redirectToReservationPage();
    });
});

function proceedToNextPage() {
    // Ambil nilai yang diperlukan dari formulir
    var selectedDay = document.querySelector('select[name="days"]').value;
    var selectedHour = document.querySelector('select[name="hours"]').value;
    var fullName = document.querySelector('input[placeholder="Full Name"]').value;
    var phoneNumber = document.querySelector('input[placeholder="Phone Number"]').value;
    var numberOfPersons = document.querySelector('input[placeholder="How Many Persons?"]').value;

    // Contoh validasi sederhana, pastikan semua nilai terisi
    if (!selectedDay || !selectedHour || !fullName || !phoneNumber || !numberOfPersons) {
        alert('Please fill in all fields before proceeding.');
        return;
    }

    // Simpan data ke sesi lokal atau cookie jika diperlukan
    // ...

    // Arahkan pengguna ke halaman pemilihan meja
    window.location.href = 'select-table-2.html';
}

