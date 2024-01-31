// const express = require("express");
// const dotenv = require("dotenv");
// const data = require("./data/data");

// const { chats } = data;

// const app = express();
// dotenv.config();

// app.get('/', (req, res) => {
//     res.send("API is Running Successfully");
// });

// app.get('/api/chat', (req, res) => {
//     console.log("Sending chats:", chats);
//     res.send(chats);
// });


// app.get('/api/chat/:id', (req, res) => {
//     const singleChat = chats.find((c) => c._id === req.params.id);
//     res.send(singleChat);
// });

// const PORT = process.env.PORT || 5000;

// app.listen(PORT, () => console.log(`Server Started on PORT ${PORT}`));


const express = require("express");
const dotenv = require("dotenv");
const path = require("path");
const chats = require("./data/data"); // Update this line

const app = express();
dotenv.config();


app.get('/', (req, res) => {
    res.send("API is Running Successfully");
});

app.get('/api/chat', (req, res) => {
    res.send(chats);
});

app.get('/api/chat/:id', (req, res) => {
    const singleChat = chats.find((c) => c._id === req.params.id);
    res.send(singleChat);
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server Started on PORT ${PORT}`));
