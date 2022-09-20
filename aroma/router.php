<?php

session_start();
$url = explode('/', $_SERVER['REQUEST_URI']);
require_once("php/connectDb.php");
require_once("php/classes/User.php");


if ($url[1] == "contact") {
    $content = file_get_contents("pages/contact.php");
} else if ($url[1] == "category") {
    $content = file_get_contents("pages/category.html");
} else if ($url[1] == "single-product") {
    $content = file_get_contents("pages/single-product.html");
} else if ($url[1] == "register") {
    $content = file_get_contents("pages/register.html");
} else if ($url[1] == "login") {
    $content = file_get_contents("pages/login.html");
} else if ($url[1] == "cart") {
    $content = file_get_contents("pages/cart.html");
} else if ($url[1] == "checkout") {
    $content = file_get_contents("pages/checkout.html");
} else if ($url[1] == "confirmation") {
    $content = file_get_contents("pages/confirmation.html");
} else if ($url[1] == "single-blog") {
    $content = file_get_contents("pages/single-blog.html");
} else if ($url[1] == "blog") {
    $content = file_get_contents("pages/blog.php");
} else if ($url[1] == "tracking-order") {
    $content = file_get_contents("pages/tracking-order.html");
} else if ($url[1] == "login") {
    $content = file_get_contents("pages/login.html");
} else if ($url[1] == "users") {
    require_once("pages/users/index.html");
} else if ($url[1] == "addUser") {
    echo User::addUser($_POST["name"], $_POST["lastname"], $_POST["email"], $_POST["password"]);
} else if($url[1] == "authUser") {
    echo User::authUser($_POST["email"], $_POST["password"]);
} else if($url[1] == "getUser"){
    echo User::getUser($_SESSION["id"]);
} else {
    $content = file_get_contents("pages/index.php");
}

if (!empty($content))
    require_once("template.php");
