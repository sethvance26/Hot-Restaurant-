const express = require('express');
const { getMaxListeners } = require('node:process');
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
        
    }
    {
        routeName: "TableTwo",
        id: 394871,
    }
]