let openShopping = document.querySelector('.shopping');
let closeShopping = document.querySelector('.closeShopping');
let list = document.querySelector('.list');
let listCard = document.querySelector('.listCard');
let body = document.querySelector('body');
let total = document.querySelector('.total');
let quantity = document.querySelector('.quantity');

openShopping.addEventListener('click', ()=>{
    body.classList.add('active');
})
closeShopping.addEventListener('click', ()=>{
    body.classList.remove('active');
})

let products = [
    {
        id: 1,
        name: 'RDC DEDICATE - RED',
        image: '1.PNG',
        price: 1000
    },
    {
        id: 2,
        name: 'RDC RNCDCRTN - BLACK',
        image: '2.PNG',
        price: 1000
    },
    {
        id: 3,
        name: 'RDC JAPANESE - WHITE',
        image: '3.PNG',
        price: 1000
    },
    {
        id: 4,
        name: 'RDC - RED',
        image: '4.PNG',
        price: 123000
    },
    {
        id: 5,
        name: 'RDC MOUNTAIN WHEELS - BLACK',
        image: '5.PNG',
        price: 320000
    },
    {
        id: 6,
        name: 'RDC CARDS - CYAN',
        image: '6.PNG',
        price: 1000
    },
	{
        id: 7,
        name: 'RDC HEART BEAT - BLACK',
        image: '7.PNG',
        price: 1000
    },
	{
        id: 8,
        name: 'RDC KFC - CYAN',
        image: '8.PNG',
        price: 1000
    },
	{
        id: 9,
        name: 'RDC NASA - WHITE',
        image: '9.PNG',
        price: 1000
    },
	{
        id: 10,
        name: 'RDC ROAD KILL - WHITE',
        image: '10.PNG',
        price: 1000
    },
    {
        id: 11,
        name: 'RDC VINTAGE - YELLOW',
        image: '11.PNG',
        price: 1000
    },
    {
        id: 12,
        name: 'RDC EASY CYCLING - RED',
        image: '12.PNG',
        price: 1000
    },
    {
        id: 13,
        name: 'RDC GUCCI - WHITE',
        image: '13.PNG',
        price: 1000
    },
    {
        id: 14,
        name: 'RDC FIRE - WHITE',
        image: '14.PNG',
        price: 1000
    },
    {
        id: 15,
        name: 'RDC SKULL - WHITE',
        image: '15.PNG',
        price: 1000
    },
    {
        id: 16,
        name: 'RDC RAIN - WHITE',
        image: '16.PNG',
        price: 1000
    },
    {
        id: 17,
        name: 'RDC LIGHTNING - BLACK',
        image: '17.PNG',
        price: 1000
    },
    {
        id: 18,
        name: 'RDC - RED',
        image: '18.PNG',
        price: 1000
    },
	{
        id: 19,
        name: 'RDC BIKE PARTS - CYAN',
        image: '19.PNG',
        price: 1000
    },
	{
        id: 20,
        name: 'RDC JAPANESE - RED',
        image: '20.PNG',
        price: 1000
    },
	{
        id: 21,
        name: 'RDC RNCDCRTN - BLACK',
        image: '21.PNG',
        price: 1000
    }
];
let listCards  = [];
function initApp(){
    products.forEach((value, key) =>{
        let newDiv = document.createElement('div');
        newDiv.classList.add('item');
        newDiv.innerHTML = `
            <img src="image/${value.image}">
            <div class="title">${value.name}</div>
            <div class="price">${value.price.toLocaleString()}</div>
            <button onclick="addToCard(${key})">Add To Card</button>`;
        list.appendChild(newDiv);
    })
}
initApp();
function addToCard(key){
    if(listCards[key] == null){
        listCards[key] = products[key];
        listCards[key].quantity = 1;
    }
    reloadCard();
}
function reloadCard(){
    listCard.innerHTML = '';
    let count = 0;
    let totalPrice = 0;
    listCards.forEach((value, key)=>{
        totalPrice = totalPrice + value.price;
        count = count + value.quantity;
        if(value != null){
            let newDiv = document.createElement('li');
            newDiv.innerHTML = `
                <div><img src="image/${value.image}"/></div>
                <div>${value.name}</div>
                <div>${value.price.toLocaleString()}</div>
                <div>
                    <button onclick="changeQuantity(${key}, ${value.quantity - 1})">-</button>
                    <div class="count">${value.quantity}</div>
                    <button onclick="changeQuantity(${key}, ${value.quantity + 1})">+</button>
                </div>`;
                listCard.appendChild(newDiv);
        }
    })
    total.innerText = totalPrice.toLocaleString();
    quantity.innerText = count;
}
function changeQuantity(key, quantity){
    console.log(key, quantity);
    if(quantity == 0){
        delete listCards[key];
    }else{
        listCards[key].quantity = quantity;
        listCards[key].price = quantity * products[key].price;
    }
    reloadCard();
}