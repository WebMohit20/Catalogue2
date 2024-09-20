let dataArr =[
    {
        "name": "Veggie Delight",
        "imageSrc": "/images/rounded.png",
        "time": "30 min",
        "type": "veg",
        "isLiked": false,
        "rating": 4.2
    },
    {
        "name": "Chicken Grill",
        "imageSrc": "/images/rounded.png",
        "time": "45 min",
        "type": "non-veg",
        "isLiked": false,
        "rating": 4.5
    },
    {
        "name": "Cheese Pizza",
        "imageSrc": "/images/rounded.png",
        "time": "40 min",
        "type": "veg",
        "isLiked": false,
        "rating": 4.1
    },
    {
        "name": "Steak",
        "imageSrc": "/images/rounded.png",
        "time": "60 min",
        "type": "non-veg",
        "isLiked": false,
        "rating": 4.7
    },
    {
        "name": "Grilled Salmon",
        "imageSrc": "/images/rounded.png",
        "time": "50 min",
        "type": "non-veg",
        "isLiked": false,
        "rating": 4.6
    },
    {
        "name": "Tomato Pasta",
        "imageSrc": "/images/rounded.png",
        "time": "35 min",
        "type": "veg",
        "isLiked": false,
        "rating": 4.0
    },
    {
        "name": "Vegan Salad",
        "imageSrc": "/images/rounded.png",
        "time": "20 min",
        "type": "veg",
        "isLiked": false,
        "rating": 3.9
    },
    {
        "name": "Fried Chicken",
        "imageSrc": "/images/rounded.png",
        "time": "55 min",
        "type": "non-veg",
        "isLiked": false,
        "rating": 4.3
    },
    {
        "name": "Mushroom Risotto",
        "imageSrc": "/images/rounded.png",
        "time": "45 min",
        "type": "veg",
        "isLiked": false,
        "rating": 4.5
    },
    {
        "name": "Burger",
        "imageSrc": "/images/rounded.png",
        "time": "30 min",
        "type": "non-veg",
        "isLiked": false,
        "rating": 4.2
    },
    {
        "name": "Paneer Tikka",
        "imageSrc": "/images/rounded.png",
        "time": "40 min",
        "type": "veg",
        "isLiked": false,
        "rating": 4.4
    },
    {
        "name": "BBQ Ribs",
        "imageSrc": "/images/rounded.png",
        "time": "70 min",
        "type": "non-veg",
        "isLiked": false,
        "rating": 4.6
    },
    {
        "name": "Caesar Salad",
        "imageSrc": "/images/rounded.png",
        "time": "25 min",
        "type": "veg",
        "isLiked": false,
        "rating": 3.8
    },
    {
        "name": "Fish Tacos",
        "imageSrc": "/images/rounded.png",
        "time": "35 min",
        "type": "non-veg",
        "isLiked": false,
        "rating": 4.3
    },
    {
        "name": "Chocolate Cake",
        "imageSrc": "/images/rounded.png",
        "time": "90 min",
        "type": "veg",
        "isLiked": false,
        "rating": 4.9
    }
]



let menu = document.getElementById("menu-js")
let card = document.getElementById("card-js");


let Div
for(let obj of dataArr){
    let image = document.getElementById("dish-img");
    let category = document.getElementById("category-js");
    let dish_name = document.getElementById("dName-js");
    let rating_point = document.getElementById("rating-js");
    let time = document.getElementById("time-js");
    Div = document.createElement("div");
    Div.className = card.className;
    Div.innerHTML = card.innerHTML;
    image.src = obj.imageSrc;
    image.alt = `${obj.name}`
    category.innerText = `${obj.type}`
    dish_name.innerText = `${obj.name}`
    time.innerText = `${obj.time}`
    rating_point.innerText = `${obj.rating}`
    menu.append(Div);

}