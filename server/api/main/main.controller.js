function MainController() {}

MainController.prototype.getRoot = function(req, res) {

    res.sendFile('../client/index.html');

}

module.exports = MainController.prototype;