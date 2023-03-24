import { render } from 'ejs';
import db from '../models/index'
import CRUDServices from '../services/CRUDServices'
let getHomePage = async (req, res) => {
    let data = await db.User.findAll();
    return res.render("test.ejs", { data: data });
}
let postCrud = async (req, res) => {
    await CRUDServices.createNewUser(req.body);
    return res.redirect('/get-crud');
}
let getCRUD = (async (req, res) => {
    let data = await CRUDServices.getAllUsers();

    return res.render('display-CRUD.ejs', { datatable: data });

})
let getEditPage = (async (req, res) => {

    let data = await CRUDServices.editUser(req.query.getId);
    return res.render('display-edit-page.ejs', { dataUser: data })

})

let postEditPage = (async (req, res) => {
    let data = req.body;
    await CRUDServices.postEdit(data);
    return res.redirect('/get-crud');
})

let postDeletePage = (async (req, res) => {
    let id = req.query.getId;
    await CRUDServices.postDelete(id);
    return res.redirect('/get-crud');
})
module.exports = {
    getHomePage,
    postCrud,
    getCRUD,
    getEditPage,
    postEditPage,
    postDeletePage

}