const path = require("path");
const controller = {}

controller.takamine = (req, res) => {
    res.render('takamine')
}

module.exports = controller