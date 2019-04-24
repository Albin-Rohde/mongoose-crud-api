const express = require('express');
const bodyParser = require('body-parser');
const { createUser, getAllUsers, getOneUser, deleteUser, updateUser } = require('./dbHandler');

const app = express();

app.use(bodyParser.json());

app.post('/api/user', async(req, res) => {
  try{
    await createUser(req.body);
    res.sendStatus(201);
  }catch(err){
    res.send(JSON.stringify(err));
  }
});

app.get('/api/user', async(req, res) => {
  try{
    const data = await getAllUsers();
    res.send(JSON.stringify(data));
  }catch(err){
    res.send(JSON.stringify(err));
  }
});

app.get('/api/user/:id', async(req, res) => {
  const { id } = req.params;
  try{
    const data = await getOneUser(id);
    res.send(JSON.stringify(data));
  }catch(err){
    res.send(JSON.stringify(err));
  }
});

app.delete('/api/user/:id', async(req, res) => {
  const { id } = req.params;
  try{
    await deleteUser(id);
    res.sendStatus(200);
  }catch(err){
    res.send(JSON.stringify(err));
  }
});

app.put('/api/user/:id', async(req, res) => {
  const { id } = req.params;
  try{
    await updateUser(id, req.body);
    res.sendStatus(200);
  }catch(err){
    res.send(JSON.stringify(err));
  }
});


module.exports = app;