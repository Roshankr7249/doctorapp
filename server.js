const express = require("express");
const cors = require("cors");
const connectDB = require("./config/db");
const fs=require('fs');
const path=require('path');

require("dotenv").config();

const userRoutes=require('./routes/userRoutes')

const app = express();

connectDB();

app.get("/",(req,res)=>{
  res.send("base api")
})

app.get('/doctors', (req, res)=>{
  const data=require('./doctor.json');
  res.json(data);
  console.log("data fetched");
})


app.post('/appointments', (req, res) => {
  
  const newAppointment = req.body;
  newAppointment.date = new Date();

  appointments.push(newAppointment);
  res.json({ message: 'Appointment created successfully', appointment: newAppointment });
});

app.get('/appointments', (req, res) => {
  res.json(appointments);
});


app.use(express.json());
app.use(cors());

app.use("/api/auth", userRoutes);


const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

