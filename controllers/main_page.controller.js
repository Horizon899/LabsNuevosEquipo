const path = require("path");
const controller = {}

controller.main_page = (req, res)=>{
    res.render('main_page')
}

module.exports=controller