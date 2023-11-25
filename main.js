function proceedToNextPage() {
    // Hide the reservation section
    document.querySelector('.banner').style.display = 'none';

    // Show the next page section
    document.querySelector('.next-page').style.display = 'flex';
}

document.getElementById('detailsForm').addEventListener('submit', function(event) {
    event.preventDefault();

    // Here you can handle the form submission, e.g., send data to the server
    // For simplicity, we'll just show a console log
    console.log('Details form submitted successfully!');
});

document.getElementById('reservationForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission

    // Get values from form
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    // Perform validation and authentication as needed
    // For simplicity, let's assume the validation is successful and move to the next page

    // Hide the current page
    document.querySelector('.banner').style.display = 'none';

    // Show the summary page
    document.getElementById('summaryPage').style.display = 'flex';

    // Update the summary content (you can dynamically generate this based on reservation details)
    const summaryContent = `
        <p>Email: ${email}</p>
        <p>Password: ${password}</p>
        <!-- Add more reservation details here -->
    `;
    document.getElementById('summaryContent').innerHTML = summaryContent;
});

document.getElementById('editReservation').addEventListener('click', function() {
    // Show the reservation form again
    document.querySelector('.banner').style.display = 'flex';

    // Hide the summary page
    document.getElementById('summaryPage').style.display = 'none';
});

document.getElementById('confirmReservation').addEventListener('click', function() {
    // Perform any actions needed to confirm the reservation
    console.log('Reservation confirmed!'); // You can replace this with your confirmation logic
});

document.getElementById('detailsForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent default form submission

    // Here you can handle the form submission, e.g., send data to the server
    // For simplicity, we'll just call proceedToNextPage
    proceedToNextPage();
});
