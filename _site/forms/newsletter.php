<?php
/**
 * Newsletter Subscription Handler using Resend.com API
 * 
 * This script handles newsletter subscription form submissions and sends confirmation emails via Resend.com
 * Configure your Resend API key and receiving email address below
 */

// Configuration
$resend_api_key = 'YOUR_RESEND_API_KEY_HERE'; // Replace with your Resend API key
$receiving_email = 'contact@mkgdems.org'; // Email address to receive newsletter subscriptions
$from_email = 'noreply@mkgdems.org'; // Verified sender email in Resend

// Check if form was submitted
if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo 'Method not allowed';
    exit;
}

// Get and sanitize email
$email = isset($_POST['email']) ? filter_var(trim($_POST['email']), FILTER_SANITIZE_EMAIL) : '';

// Validate email
if (empty($email) || !filter_var($email, FILTER_VALIDATE_EMAIL)) {
    http_response_code(400);
    echo 'Valid email address is required.';
    exit;
}

// Prepare email content
$email_subject = "New Newsletter Subscription: " . $email;
$email_body = "You have received a new newsletter subscription.\n\n";
$email_body .= "Email: " . $email . "\n";
$email_body .= "Timestamp: " . date('Y-m-d H:i:s') . "\n";

// Prepare HTML version
$email_html = "<h2>New Newsletter Subscription</h2>";
$email_html .= "<p><strong>Email:</strong> " . htmlspecialchars($email) . "</p>";
$email_html .= "<p><strong>Timestamp:</strong> " . date('Y-m-d H:i:s') . "</p>";
$email_html .= "<p><em>Please add this email to your newsletter mailing list.</em></p>";

// Send notification email via Resend API
$data = array(
    'from' => $from_email,
    'to' => array($receiving_email),
    'subject' => $email_subject,
    'text' => $email_body,
    'html' => $email_html
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
    echo 'Your subscription request has been sent. Thank you!';
} else {
    http_response_code(500);
    echo 'There was an error processing your subscription. Please try again later.';
}
?>
