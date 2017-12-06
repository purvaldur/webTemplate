const mainController = {}

mainController.getRoot = (req, res) => {
    res.render('pages/index.ejs')
}

module.exports = mainController
