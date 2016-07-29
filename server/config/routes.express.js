var userRouter = require('../api/user/user.router');
var mainRouter = require('../api/main/main.router');

module.exports = function(app) {

    app.use('/users', userRouter);

}