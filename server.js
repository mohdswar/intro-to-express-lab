
const express = require('express')
const app = express()
const port = 3000



app.get('/', (req, res) => {
    res.send('<h1>My lab</h1>');
});


app.get('/greeting/:name', (req, res) => {
    const name = req.params.name;
    res.send(`hello ${name}`);

})

app.get('/roll/:num', (req, res) => {

    const num = Math.floor(Math.random() * req.params.num) + 1;

    res.send(`the rolled ${num}`);
})

const collectibles = [
    { name: 'shiny ball', price: 5.95 },
    { name: 'autographed picture of a dog', price: 10 },
    { name: 'vintage 1970s yogurt SOLD AS-IS', price: 0.99 }
];

app.get('/collectibles/:arr', (req, res) => {

    const arr = req.params.arr;
    const name1 = collectibles[arr].name;
    const price1 = collectibles[arr].price;

    if (arr > collectibles.length) {
        res.send("This item is not yet in stock. Check back soon!");
    }

    else {
        res.send(`So, you want the${name1} ? For ${price1}, it can be yours! `);
    }
})



const shoes = [
    { name: "Birkenstocks", price: 50, type: "sandal" },
    { name: "Air Jordans", price: 500, type: "sneaker" },
    { name: "Air Mahomeses", price: 501, type: "sneaker" },
    { name: "Utility Boots", price: 20, type: "boot" },
    { name: "Velcro Sandals", price: 15, type: "sandal" },
    { name: "Jet Boots", price: 1000, type: "boot" },
    { name: "Fifty-Inch Heels", price: 175, type: "heel" }
];


app.get('/shoes', (req, res) => {
    const minPrice = req.query.minPrice;
    const maxPrice = req.query.maxPrice;
    const type = req.query.type;


    let filteredShoes = shoes;

    if (minPrice) {
        filteredShoes = filteredShoes.filter(shoe => shoe.price >= (minPrice));
    }

    if (maxPrice) {
        filteredShoes = filteredShoes.filter(shoe => shoe.price <= (maxPrice));
    }

    if (type) {
        filteredShoes = filteredShoes.filter(shoe => shoe.type === type);
    }

    res.send(filteredShoes);

})


app.listen(3000, () => {
    console.log('Server is running on port 3000')

})
