const path = require("path");
const controller = {}

controller.login = (req, res) => {
    res.render('login')
}

module.exports = controller