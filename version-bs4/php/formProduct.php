<?php	// Файлы phpmailerrequire 'class.phpmailer.php';require 'class.smtp.php';$name = $_POST['fnameProduct'];$phone = $_POST['telProduct'];$email = $_POST['emailProduct'];$nameProduct = $_POST['nameProduct'];// Настройки$mail = new PHPMailer;// Кодировка$mail->CharSet = 'UTF-8';//$mail->isSMTP(); $mail->Host = 'ssl://smtp.mail.ru';  $mail->SMTPAuth = true;                      $mail->Username = 'soledar1984'; // Ваш логин в Mail.ru. Именно логин, без @mail.ru$mail->Password = 'dD06122011DdG'; // Ваш пароль$mail->SMTPSecure = 'ssl';                            $mail->Port = 465;//$mail->setFrom('soledar1984@gmail.com'); // Ваш Email$mail->setFrom($name); // Ваш Email$mail->FromName = $name; $mail->addAddress('soledar1984@gmail.com'); // Email получателя//$mail->addAddress('example@gmail.com'); // Еще один email, если нужно.                                 // Письмо$mail->isHTML(true); // Заголовок письма$mail->Subject = "Форма - Заказать звонок"; // Текст письма$message = "Имя : " . $name . "<br>" . " Телефон : " . $phone . "<br>" . " Email : " . $email . "<br>" . " Продукт : " . $nameProduct;$mail->Body = $message;// Результатif(!$mail->send()) {    echo 'Message could not be sent.';    echo 'Mailer Error: ' . $mail->ErrorInfo;} else {    echo '';}?>