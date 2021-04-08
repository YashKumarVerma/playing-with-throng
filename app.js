const express = require("express");
const app = express();
const throng = require("throng");

const data = [];

app.get("/:id", (req, res) => {
  console.log(`URL : ${req.url}`);
  const id = req.params.id;
  if (data.includes(id)) {
    return res.json({ message: "already in", data });
  } else {
    data.push(id);
    return res.json({ message: "inserted", data });
  }
});

throng((id) => {
  app.listen(3000);
  console.log(`Started worker ${id}`);

  function ping() {
    console.log(`ping ${id}`);
  }
});
