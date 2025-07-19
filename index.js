const express = require('express')

const useRouter = require('./src/routes/user.route')

const app = express()

app.use('/soma', useRouter);
app.listen(3000)
/*
    app.get('/', (req, res) => {
    res.send('Hello World!')
    })
*/