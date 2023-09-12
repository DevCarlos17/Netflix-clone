import express from "express"
import cors from "cors"
import authRoutes from "./routes/auth.routes.js"
import moviesRoutes from "./routes/movies.routes.js"

const app = express();

app.use(cors())
app.use(express.json())

//Routes
app.use(authRoutes)
app.use(moviesRoutes)

export default app;