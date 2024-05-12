const User = require('../database/interface/user');
const bcrypt = require('bcrypt');

class UserController {
    async login(req, res) {
        try {
            const { username, password } = req.body;
            const user = await User.getUserByUsername(username);
            // console.log(username);
            // console.log(password);
            if (!user) {
                return res.status(404).send({msg : 'User does not exist'});
            }   
            if (await bcrypt.compare(password, user.password)){
                var resUser = {
                    user_id : user.user_id,
                    username : user.username,
                    email : user.email,
                    fullname : user.fullname,
                    device : user.DeviceList,
                    task : user.TaskList
                }
                return res.status(200).send(resUser);
            }
            return res.status(404).send({msg: 'Credential is invalid'});            
        } catch (error) {
            console.log(error);
            res.status(500).send({msg : 'Internal Server Error'});
        }
    }
    async signup(req, res) {
        try {
            const {username , password, email, fullname} = req.body;
            const user = await User.getUserByUsername(username);    
            if (user != null){
                return res.status(404).send({msg : 'User already exist'});
            }
            console.log(user)
            // console.log(req)
            // console.log(username, password, email, fullname)
            const hashPassword = await bcrypt.hash(password, 10);
            await User.createUser(username, hashPassword, "", email, fullname);
            return res.status(200).send({msg : 'Create user successfully'});
        } catch (error) {
            console.log(error);
            res.status(500).send({msg : 'Internal Server Error'});
        }
    }
}

module.exports = new UserController();