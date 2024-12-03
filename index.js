const app = require('express')();
const PORT = 8080;

app.listen(PORT)

app.get('/test', (req, res) => {
    // req = incoming data, res = response to client
    res.status(200).send({
        smiley:'🙂',
        size: 'large'
    })
})