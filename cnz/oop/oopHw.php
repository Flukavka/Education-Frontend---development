<?php

class Person
{
    private $name;
    private $lastname;
    private $age;
    private $mother;
    private $father;

    function __construct($name, $lastname, $age, $mother = null, $father = null)
    {
        $this->name = $name;
        $this->lastname = $lastname;
        $this->age = $age;
        $this->mother = $mother;
        $this->father = $father;
    }

    function getName()
    {
        return $this->name;
    }

    function getLastname()
    {
        return $this->lastname;
    }

    function getAge()
    {
        return $this->age;
    }

    function getMother()
    {
        return $this->mother;
    }

    function getFather()
    {
        return $this->father;
    }

    function getMotherAtMother() {
        return $this->getMother()->getMother();
    }

    function getFatherAtMother() {
        return $this->getMother()->getFather();
    }

    function getMotherAtFather() {
        return $this->getFather()->getMother();
    }

    function getFatherAtFather() {
        return $this->getFather()->getFather();
    }

    function getInfo()
    {
        return "<h3 style='margin-top: 4px; margin-bottom: 4px; text-align: center;'>Моё гениалогическое древо</h3><br>"
        ."<div style='display: flex; align-items: center; flex-direction:column;'>"
            ."<div style='border: 1px solid black; padding: 16px; max-width: 200px;'>"
            ."Меня зовут: ".$this->getName()."<br>"."Фамилия: ".$this->getLastname()."<br>"."Возраст: ".$this->getAge()."</div>"
            ."<br>"

            ."<div style='display: flex; flex-direction: row; margin:0 8px;'>"
                ."<div style='border: 1px solid black; padding: 16px; margin:0 8px;'>"
                    ."<h5 style='margin-top: 4px; margin-bottom: 4px;'>Моя мама:</h5>"
                    ."Имя: ".$this->getMother()->getName()."<br>"
                    ."Фамилия: ".$this->getMother()->getLastname()
                    ."<br>"."Возраст: ".$this->getMother()->getAge()
                ."</div>"
                ."<div style='border: 1px solid black; padding: 16px; margin:0 8px;'>"
                    ."<h5 style='margin-top: 4px; margin-bottom: 4px;'>Мой папа:</h5>"
                    ."Имя: ".$this->getFather()->getName()."<br>"
                    ."Фамилия: ".$this->getFather()->getLastname()
                    ."<br>"."Возраст: ".$this->getFather()->getAge()
                ."</div>"
            ."</div>"
            ."<br>"
            ."<div style='display: flex; flex-direction: row; margin:0 8px;'>"
                //бабушка по маминой линии
                ."<div style='border: 1px solid black; padding: 16px; margin:0 8px;'>"
                    ."<h5 style='margin-top: 4px; margin-bottom: 4px;'>Моя бабушка по маминой линии:</h5>"
                    ."Имя: ".$this->getMotherAtMother()->getName()."<br>"
                    ."Фамилия: ".$this->getMotherAtMother()->getLastname()
                    ."<br>"."Возраст: ".$this->getMotherAtMother()->getAge()
                ."</div>"
                //дедушка по маминой линии
                ."<div style='border: 1px solid black; padding: 16px; margin:0 8px;'>"
                    ."<h5 style='margin-top: 4px; margin-bottom: 4px;'>Мой дедушка по маминой линии:</h5>"
                    ."Имя: ".$this->getFatherAtMother()->getName()."<br>"
                    ."Фамилия: ".$this->getFatherAtMother()->getLastname()
                    ."<br>"."Возраст: ".$this->getFatherAtMother()->getAge()
                ."</div>"
                //бабушка по папиной линии
                ."<div style='border: 1px solid black; padding: 16px; margin:0 8px;'>"
                    ."<h5 style='margin-top: 4px; margin-bottom: 4px;'>Моя бабушка по папиной линии:</h5>"
                    ."Имя: ".$this->getMotherAtFather()->getName()."<br>"
                    ."Фамилия: ".$this->getMotherAtFather()->getLastname()
                    ."<br>"."Возраст: ".$this->getMotherAtFather()->getAge()
                ."</div>"
                //дедушка по папиной линии
                ."<div style='border: 1px solid black; padding: 16px; margin:0 8px;'>"
                    ."<h5 style='margin-top: 4px; margin-bottom: 4px;'>Мой дедушка по папиной линии:</h5>"
                    ."Имя: ".$this->getFatherAtFather()->getName()."<br>"
                    ."Фамилия: ".$this->getFatherAtFather()->getLastname()
                    ."<br>"."Возраст: ".$this->getFatherAtFather()->getAge()
                ."</div>"
            ."</div>"
        ."</div>";
    }
}

$anatoliy = new Person("Анатолий", "Петров", 68);
$sergey = new Person("Сергей", "Яблочкин", 66);
$yana = new Person("Яна", "Яблочкина", 65);
$svetlana = new Person("Светлана", "Петрова", 62);
$artur = new Person("Артур", "Петров", 36, $svetlana, $anatoliy);
$anna = new Person("Анна", "Петрова", 33, $yana, $sergey);
$artem = new Person("Артём", "Петров", 6, $anna, $artur);

echo $artem->getInfo();