import express from 'express'
import mongoose from 'mongoose'

const app = express(),
 PORT = 4000

await mongoose.connect("mongodb+srv://expenser:code1234@expenser-mern.xg9kxlp.mongodb.net/?retryWrites=true&w=majority")

console.log('DB connected succesfully')

app.get('/', (req, res) => {
  res.send('Hello')
})

app.listen(PORT, () => {
  console.log(`Server running at port ${PORT}`)
})