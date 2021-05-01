const express = require('express');
// const { getMaxListeners } = require('node:process');
const path = require('path');

const app = express();
const PORT = 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const customers = [
    {
        routeName: "TableOne",
        id: 394871,
        email: 'dan@gmail.com',
        phone: '3984712'
        
    },
    {
        routeName: "TableTwo",
        id: 394871,
        email: 'bob@gmail.com',
        phone: '8045021'
    },
];

app.get('/', (req, res) => {
console.log(__dirname);
 res.sendFile(path.join(__dirname, 'home.html'));
 
app.get('/add', (req, res) => 
res.sendFile(path.join(__dirname, 'reserve.html')));

app.get('/tables', (req, res) => 
res.sendFile(path/join(__dirname, 'tables.html')));

app.get('/api/waitlist', (req, res) =>
res.json(customers));

app.get('/api/customers', (req, res) => res.json(customers));

app.get('/api/customers/:customer', (req, res) => {
    const chosen = req.params.customer;

    console.log(chosen);

    for (let i = 0; i < customers.length; i++) {
        if (chosen === customers[i].routeName) {
            return res.json(customers[i]);
        }
    }
    return res.json(false)
});

app.post('/api/customers', (req, res) => {
    const newCustomer = req.body;

    newCustomer.routeName = newCustomer.email.replace(/\s+/g, '').toLowerCase();
    console.log(newCustomer);

    customers.push(newCustomer);
    res.json(newCustomer);
});
app.listen(PORT, () => console.log(`App listening on PORT ${PORT}`))});