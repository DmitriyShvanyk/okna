<?php	// Файлы phpmailerrequire 'class.phpmailer.php';require 'class.smtp.php';$name = $_POST['fnameAction'];$phone = $_POST['telAction'];// Настройки$mail = new PHPMailer;// Кодировка$mail->CharSet = 'UTF-8';//$mail->isSMTP(); $mail->Host = 'ssl://smtp.mail.ru';  $mail->SMTPAuth = true;                      $mail->Username = 'xxxx'; // Ваш логин в Mail.ru. Именно логин, без @mail.ru$mail->Password = 'xxxx'; // Ваш пароль$mail->SMTPSecure = 'ssl';                            $mail->Port = 465;//$mail->setFrom('soledar1984@gmail.com'); // Ваш Email$mail->setFrom($name); // Ваш Email$mail->FromName = $name; $mail->addAddress('sayt-2013@mail.ru'); // Email получателя//$mail->addAddress('example@gmail.com'); // Еще один email, если нужно.                                 // Письмо$mail->isHTML(true); // Заголовок письма$mail->Subject = "Форма - Записаться на бесплатный замер и получить скидку"; // Текст письма$message = "Имя : " . $name . "<br>" . " Телефон : " . $phone;$mail->Body = $message;// Результатif(!$mail->send()) {    echo 'Message could not be sent.';    echo 'Mailer Error: ' . $mail->ErrorInfo;} else {    echo '';}?>