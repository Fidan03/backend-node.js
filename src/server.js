import express from 'express'

const express = require('express');

const app = express();

app.get('/hello', (req, res) => {
    res.json({message: "Hello World"})
});

const PORT = 5001;
app.listen(PORT, () => {
    console.log(`Server running on PORT ${PORT}`);
    
})


