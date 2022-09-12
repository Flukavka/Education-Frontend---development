<?php

$userName = $_POST["userName"];
$userEmail = $_POST["userEmail"];
$userMessage = $_POST["userMessage"];

mail('nosareva.vs@gmail.com', 'Новый посетитель', "Посетитель: $userName, $userEmail, оставил сообщение: $userMessage");