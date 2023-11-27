const express = require('express');
const MOCK_DATA = require('../utils/mock/post.mock');
const router = express.Router();


router.get('/all', (req, res) => {
    return res.json(MOCK_DATA)
})


router.post('/create', (req, res) => {
    MOCK_DATA.push({
        fname: 'test them moi',
        uname: 'test',
        gender:'chua xac dinh'
    })
    return res.json(MOCK_DATA)
})

module.exports = router;