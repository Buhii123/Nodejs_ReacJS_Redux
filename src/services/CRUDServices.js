import bcrypt from 'bcryptjs';
import db from '../models/index';
import sequelize from 'sequelize';
var salt = bcrypt.genSaltSync(10);

let createNewUser = async (data) => {
    return new Promise(async (resolve, reject) => {
        try {
            let hashPasswordFromBcrypt = await hashUserPassword(data.password)
            await db.User.create({
                email: data.email,
                password: hashPasswordFromBcrypt,
                firstName: data.firstName,
                lastName: data.lastName,
                address: data.address,
                phonenumber: data.phonenumber,
                gender: data.gender === '1' ? true : false,
                roleId: data.roleId,
            })
            resolve('ok nha');
        }
        catch (e) {
            reject(e);
        }
    })

}


let getAllUsers = () => {
    return new Promise(async (resolve, reject) => {
        try {

            let users = await db.User.findAll({ raw: true });

            resolve(users);
        } catch (e) {
            reject(e);
        }
    })
}

let editUser = (id) => {
    return new Promise(async (resolve, reject) => {
        try {
            let user = await db.User.findOne({
                where: { id },
                raw: true

            });

            resolve(user);
        } catch (e) {
            reject(e);
        }
    })
}


let postEdit = (data) => {
    return new Promise(async (resolve, reject) => {

        try {

            let userUpdate = await db.User.findOne({
                where: { id: data.id },
                raw: false
            });

            if (userUpdate) {


                userUpdate.firstName = data.firstName;
                userUpdate.lastName = data.lastName;
                userUpdate.address = data.address;
                userUpdate.phonenumber = data.phonenumber;
                await userUpdate.save();
                console.log(userUpdate.firstName);
                resolve();
            }
            else {
                resolve();
            }



        }
        catch (e) {
            reject(e)
        }
    })
}

let postDelete = (id) => {
    return new Promise(async (resolve, reject) => {
        try {

            let userDelete = await db.User.findOne({
                where: { id: id },
            });
            await userDelete.destroy();
            resolve();
        }
        catch (e) {
            reject(e);
        }
    })
}

let hashUserPassword = (password) => {
    return new Promise(async (resolve, reject) => {
        try {
            var hashPassword = await bcrypt.hashSync(password, salt);
            resolve(hashPassword);
        } catch (e) {
            reject(e)
        }
    })
}
module.exports = {
    createNewUser,
    getAllUsers,
    editUser,
    postEdit,
    postDelete
}

