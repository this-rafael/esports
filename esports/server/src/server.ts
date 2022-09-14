import express from 'express';

const app = express()


app.get('/test', (request, response) => {
    response.json({
        message: 'hello world!'
    })
})


app.listen(3000, console.log)