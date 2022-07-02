const express = require("express");
const cors = require("cors")

const app = express();

app.use(express.json());
app.use(cors())

const PORT = 4001;

const users = [
  { 
    id: 1, 
    name: "Leanne Graham", 
    phone: "+998 99 123 32 23",
    email: "Sincere@april.biz" 
},
  { 
    id: 2,
    name: "Ervin Howell",
    phone: "+998 99 123 32 23",
    email: "Shanna@melissa.tv", 
},
  {  
    id: 3,
    name: "Clementine Bauch",
    phone: "+998 99 123 32 23",
    email: "Shanna@melissa.tv",
 },
  { 
    id: 4, 
    name: "Patricia Lebsack",
    phone: "+998 99 123 32 23",
    email: "Julianne.OConner@kory.org", 
 },
 { 
    id: 5, 
    name: "CHelsey Dietrich",
    phone: "+998 99 123 32 23",
    email: "Lucio_Hettinger@annie.ca", 
 },
 { 
    id: 6, 
    name: "Mrs, Dennis schulist",
    phone: "+998 99 123 32 23",
    email: "Karley_Dach@jasper.info", 
 },
 { 
    id: 7, 
    name: "Kurtis Weissnat",
    phone: "+998 99 123 32 23",
    email: "Telly.Hoeger@billy.biz", 
 },
 { 
    id: 8, 
    name: "Nicholas Runolfsdottir V",
    phone: "+998 99 123 32 23",
    email: "Sherwood@rosamond.me", 
 },
 { 
    id: 9, 
    name: "Glenna Reichert",
    phone: "+998 99 123 32 23",
    email: "Chaim_McDermott@dana.io", 
 },
 { 
    id: 10, 
    name: "Clementina DuBuque",
    phone: "+998 99 123 32 23",
    email: "Rey.Padberg@karina.biz", 
 },

];

app.get("/", (req, res) => {
  res.send("bosh sahifaga hush kelibsiz.");
});

app.get("/users", (req, res) => {
  res.send(users);
});

app.post("/users", (req, res) => {
  const { name, priche } = req.body;

  users.push({
    id: users.length + 1,
    name,
    priche,
  });

  res.status(201).send("created");
});

app.put("/users", (req, res) => {
  const { name, priche } = req.body;

  users.forEach((user, i) => {
    if (user.name === name) {
      user.priche = priche;
    }
  });

  res.send("ok");
});

app.delete("/users", (req, res) => {
  const { name } = req.body;

  users.forEach((user, i) => {
    if (user.name === name) {
      users.splice(i, 1);
    }
  });

  res.send("deleted");
});

app.listen(PORT, () => {
  console.log(`server ${PORT}-portda iwlayapdi....`);
});
