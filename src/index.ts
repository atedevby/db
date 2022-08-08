import express from "express"

const app = express()
const port = 5000

app.get("/", (req, res) => {
  res.send("Hello Vadim!")
})

app.listen(port, () => console.log(`Запушен на порту ${port}`))
