import express from "express";
import "dotenv/config"
const app = express();


const PORT = process.env.PORT || 8000

app.get('/', async (req, res) => {
    return res.json({ message: "It's get request" });
})

app.listen(
    PORT, () => console.log(`Server is running on PORT ${PORT}`)
)