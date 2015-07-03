var winston = require('winston');

/**
 * WINSTON LOGGING LEVEL HIERARCHY:
 * silly
 * debug
 * verbose
 * info
 * warn
 * error
 */

var logger = new (winston.Logger)({
    transports: [
        new winston.transports.File({
            level: 'error',
            colorize: true,
            filename: 'log/bjs-doc-error.log',
            eol: '\n'
        }),
        new winston.transports.Console({
            level: 'debug',
            handleExceptions: true,
            json: false,
            timestamp: true,
            colorize: true,
            stringify: false
        })
    ],
    exceptionHandlers: [
        new winston.transports.File({
            filename: 'log/exceptions.log',
            timestamp: true,
            maxsize: 1000000,
            humanReadableUnhandledException: true
        })
    ]
});

module.exports = logger;


