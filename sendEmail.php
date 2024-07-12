<?php
if ($_SERVER["REQUEST_METHOD"] === "POST") {
    $name = $_POST['name'];
    $phone = $_POST['phone'];
    $email = $_POST['email'];
    $subject = $_POST['subject'];
    $message = $_POST['message'];

    // Construct the email message
    $to = "sankarsanker999@gmail.com"; // Replace with your email
    $messageBody = "Name: $name\nPhone: $phone\nEmail: $email\nSubject: $subject\nMessage: $message";
    $headers = "From: tekzow@gmail.com"; // Replace with sender email



    if (mail($to, $subject, $messageBody, $headers)) {
        echo "Email sent successfully!";
    } else {
        echo "Failed to send email.";
    }
} else {
    echo "Method not allowed.";
}
?>
