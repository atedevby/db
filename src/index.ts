// @ts-nocheck
import express from "express"
import cors from "cors"
import hpp from "hpp"
// import { news } from "./controllers/news"
import { business } from "./controllers/business"
import { state } from "./controllers/state"
import { users } from "./routes/users"
import { players } from "./routes/players"
import { events } from "./routes/events"
import { commercial } from "./routes/card/commercial"
import { donate } from "./routes/donate"
import { cities } from "./routes/cities"
import { about } from "./routes/about"
import { address } from "./routes/address"
import NewsRoute from "./routes/news/NewsRoute"
import VacanciesRoute from "./routes/vacancies/VacanciesRoute"
import EntrepreneurRoute from "./routes/entrepreneur/EntrepreneurRoute"
import ResumeRoute from "./routes/resumes/ResumeRoute"
import TalonRoute from "./routes/talons/TalonRoute"
const app = express()

const port = 5000

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(hpp())

// app.use("/news", news)
app.use("/business", business)
app.use("/state", state)
app.use("/users", users)
app.use("/players", players)
app.use("/events", events)
app.use("/commercial", commercial)
app.use("/donate", donate)
app.use("/cities", cities)
app.use("/about", about)
app.use("/address", address)
app.use(NewsRoute)
app.use(VacanciesRoute)
app.use(EntrepreneurRoute)
app.use(ResumeRoute)
app.use(TalonRoute)

app.use("*", (request, response) => {
  response.status(404).json({
    error: true,
    message: "Роут не найден",
  })
})

app.listen(port, () => console.log(`Running on port http://localhost:${port}`))
