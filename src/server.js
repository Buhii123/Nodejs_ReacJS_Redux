import express from "express";
import bodyParser from "body-parser";
import viewEngine from "./config/viewEngine";
import initWebRoutes from "./route/web";
import connectDB from "./config/connectDB";
import CRUDServices from "./services/CRUDServices"
require('dotenv').config();

let app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }))

viewEngine(app);
initWebRoutes(app);
connectDB();


// app.use((req, res) => {
//     return res.send("Loiasdasd")
// })
let port = process.env.PORT || 3000;

app.listen(port, () => {
    console.log(`Chạy thành công trên cổng ${port}`);
})