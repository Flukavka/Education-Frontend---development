<?php
//инкапсуляция - сокрытие вложенных данных (private)
class Person
{
    public $name;   //public, private
    public $lastname;  // сеттеры принимают инфо, геттеры отдают инфо
    public $age;
    private $hp;
    private $mother;
    private $father;

    function __construct($name, $lastname, $age, $mother = null, $father = null)
    {
        $this->name = $name;
        $this->lastname = $lastname;
        $this->age = $age;
        $this->mother = $mother;
        $this->father = $father;
        $this->hp = 100;
    }

    function sayHi($name)
    {
        return "Hi, $name, im " . $this->name;
    }

    function setHp($hp)
    {
        if ($this->hp + $hp >= 100) $this->hp = 100;
        else $this->hp = $this->hp + $hp;
    }

    function getHp()
    {
        return $this->hp;
    }

    function getName()
    {
        return $this->name;
    }

    function getMother()
    {
        return $this->mother;
    }

    function  getFather()
    {
        return $this->father;
    }

    function getLastname()
    {
        return;
    }

    function getInfo()
    {
        return "
        <h3>A few words about myself:</h3><br>
        " . "My name is: " . $this->getName() . "<br>" . "My lastname is: " . $this->getLastname()
            . "<br>" . "My father: ".$this->getFather()."<br>" . "My mother: ". $this->getMother();
    }
}

$igor = new Person("Igor", "Petrov", 68);
$alex = new Person("Alex", "Gorodeckiy", 43);
$olga = new Person("Olga", "Gorodeckaya", 42, null, $igor);
$lera = new Person("Lera", "Gorodeckaya", 12, $olga, $alex);

//echo $lera->getInfo()
echo $lera->getMother()->getFather()->getName();

/* //echo $alex->sayHi($igor->name);
$medKit = 50;

//упал
$alex->setHp(-30);
echo $alex->getHp()."<br>";

//нашел аптчеку
$alex->setHp($medKit);
echo $alex->getHp(); */