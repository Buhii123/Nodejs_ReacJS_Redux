import express from "express";
import homeController from "../controller/homeController";
let router = express.Router();


let initWebRoutes = (app) => {

    router.get("/", homeController.getHomePage)

    router.post("/post-crud", homeController.postCrud)
    return app.use("/", router)

}
export default initWebRoutes;