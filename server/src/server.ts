import express, { response, request } from 'express'
import routes from './routes';
import path from 'path';

const app = express();

app.use(express.json());

app.use('/uploads', express.static(path.resolve(__dirname, '..', 'uploads')));

app.use(routes);

app.get('/', (request, response) => {
    return response.json({message: 'Hello World'});

})


app.listen(3333)
