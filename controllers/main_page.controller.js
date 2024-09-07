const path = require("path");
const controller = {}

controller.main_page = (req, res) => {
    res.render('main_page')
}

controller.strat_amarilla = (req, res) => {
    res.render('strat_amarilla')
}

controller.gibson = (req, res) => {
    res.render('gibson')
}

controller.login = (req, res) => {
    res.render('login')
}

controller.takamine = (req, res) => {
    res.render('takamine')
}

module.exports = controller