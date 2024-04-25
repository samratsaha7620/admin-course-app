const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const adminRouter = require("./routes/admin");
const userRouter = require("./routes/user");

const BASE_URL = 'mongodb+srv://samrat7620:2KyADiGsT6BOQkgt@cluster0.uytlv72.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0';
const app = express();

app.use(cors());
app.use(express.json());

app.use("/admin", adminRouter)
app.use("/user", userRouter)


// Connect to MongoDB
// DONT MISUSE THIS THANKYOU!!
mongoose.connect(BASE_URL);

app.listen(3000, () => console.log('Server running on port 3000'));
