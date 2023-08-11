  // // index.js (your backend entry file)
  const express = require('express');
  const cors = require('cors');
  require('dotenv')=config();
  const mongoose = require('mongoose');
  const user = require('./userdetails'); // Assign the result of require to a variable
  const app = express(); // Create an instance of Express
  const Jwt = require('jsonwebtoken');
const { config } = require('dotenv');
  const JwtKey='E-commerce';
  app.use(express.json());
  app.use(cors());
  const PORT=process.env.PORT || 5000;

  
  mongoose
    .connect(process.env.mongourl, {    
      useNewUrlParser: true,
    })
    .then(() => {
      console.log('Connected to MongoDB');
    })   
    .catch((e) => console.log('Error connecting to MongoDB:', e));

  // const User =mongoose.model("UserInfo");

  app.post('/register', async (req, res) => {
    const { username, password } = req.body;
  
    try {
      const existingUser = await user.findOne({ username });
  
      if (existingUser) {
        return res.status(400).json({ msg: 'Username already exists\nplease sign in' });
      }
  
      const newUser = new user({ username, password });
      await newUser.save();
  
      Jwt.sign({ username }, JwtKey, (err, token) => {
        if (err) {
          console.error('Error signing token:', err);
          return res.status(500).json({ msg: 'Token signing error' });
        }
        
        const userObj = { username }; 
        res.json({ userObj, auth: token });
      });
  
    } catch (error) {
      console.error('Error adding a user:', error);
      res.status(500).json({ msg: 'Internal server error' });
    }
  });
  // for login 
  app.post('/login', async (req, res) => {
    const { username, password } = req.body;
  
    try {
      const userObj = await user.findOne({ username });
      if (!userObj){
        return res.status(401).json({ msg: 'Invalid Username\nPlease Create a Account' });
      }else if(userObj.password !== password){
        return res.status(401).json({msg:'Password is incorrect'})
      }else if (!userObj || userObj.password !== password) {
        return res.status(401).json({ msg: 'Invalid credentials' });
      }
      Jwt.sign({ userObj }, JwtKey, (err, token) => {
        if (err) {
          console.error('Error signing token:', err);
          return res.status(500).json({ msg: 'Token signing error' });
        }
        res.send({userObj,auth:token})
        // return res.json({ msg: 'Successfully signed in', token });
      });
      
      
    } catch (error) {
      console.error('Error signing in:', error);
      return res.status(500).json({ msg: 'Internal server error' });
    }
  });
  app.post('/add-visited', async (req, res) => {
    const { username, visitedItem } = req.body;
  
    try {
      const userObj = await user.findOne({ username });
  
      if (!userObj) {
        return res.status(404).json({ msg: 'User not found' });
      }
  
      userObj.recentlyVisited.push(visitedItem);
      await userObj.save();
  
      res.json({ msg: 'Visited item added successfully' });
    } catch (error) {
      console.error('Error adding visited item:', error);
      res.status(500).json({ msg: 'Internal server error' });
    }
  });
  

  // ... (Start the server and other necessary code)

  app.listen(PORT, () => {
    console.log(`Server started on http://localhost:${PORT}`);
  });
