<?php session_start(); ?>

<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.1/dist/css/bootstrap.min.css" integrity="sha384-zCbKRCUGaJDkqS1kPbPd7TveP5iyJE0EjAuZQTgFLD2ylzuqKfdKlfG/eSrtxUkn" crossorigin="anonymous">
    <title>Личный кабинет</title>
    <style>
        .editBtn,
        .saveBtn,
        .cancelBtn {
            cursor: pointer;
            font-size: 1rem;
        }

        .editBtn:hover {
            color: purple;
        }

        .saveBtn:hover {
            color: purple;
        }

        .cancelBtn:hover {
            color: purple;
        }

        p {
            font-size: 1.5rem;
        }
    </style>
</head>

<body>
    <div class="container mt-5">
        <h1 class="text-center">Личный кабинет</h1>
        <p>Имя:
            <span class="user"><?php echo $_SESSION["userName"]; ?></span>
            <span class="editBtn">[Изменить]</span>
            <span class="saveBtn" hidden>[Сохранить]</span>
            <span class="cancelBtn" hidden>[Отменить]</span>
        </p>
        <p>Фамилия:
            <span class="user"><?= $_SESSION["userLastname"]; ?></span>
            <span class="editBtn">[Изменить]</span>
            <span class="saveBtn" hidden>[Сохранить]</span>
            <span class="cancelBtn" hidden>[Отменить]</span>
        </p>
        <p>E-mail: <?php echo $_SESSION["email"]; ?></p>
        <p>ID: <?php echo $_SESSION["id"]; ?></p>
    </div>

    <script>
        let editBtnEl = document.querySelectorAll('.editBtn');
        let saveBtnEl = document.querySelectorAll('.saveBtn');
        let cancelBtnEl = document.querySelectorAll('.cancelBtn');
        let user = document.querySelectorAll('.user');

        for (let i = 0; i < editBtnEl.length; i++) {
            let inputValue = editBtnEl[i].previousElementSibling.innerText;
            editBtnEl[i].addEventListener('click', () => {
                editBtnEl[i].previousElementSibling.innerHTML = `<input type ="text" value="${inputValue}" class="inputCl">`;

                saveBtnEl[i].hidden = false;
                cancelBtnEl[i].hidden = false;
                editBtnEl[i].hidden = true;
            });

            saveBtnEl[i].addEventListener('click', () => {
                user[i].innerText = document.querySelector('.inputCl').value;
                inputValue = user[i].innerText;

                saveBtnEl[i].hidden = true;
                cancelBtnEl[i].hidden = true;
                editBtnEl[i].hidden = false;
            })

            cancelBtnEl[i].addEventListener('click', () => {
                user[i].innerText = inputValue;

                saveBtnEl[i].hidden = true;
                cancelBtnEl[i].hidden = true;
                editBtnEl[i].hidden = false;
            })
        }
    </script>

    <script src="https://cdn.jsdelivr.net/npm/jquery@3.5.1/dist/jquery.slim.min.js" integrity="sha384-DfXdz2htPH0lsSSs5nCTpuj/zy4C+OGpamoFVy38MVBnE+IbbVYUew+OrCXaRkfj" crossorigin="anonymous"></script>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@4.6.1/dist/js/bootstrap.bundle.min.js" integrity="sha384-fQybjgWLrvvRgtW6bFlB7jaZrFsaBXjsOMm/tB9LTS58ONXgqbR9W8oWht/amnpF" crossorigin="anonymous"></script>
</body>

</html>