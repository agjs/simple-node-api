var User = require('./user.model');

function UserController() {}
UserController.prototype.getUsers = function(req, res) {

    return new Promise(function(resolve, reject) {

        User.find({}, function(error, users) {

            if (error) {
                reject(error);
            } else {
                resolve(users);
            }

        });

    }).then(function(users) {

        res.status(200).json(users);

    }).catch(function(error) {
        console.log(error);
    });

}


UserController.prototype.createUser = function(req, res) {
    User.create({
        name: req.body.name
    }, function(error, user) {
        if (error) {
            console.log(error);
        } else {
            res.status(201).json(user);
        }
    });
}

module.exports = UserController.prototype;