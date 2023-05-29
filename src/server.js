const express = require('express');
const cors = require('cors');
const fileUpload = require('express-fileupload');
const async = require('async');
const bcrypt = require('bcrypt');

const app = express();
const PORT = 3001;

app.use(cors());
app.use(express.json());
app.use(express.static("public"));
app.use("/images", express.static("images"));
app.use(express.urlencoded({ extended: false }))

// vJERES KODE HERv

const users = []

app.get('/users', async(req,res)=>{
    res.json(users)
})

app.post('/SignupPage', async (req, res) => {
    console.log("Receiving user data....");
    try {
        const hashedPassword = await bcrypt.hash(req.body.password, 10)
        users.push({
            id: Date.now().toString(),
            name: req.body.name,
            email: req.body.email,
            password: hashedPassword
        })
        console.log("Number of users: " + users.length)
        console.log(hashedPassword);
        console.log(req.body.email);
        res.redirect('/LoginPage')
    } catch {
        res.redirect('/SignupPage')
    }
})

app.get('/LoginPage', (req, res) => {
    // Handle GET requests to /LoginPage here
    res.send('Login page');
});

app.post('/LoginPage', async (req, res) => {
    const user = users.find(user => user.email === req.body.email)
    if (user == null) {
        console.log("couldn't find user")
        return res.status(400).send('Cannot find user')
    }
    try {
        if(await bcrypt.compare(req.body.password, user.password)) {
            console.log("Successful login")
            res.send('Success')
        } else {
            console.log("User doesn't exit, or there has been an upsii while typing")
            res.send('Not Allowed')
        }
    } catch {
        res.status(500).send()
    }
})

// ^JERES KODE HER^

app.listen(PORT, function (err) {
    if (err) console.log("Error in server setup");
    console.log("Server listening on Port", PORT);
});