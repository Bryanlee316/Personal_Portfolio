<?php
    $to                 = 'akila@pyxelstudio.com';

    $name               = strip_tags($_POST['name']);
    $email              = strip_tags($_POST['email']);
    $message            = nl2br( htmlspecialchars($_POST['message'], ENT_QUOTES) );
    $result             = array();


    if(empty($name)){

        $result = array( 'response' => 'error', 'empty'=>'name', 'message'=>'<strong>Error!</strong> Name is empty.' );
        echo json_encode($result );
        die;
    } 

    if(empty($email)){

        $result = array( 'response' => 'error', 'empty'=>'email', 'message'=>'<strong>Error!</strong> Email is empty.' );
        echo json_encode($result );
        die;
    } 

    if(empty($message)){

         $result = array( 'response' => 'error', 'empty'=>'message', 'message'=>'<strong>Error!</strong> Message body is empty.' );
         echo json_encode($result );
         die;
    }


    $headers  = "From: " . $name . ' <' . $email . '>' . "\r\n";
    $headers .= "Reply-To: ". $email . "\r\n";
    $headers .= "MIME-Version: 1.0\r\n";
    $headers .= "Content-Type: text/html; charset=UTF-8\r\n";

    $subject    = 'Message from '.$name;
    $contents   = $message;

    if ( mail( $to, $subject, $contents, $headers ) ) {
        $result = array( 'response' => 'success', 'message'=>'<strong>Success!</strong> Mail Sent.' );
    } else {
        $result = array( 'response' => 'error', 'message'=>'<strong>Error!</strong> Cann\'t Send Mail.'  );
    }

    echo json_encode( $result );

    die;