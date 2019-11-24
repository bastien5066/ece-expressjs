function getHomePage(req, res) {
    res.render('home.ejs');
}

function postName(req, res) {
    console.log(req.body);
    if (req.body.name != '') {
        res.redirect('hello/' + req.body.name);
    }
}

function getHelloPage(req, res) {
    res.render('hello.ejs', { name: req.params.name });
}

module.exports = { getHomePage, getHelloPage, postName };