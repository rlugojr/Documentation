//Require all routes and define general routes
/**
 * Fill the express app up with the routes
 * Be careful, the order is important !
 */

module.exports = function (app) {
    app.use('/classes', require('./routes/classes'));

    app.use(require('./routes/general'));

    // ERRORS

    // Handle 404
    app.use(function (error, req, res) {
        res.status(400);
        res.render('errorpages/404.jade', {});
    });

    // Handle 500
    app.use(function (error, req, res, next) {
        res.status(500);
        res.render('errorpages/500.jade', {});
    });

};

