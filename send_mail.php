<?php
if ($_SERVER["REQUEST_METHOD"] === "POST") {
    $nom = $_POST["form_name"];
    $email = $_POST["form_email"];
    $message = $_POST["form_message"];

    $result = "E-mail automatique venant du formulaire de contact de jcrinon.com.\nNom: " . $nom . "\nE-mail: " . $email . "\nMessage:\n" . $message;  

    if (mail("contact@jcrinon.com", "Message automatique jcrinon.com", $result)) {
        header('Location: confirmation.html');
    } else {
        header('Location: fail.html');
    }
    exit;
}
?>