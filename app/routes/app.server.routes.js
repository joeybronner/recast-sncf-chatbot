module.exports = function(app) {
    app.route('/').get(function (req, res) {
        res.render('index', {
            user: JSON.stringify(req.user)
        });
    });
};
