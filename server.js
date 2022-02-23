const groceryProducts = require('./data')

const express = require('express');

const app = express();

// routes
app.get('/', (req, res) => {
    res.send(groceryProducts);
})

// dynamic route
app.get('/products/:id', (req, res) => {
    const id = req.params.id;
    const product = groceryProducts[id];
    res.send({product, id});
})


app.listen(3000, () => console.log('Port listening on 3000'));