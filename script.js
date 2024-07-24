// let data = {
//     title : "Title",
//     description : "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Explicabo voluptatem fugit quaerat voluptate suscipit nemo laborum labore odit temporibus exercitationem corrupti ea dolorum, cum dolore facilis culpa quidem! Doloribus, inventore!",
//     price:0,
//     amount:0,
//     colors:0,
//     imagePath:"Images/mids4.jpg"
// }

document.addEventListener('DOMContentLoaded', function() {
    // Object containing the data
    let data = {
        title : "Nike Air Jordan",
        description : "Men's Workout Shoes",
        price: 120,
        amount: 0,
        colors: 0,
        imagePath: "Images/dd1.png"
    };

    // Get the elements by their IDs
    let cardImage = document.getElementById('cardImage');
    let cardTitle = document.getElementById('cardTitle');
    let cardDescription = document.getElementById('cardDescription');
    let cardPrice = document.getElementById('cardPrice');
    let cardColors = document.getElementById('cardColors')

    // Populate the elements with data from the object
    cardImage.src = data.imagePath;
    cardTitle.textContent = data.title;
    cardDescription.textContent = data.description;
    cardPrice.textContent = `$${data.price}`;
    cardColors.textContent = `${data.colors} Colors`
});