const bycript = require('bcrypt-nodejs');
const { request, response } = require('express');
const Users = require('./../models/Users');

module.exports = app => {
    const { existsOrError, notExistsError, equalsOrError } = app.api.validation
    const encryptPassword = password => {
        const salt = bycript.genSaltSync(10)
        return bycript.hashSync(password, salt)
    }

    const save = async (request, response) =>{
        const user = { ...request.body }
        if(request.params.id) user.id = request.params.id

        try {
            
            existsOrError(user.name, 'Add name!')
            existsOrError(user.email, 'Add Email!')
            existsOrError(user.password, 'Add Password!')
            existsOrError(user.confirmPassword, 'confirmation invalid!')
            equalsOrError(user.password, user.confirmPassword, 'password invalid')

            const userFromDB = (req, res, next) => {
                Users.findOne({ email: user.email },function (err, Users) {
                    if (err) {
                        global.graylog.log(err);
                    } else {
                        res.json(Users);
                    }
                })
            };

            if(!user.id){
                notExistsError(userFromDB, 'has User')
            }

        } catch (msg) {
            return response.status(400).send(msg)
            
        }
        user.password = encryptPassword(user.password)
        delete user.confirmPassword

        Users.findByIdAndUpdate(user.id,{
            $set:{
                name: user.name,
                email: user.email,
                password: user.password
            }
        },{new:true})
        .then(() => response.status(204).send())
        .catch(() => response.status(500).send(err))
    }

    const get = (request, response) => {

        const { id, name, email, admin } = request.body
    
        if (!id || !name || !email || !admin) {
            return response.status(409).json()
        }

        Users.findOne({
            _id: id,
            name: name,
            email: email
        })
            .then(user => response.status(200).json(user))
            .catch(() => response.status(409).json())
    }
    

   return { save, get }
}