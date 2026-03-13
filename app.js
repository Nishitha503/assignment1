const express = require("express");
const app = express();

app.use(express.urlencoded({ extended: true }));

let username = "";

app.get("/", (req, res) => {
    res.send(`
        <form action="/submit" method="POST">
            <input type="text" name="name" placeholder="Enter your name" required>
            <button type="submit">Get Greeting</button>
        </form>
    `);
});

app.post("/submit", (req, res) => {
    username = req.body.name;
    res.redirect("/greet");
});

app.get("/greet", (req, res) => {
    res.send("Hello, " + username);
});

app.listen(3000, () => {
    console.log("Server running on http://localhost:3000");
});