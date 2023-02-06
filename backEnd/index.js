const express = require('express')
const mongoose = require('mongoose')
const dotenv = require('dotenv')
const app = express()
const authRoute = require('./routes/auth')
const question = require('./routes/question')
const answer = require('./routes/answer')
const PORT = process.env.PORT || 5000

app.use(express.json())
dotenv.config()

mongoose.connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(() => console.log('Database Connected!')).catch((err) => console.log(err));

app.use('/api/auth', authRoute)
app.use('/api/question', question)
app.use('/api/answer', answer)

app.listen(PORT, () => {
    console.log('Server started at PORT: 5000')
})