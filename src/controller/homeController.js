import db from '../models/index'
import CRUDServices from '../services/CRUDServices'
let getHomePage = async (req, res) => {
    let data = await db.User.findAll();
    return res.render("test.ejs", { data: data });
}
let postCrud = async (req, res) => {
    await CRUDServices.createNewUser(req.body);
    console.log(req.body)
    return res.send("asddas");
}
module.exports = {
    getHomePage,
    postCrud
}