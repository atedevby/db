import express from "express";

const app = express();
const port = 5000;

app.get("/", (req, res) => {
  res.json({
      message: 'hello Lepeha'
  });
})

app.listen(port, () => console.log(`Запушен на порту http://localhost:${port}`));
