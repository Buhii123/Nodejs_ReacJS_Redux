import express from "express";
import homeController from "../controller/homeController";
let router = express.Router();


let initWebRoutes = (app) => {

    router.get("/", homeController.getHomePage)

    router.post("/post-crud", homeController.postCrud)
    router.get("/get-crud", homeController.getCRUD)
    router.get("/get-crud/edit-page", homeController.getEditPage)
    router.post("/post-edit-page", homeController.postEditPage)
    router.get("/get-crud/delete-page", homeController.postDeletePage)

    return app.use("/", router)

}
export default initWebRoutes;