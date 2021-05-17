const coffe = document.querySelector('.coffe');
const container = document.querySelectorAll('.container_list');
const vypishka = document.querySelector('.vypishka');
const deserty = document.querySelector('.deserty');
const coffeList = document.querySelector('.coffeList');
const vypishkaList = document.querySelector('.vypishkaList');
const desertyList = document.querySelector('.desertyList');
const circle = document.querySelector('.circle');
const cancel = document.querySelector('.circle_cancel');
const item = document.querySelectorAll('.item li');
const circleImage = document.querySelector('.circle_mainImage');
const cirlcePrice = document.querySelector('.circle_price');
const circleName = document.querySelector('.circle_name');




const l = console.log;


const list = {
    Эспрессо: '/image 6.png',
    Капучино: '/Капучино.png',
    Американо: '/image 7.png',
    Латте: '/image 8.png',
    Фраппе: '/image 9.png',
    Мокко: '/image 10.png',
    Маккиато: '/image 11.png',
    Пудинг: '/image 12.png',
    Дулседе: '/image 13.png',
    Болурей: '/image 14.png',
    Мазаринер: '/image 15.png',
    Вишнёвы: '/image 16.png',
    Гулабджамун: '/image 17.png',
    Винартерта: '/image 18.png',
    Прогзебра: '/image 19.png',
    Кекс: '/image 20.png',
    Сочники: '/image 21.png',
    Ватрушки: '/image 22.png',
    Бисквит: '/image 22.png',
    Рулет: '/image 24.png',
    Чизкейк: '/image 25.png',





}

item.forEach((t) => {

    t.addEventListener('click', (k) => {

        const regex = /\W+/;

        const regex1 = /\d+/;

        let item = t.innerText.split(' , ');

        let result = item[0].match(regex);

        let name = result[0].slice(0, result[0].length - 2);

        let price = item[0].match(regex1);

        circle.classList.add('active');

        let img = list[name];

        circleName.innerText = name;
        cirlcePrice.innerText = price + "тг";
        circleImage.src = img;


    });


})




cancel.addEventListener('click', () => {

    if (circle.classList.contains('active')) {

        circle.classList.remove('active');

    }


})




coffe.addEventListener('click', function(t) {

    vypishkaList.classList.remove('active')
    desertyList.classList.remove('active')
    coffeList.classList.toggle('active');


})

// coffe.addEventListener('mouseout', function (t){

//     vypishkaList.classList.remove('active')
//     desertyList.classList.remove('active')
//     coffeList.classList.remove('active');


// })

vypishka.addEventListener('click', function(t) {

    vypishkaList.classList.toggle('active')
    desertyList.classList.remove('active')
    coffeList.classList.remove('active');

})

deserty.addEventListener('click', function(t) {

    vypishkaList.classList.remove('active')
    desertyList.classList.toggle('active')
    coffeList.classList.remove('active');

})