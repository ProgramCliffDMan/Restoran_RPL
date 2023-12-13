function proceedToNextPage() {
    // Assume you have variables storing reservation details
    var selectedDay = document.querySelector('select[name="days"]').value;
    var selectedHour = document.querySelector('select[name="hours"]').value;
    var fullName = document.querySelector('input[placeholder="Full Name"]').value;
    var phoneNumber = document.querySelector('input[placeholder="Phone Number"]').value;
    var numberOfPersons = document.querySelector('input[placeholder="How Many Persons?"]').value;

    // Perform any necessary calculations or validations here

    // Create a summary object with the reservation details
    var summaryData = {
        selectedDay: selectedDay,
        selectedHour: selectedHour,
        fullName: fullName,
        phoneNumber: phoneNumber,
        numberOfPersons: numberOfPersons,
        // Add other details as needed
    };

    // Save the summaryData to local storage or a cookie if needed
    // ...

    // Redirect to the summary page
    window.location.href = 'summary-page.html';
}
