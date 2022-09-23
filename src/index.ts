import express from "express"
import cors from "cors"
import { news } from "./controllers/news"
import { business } from "./controllers/business"
import { state } from "./controllers/state"
import { users } from "./routes/users"
import { commercial } from "./routes/card/commercial"
import { donate } from "./routes/donate"
const app = express()

const port = 5000

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use("/news", news)
app.use("/business", business)
app.use("/state", state)
app.use("/users", users)
app.use("/commercial", commercial)
app.use("/donate", donate)

app.use("*", (request, response) => {
  response.status(404).json({
    error: true,
    message: "Роут не найден",
  })
})

app.listen(port, () => console.log(`Running on port http://localhost:${port}`))
