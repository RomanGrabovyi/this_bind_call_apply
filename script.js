// function User(name, age) {
//     this.name = name;
//     this.age = age;
//     this.say = () => {
//         console.log(`${this.name} say - the world is mine`);
//     };
// }

// let ivan = new User('Ivan', 23);
// //****************************************************


// function sayName(surname) {
//     console.log(this);
//     console.log(this.name + surname);
// }
// const user = {
//     name: "Ivan"
// };

// sayName.call(user, 'Ivanov');    //викликає повязує функцію і об"єкт
// sayName.apply(user, ['Ivanov']);  //викликає повязує функцію і об"єкт
// //******************************************************

// function count(num) {
//     return this * num;
// }
// const double = count.bind(2); // перестворює нову функцію 2 переходить в this
// console.log(double(3));       // num передається в функцію double 
// console.log(double(23));

//Звичайна функція this = window,а в use strict - undefined;
//Контекс у методів обєкта - сам об"єкт;
//this в конструкторах і класах це новий екземпляр об"єкта;
//ручна привязка this call apply bind;

const objt = {
    num: 5,
    sayNamber: function() {
        const sayyy = () => {//в стрілочній фунції немає свого контекста виклику тобто tis
            console.log(this.num);//this в стрілочній функції завжди посилається на родиниий звязок тобто sayNumber,
        };
        sayyy();                    //а sayNumber метод завжди посилається на обєкт в якому він існує тобо objt;
    }
};
objt.sayNamber();

const dbl = (a) => {
    return a * 2;
};
// const dbl = a => a * 2;// одне і те саме що попереднє


const butn = document.querySelector('button');

butn.addEventListener('click', function() { //() => видасть помилку так як в стріл функції немає свого контексту виклику
    this.style.backgroundColor = 'red';
});