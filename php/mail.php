<?php
       require_once('/usr/share/php/libphp-phpmailer/class.phpmailer.php');
       $mail = new PHPMailer(); // defaults to using php "mail()"
       $body = $_POST['message']; //euqal to req.body.message
       $mail->AddReplyTo($_POST['email'], $_POST['name']);
       $mail->SetFrom($_POST['email'], $_POST['name']);
       $address = "william.steen.bryant@gmail.com";
       $mail->AddAddress($address, "Will Bryant");
       $mail->Subject = "PHPMailer Test Subject via mail(), basic";
       $mail->MsgHTML($_POST['email'].' sent a message from contact form. '.$body);
       if(!$mail->Send()) {
       echo "Mailer Error: " . $mail->ErrorInfo;
       } else {
       header("Location: http://willybman.com/php/thankyou.html");
       }

?>