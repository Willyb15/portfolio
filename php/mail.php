<?php
       require_once('/usr/share/php/libphp-phpmailer/class.phpmailer.php');
       $mail = new PHPMailer(); // defaults to using php "mail()"
       $body = $_POST['message']; //uqal to req.body.message
       $mail->AddReplyTo("userEmail","Will Bryant");
       $mail->SetFrom('keithm.2@gmail.com', 'From Keith Moore');
       $address = "keithm.2@gmail.com";
       $mail->AddAddress($address, "Keith Moore");
       $mail->Subject    = "PHPMailer Test Subject via mail(), basic";
       $mail->MsgHTML($body);
       if(!$mail->Send()) {
       echo "Mailer Error: " . $mail->ErrorInfo;
       } else {
       echo "Message sent!";
       }
?>