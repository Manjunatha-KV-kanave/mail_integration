function closePopup() {
    document.getElementById('submitPopup').style.display = 'none';
}

function closeSuccessPopup() {
    document.getElementById('successPopup').style.display = 'none';
}

document.getElementById('submitForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission

    // Validate form fields before showing the confirmation popup
    if (validateForm()) {
        document.getElementById('submitPopup').style.display = 'flex'; // Show the confirmation popup
    }
});

function validateForm() {
    const name = document.getElementById('contact-name').value.trim();
    const phone = document.getElementById('contact-phone').value.trim();
    const email = document.getElementById('contact-email').value.trim();
    const subject = document.getElementById('subject').value.trim();
    const message = document.getElementById('contact-message').value.trim();

    if (name === '' || phone === '' || email === '' || subject === '' || message === '') {
        alert('Please fill out all fields.');
        return false;
    }

    // Validation for phone number
    if (!(/^\d{10,12}$/.test(phone))) {
        alert('Please enter a valid phone number.');
        return false;
    }

    // Validation for email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        alert('Please enter a valid email address.');
        return false;
    }

    return true; // Form is valid
}

function sendConfirmedEmail() {
    document.getElementById('submitPopup').style.display = 'none'; // Hide the confirmation popup

    const formData = new FormData(document.getElementById('submitForm'));

    fetch('sendEmail.php', {
        method: 'POST',
        body: formData
    })
    .then(response => {
        if (response.ok) {
            return response.text();
        }
        throw new Error('Email not sent');
    })
    .then(data => {
        document.getElementById('submitForm').reset(); // Reset the form after successful submission
        document.getElementById('successPopup').style.display = 'flex'; // Show success popup
        setTimeout(closeSuccessPopup, 3000); // Automatically close the success popup after 3 seconds
    })
    .catch(error => {
        alert('Error: ' + error.message);
    });
}
