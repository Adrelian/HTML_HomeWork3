// // Задача 1. Запрос и вывод приветствия с помощью функции
// let your_name = prompt("Введите ваше имя", "Имя");


// function greeting_user_1(name)
// {
//     alert(`Привет, ${name}`);
// }

// greeting_user_1(your_name);

    

// Задача 2. Кнопка ОК/Отмена. Работа с условиями
// let answer = confirm("Вы уверены?");


// if (answer === true)
//     {
//         alert("Олично");
//     }
// else if(answer === false)
//     {
//         alert("Плохо");
//     }
// else if(answer === null)
//     {
//         alert("Ошибка")
//     }


// Задача 3. Преобразовать большое ветвление if в switch-case
// let user_age = Number(prompt("Введите ваш возраст", "Возраст"));


// switch (user_age)
//     {
//         case 18:
//             alert("Вы совершенно летний")
//             break

//         case 10:
//             alert("Идите учить уроки")
//             break

//         case 30:
//             alert("Идите спать, завтра на работу")
//             break

//         default:
//             alert("Мы не знаем, что вам делать")
//             break
//     }


// Доп. задание, сделать вывод. Ввод от пользователя должен выводиться на экран сайта, а не в всплывающих окнах

// function greeting_user_1()
// {
//     let text = document.querySelector(".text");
//     let greet = prompt("Привет кто то", "имя");
//     text.innerHTML = "Привет " + greet;
// }

// greeting_user_1();