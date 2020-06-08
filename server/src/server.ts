import express from 'express'

const app = express();

app.get('/users', (request, response) => {
    console.log('Listagem de usuarios')
    response.json([
        'Rony',
        'Raquel', 
        'Bella',
        'Charlotte',
        'Tiffany'
    ])
})

app.listen(3000)
