import Express from 'express'

const app = new Express()

app.use((req, res, next) => {
  console.log(`${req.method} - ${req.path}`)
  next()
})

app.use(Express.static('public'))

app.listen(3000, () => {
  console.log('Server listening on port 3000')
})
