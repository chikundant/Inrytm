<?php

    use PHPMailer\PHPMailer\PHPMailer;
    use PHPMailer\PHPMailer\Exception;


    require 'PHPMailer/src/Exception.php';
    require 'PHPMailer/src/PHPMailer.php';

    $mail = new PHPMailer(true);
    $mail->CharSet = 'UTF-8';
    $mail->setlanguage('ru', 'phpmailer/language/');
    $mail->IsHtml(true);

    $mail->setFrom('dima.chikunda@gmail.com', 'Дима');
    $mail->addAddress('chikunda.dima@gmail.com');
    $mail->Subject = 'Новый клиен';

    $body = '<h1>Новый клиент!</h1>';

    if(trim(!empty($_POST['name']))){
        $body.='<p><strong>name:</strong>'.$_POST['name'].'</p>';
    }

    if(trim(!empty($_POST['username']))){
        $body.='<p><strong>username:</strong>'.$_POST['username'].'</p>';
    }

    if(trim(!empty($_POST['phone']))){
        $body.='<p><strong>phone:</strong>'.$_POST['phone'].'</p>';
    }

    if(trim(!empty($_POST['email']))){
        $body.='<p><strong>email:</strong>'.$_POST['email'].'</p>';
    }

    $mail->Body = $body;

    if(!$mail->send()){
        $message = 'Помилка!';
    } else{
        $message = 'Дякуємо!';
    }

    $response = ['message' => $message];

    header('Content-type: application/json');
    echo json_encode($response);
    

?>