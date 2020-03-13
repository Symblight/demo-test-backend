const express = require('express')
const path = require('path')


const app = express()
const PORT = 5000

app.use(express.static('build'))
app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, 'build/index.html'))
})

app.listen(process.env.PORT || PORT, () => {
  console.log('server is up')
})
