const path = require("path");
const controller = {}

controller.gibson = (req, res) => {
    res.render('gibson')
}

module.exports = controller