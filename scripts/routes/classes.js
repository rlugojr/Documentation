// ************************** CLASSES **************************

/**
 * Show the Classes list. No version specified so get the last version and redirect to it
 */
exports.showClasses = function(req, res) {

    // TODO Find the last version in files
    var version = '2.0';

    res.writeHead(301, {
        Location: (req.socket.encrypted ? 'https://' : 'http://') + req.headers.host + '/classes/' + version
    });
    res.end();
};

/**
 * Show the Classes list.
 * @param req
 *          version - The version of babylon
 */
exports.showClassesVersion = function(req, res) {

    // TODO Get the classes list, and display them
    // TODO If the version doesn't exist, redirect to last /classes
    var version = req.params.version;

    var data = {
        version : version,
        currentUrl: "/classes"
    };

    res.render('class/classes.jade', data);
};


// ************************** CLASS **************************

/**
 * Show a Class. Nothing specified, so redirect to Classes list
 * @param req
 *          version - The version of babylon
 */
exports.showClass = function(req, res) {
    var version = req.params.version;

    res.writeHead(301, {
        Location: (req.socket.encrypted ? 'https://' : 'http://') + req.headers.host + '/classes'
    });
    res.end();
};

/**
 * Show a Class. Only a version specified, so redirect to the Classes list, with the specified version
 * @param req
 *          version - The version of babylon
 */
exports.showClassVersion = function(req, res) {
    var version = req.params.version;

    res.writeHead(301, {
        Location: (req.socket.encrypted ? 'https://' : 'http://') + req.headers.host + '/classes/' + version
    });
    res.end();
};

/**
 * Show the specified Class.
 * @param req
 *          name - Name of the Class
 *          version - The version of babylon
 */
exports.showClassVersionName = function(req, res) {

    // TODO Get the class markdown page and display it
    var name = req.params.name;
    var version = req.params.version;

    var data = {
        exist   : false,
        currentUrl: "/classes",
        name    : name,
        version : version,
        title   : 'Animation',
        content : 'An animation is a thing in Babylon.'
    };

    if(data.exist) {
        res.render('class/class.jade', data);
    }
    else {
        res.render('errorpages/404_class_not_found.jade', {});
    }
};