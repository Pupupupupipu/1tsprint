const express = require('express')
const app = express()
const port = 3000

const { User } = require('./Modules/User')

app.get('/users', async (req, res) => {
  const users = await User.findAll()
  return res.status(200).json({
    data: users
  })
})

app.get('/users/:id', async (req, res) => {
  const user = await User.findByPk(req.params.id)
  return res.status(200).json(user)
})

app.post('/users', async (req, res) => {
  try{
    const user = await User.create(req.body)
    user.reload()
    return res.status(201).json(user)
  }
  catch (e){
    return "Error"
  }
  
})

app.patch('/users/:id', async (req, res) => {
  try{
    const user = await User.findByPk(req.params.id)
    if (user){
      user.login = req.body.login
      user.password = req.body.password
      user.sub = req.body.sub
    }

    await user.save()
    return res.status(200).json(user)
  }
  catch{
    return "Error"
  }
})

app.delete('/users/:id', async (req, res) => {
  try{
    const user = await User.findByPk(req.params.id)
    user.destroy()
    return res.status(204).json()
  }
  catch{
    return "Error"
  }
})

app.listen(port, async() => {
  console.log(`Example app listening on port ${port}`)

  ;(async() =>{
    try {
        await User.sync({
            alter: true,
            force: false
        })
      } catch (error) {
        console.error(error);
    }
  });
})