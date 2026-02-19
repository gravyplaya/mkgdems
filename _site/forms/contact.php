<?php
/**
 * Contact Form Handler using Resend.com API
 * 
 * This script handles contact form submissions and sends emails via Resend.com
 * Configure your Resend API key and receiving email address below
 */

// Configuration
$resend_api_key = 'YOUR_RESEND_API_KEY_HERE'; // Replace with your Resend API key
$receiving_email = 'contact@mkgdems.org'; // Email address to receive contact form submissions
$from_email = 'noreply@mkgdems.org'; // Verified sender email in Resend

// Check if form was submitted
if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo 'Method not allowed';
    exit;
}

// Get and sanitize form data
$name = isset($_POST['name']) ? strip_tags(trim($_POST['name'])) : '';
$email = isset($_POST['email']) ? filter_var(trim($_POST['email']), FILTER_SANITIZE_EMAIL) : '';
$subject = isset($_POST['subject']) ? strip_tags(trim($_POST['subject'])) : '';
$message = isset($_POST['message']) ? strip_tags(trim($_POST['message'])) : '';

// Validate form data
$errors = [];

if (empty($name)) {
    $errors[] = 'Name is required.';
}

if (empty($email) || !filter_var($email, FILTER_VALIDATE_EMAIL)) {
    $errors[] = 'Valid email is required.';
}

if (empty($subject)) {
    $errors[] = 'Subject is required.';
}

if (empty($message)) {
    $errors[] = 'Message is required.';
}

if (!empty($errors)) {
    http_response_code(400);
    echo implode('<br>', $errors);
    exit;
}

// Prepare email content
$email_subject = "Contact Form: " . $subject;
$email_body = "You have received a new message from your website contact form.\n\n";
$email_body .= "Name: " . $name . "\n";
$email_body .= "Email: " . $email . "\n";
$email_body .= "Subject: " . $subject . "\n\n";
$email_body .= "Message:\n" . $message . "\n";

// Prepare HTML version
$email_html = "<h2>New Contact Form Submission</h2>";
$email_html .= "<p><strong>Name:</strong> " . htmlspecialchars($name) . "</p>";
$email_html .= "<p><strong>Email:</strong> " . htmlspecialchars($email) . "</p>";
$email_html .= "<p><strong>Subject:</strong> " . htmlspecialchars($subject) . "</p>";
$email_html .= "<p><strong>Message:</strong></p>";
$email_html .= "<p>" . nl2br(htmlspecialchars($message)) . "</p>";

// Send email via Resend API
$data = array(
    'from' => $from_email,
    'to' => array($receiving_email),
    'subject' => $email_subject,
    'text' => $email_body,
    'html' => $email_html,
    'reply_to' => $email
);

$ch = curl_init('https://api.resend.com/emails');
curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
curl_setopt($ch, CURLOPT_POST, true);
curl_setopt($ch, CURLOPT_POSTFIELDS, json_encode($data));
curl_setopt($ch, CURLOPT_HTTPHEADER, array(
    'Authorization: Bearer ' . $resend_api_key,
    'Content-Type: application/json'
));

$response = curl_exec($ch);
$http_code = curl_getinfo($ch, CURLINFO_HTTP_CODE);
curl_close($ch);

if ($http_code === 200) {
    echo 'Your message has been sent. Thank you!';
} else {
    http_response_code(500);
    echo 'There was an error sending your message. Please try again later.';
}
?>
