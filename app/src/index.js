import express from 'express'

import user from './routes/user.routes.js'

const app = express()

app.use(express.json())


app.use('/api', user)

app.listen(4100)
console.log('server on port', 4100)