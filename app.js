 const express = require("express");
const app = express();

app.use(express.urlencoded({ extended: true }));

let username = "";

// Home page
app.get("/", (req, res) => {
  res.send(`
  <html>
  <head>
    <title>Name App</title>
  </head>
  <body style="font-family: Arial; background:#f2f2f2; text-align:center; padding-top:120px;">
    
    <div style="background:white; padding:30px; width:300px; margin:auto; border-radius:10px; box-shadow:0 0 10px rgba(0,0,0,0.1);">
      <h2>Enter Your Name</h2>
      <form method="POST" action="/submit">
        <input type="text" name="name" placeholder="Enter name" required 
        style="padding:10px; width:90%; margin-top:10px;">
        <br><br>
        <button type="submit" style="padding:10px 20px; background:#4CAF50; color:white; border:none; border-radius:5px;">
          Submit
        </button>
      </form>
    </div>

  </body>
  </html>
  `);
});

// POST request
app.post("/submit", (req, res) => {
  username = req.body.name;
  res.redirect("/greet");
});

// GET request
app.get("/greet", (req, res) => {
  res.send(`
  <body style="font-family: Arial; text-align:center; margin-top:150px;">
    <h1>Hello ${username} !</h1>
  </body>
  `);
});

app.listen(3000, () => {
  console.log("Server running on http://localhost:3000");
});