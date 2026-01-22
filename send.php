<?php
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

require 'PHPMailer/src/Exception.php';
require 'PHPMailer/src/PHPMailer.php';
require 'PHPMailer/src/SMTP.php';

if(isset($_POST['email'])){

    $userEmail = $_POST['email'];

    $mail = new PHPMailer(true);

    try {
        // SMTP Settings
        $mail->isSMTP();
        $mail->Host       = 'smtp.gmail.com';
        $mail->SMTPAuth   = true;
        $mail->Username   = 'negid5982@gmail.com'; // YOUR EMAIL
        $mail->Password   = 'ttje iwko wbfx hcqr';   // APP PASSWORD
        $mail->SMTPSecure = 'tls';
        $mail->Port       = 587;

        // Email Content
        $mail->setFrom('negid5982@gmail.com', 'Netflix Clone');
        $mail->addAddress('negid5982@gmail.com'); // where you receive mail

        $mail->isHTML(true);
        $mail->Subject = 'New Netflix Signup';
        $mail->Body    = "New user email: <b>$userEmail</b>";

        $mail->send();
        echo "<script>alert('Email submitted successfully!');window.location='index.html';</script>";

    } catch (Exception $e) {
        echo "Mailer Error: {$mail->ErrorInfo}";
    }
}
?>
