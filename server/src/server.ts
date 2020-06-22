import express, { response } from 'express'

const app = express();


const users = [
        'Rony',
        'Raquel', 
        'Bella',
        'Charlotte',
        'Tiffany'
    ]


app.get('/users', (request, response) => {
    console.log('Listagem de usuarios')
    response.json(users)
});

app.get('/users/:id', (request, response) => {
    const id = Number(request.params.id);
    const user = users[id];

    return response.json(user)
})

app.post('/users', (request, response) => {
    const user = {
        name: "Rony",
        email: "ronylucca@gmail.com"
    }

    return response.json(user);
})


app.listen(3000)
