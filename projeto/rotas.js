const express = require('express');
const path = require('path');
const router = express.Router(); // Criando o roteador

router.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'html/apresenta.html'))
})
router.get('/bio', (req, res) => {
    res.sendFile(path.join(__dirname, 'html/bio.html'))
})
router.get('/projeto', (req, res) => {
    res.sendFile(path.join(__dirname, 'html/projeto.html'))
})


module.exports = router