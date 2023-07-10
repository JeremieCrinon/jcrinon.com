<?php
if ($_SERVER["REQUEST_METHOD"] === "POST") {
    $nom = $_POST["contact--main--contact_form--form--name"];

    header('Location: confirmation.html');
    exit;
}
?>