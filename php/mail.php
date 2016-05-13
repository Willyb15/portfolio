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

// require_once "vendor/autoload.php";

// //PHPMailer Object
// $mail = new PHPMailer;

// //From email address and name
// $mail->From = "willybman@willybman.com";
// $mail->FromName = "Will";

// //To address and name
// $mail->addAddress("william.steen.bryant@gmail.com", "Will Bryant");
// $mail->addAddress("william.steen.bryant@gmail.com"); //Recipient name is optional

// //Address to which recipient will reply
// $mail->addReplyTo("reply@willybman.com.com", "Reply");

// //CC and BCC
// // $mail->addCC("cc@example.com");
// // $mail->addBCC("bcc@example.com");

// //Send HTML or Plain Text email
// $mail->isHTML(true);

// $mail->Subject = "From Website";
// $mail->Body = "<i>Mail body in HTML</i>";
// $mail->AltBody = "This is the plain text version of the email content";

// if(!$mail->send()) 
// {
//     echo "Mailer Error: " . $mail->ErrorInfo;
// } 
// else 
// {
//     echo "Message has been sent successfully";
// }

?>