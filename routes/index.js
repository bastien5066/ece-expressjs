function getHomePage(req, res) {
    res.render('home.ejs');
}

function postName(req, res) {
    if (req.body.name != '') {
        res.redirect('/hello/' + req.body.name);
    } else {
    	res.redirect('/home');
    }
}

function getHelloPage(req, res) {
    res.render('hello.ejs', { name: req.params.name });
}

module.exports = { getHomePage, getHelloPage, postName };