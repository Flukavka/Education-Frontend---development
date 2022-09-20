<?php

class User
{
    private $name;
    private $lastname;
    private $email;
    private $id;

    function __construct($id, $name, $lastname, $email)
    {
        $this->id = $id;
        $this->name = $name;
        $this->lastname = $lastname;
        $this->email = $email;
    }

    function getId()
    {
        return $this->id;
    }

    function getName()
    {
        return $this->name;
    }

    function getLastname()
    {
        return $this->lastname;
    }

    function getEmail()
    {
        return $this->email;
    }

    //Статический метод добавления пользователя
    static function addUser($name, $lastname, $email, $password)
    {
        global $mysqli;

        $email = trim(mb_strtolower($email));
        $password = trim($password);
        $password = password_hash($password, PASSWORD_DEFAULT);

        $result = $mysqli->query("SELECT * FROM `users` WHERE `email`='$email'");
        if ($result->num_rows != 0) {
            return json_encode(["result" => "exist"]);  //json_encode шифрует
        } else {
            $mysqli->query("INSERT INTO `users`(`userName`, `userLastname`, `email`, `password`) VALUES ('$name', '$lastname', '$email', '$password')");
            return json_encode(["result" => "success"]);
        }
    }

    //Статический метод авторизации пользователя
    static function authUser($email, $password)
    {
        global $mysqli;

        $email = trim(mb_strtolower($email));
        $password = trim($password);

        $result = $mysqli->query("SELECT * FROM `users` WHERE `email`='$email'");
        $result = $result->fetch_assoc();

        if (password_verify($password, $result["password"])) {
            $_SESSION["id"] = $result["id"];
            return json_encode(["result" => "authorized"]);
        } else {
            return json_encode(["result" => "rejected"]);
        }
    }

    //Статический метод, получения данных пользователя
    static function getUser($userId)
    {
        global $mysqli;

        $result = $mysqli->query("SELECT `userName`, `userLastname`, `email`, `id` FROM `users` WHERE `id`='$userId'");
        $result = $result->fetch_assoc();
        return json_encode($result);
    }

    //Статический метод, который запрашивает данные о пользователях и возвращает массив данных на фронт
    static function getUsers()
    {
        global $mysqli;

        $result = $mysqli->query("SELECT `userName`, `userLastname`, `email`, `id` FROM `users` WHERE 1"); //WHERE 1(True) получить все данные с такими полями
        while ($row = $result->fetch_assoc()) {
            $users[] = $row;
        }
        return json_encode($users);
    }
}
