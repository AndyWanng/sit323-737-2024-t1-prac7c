const winston = require('winston');

const logger = winston.createLogger({
    level: 'info',
    format: winston.format.combine(
        winston.format.timestamp(),
        winston.format.printf(info => `${info.timestamp} ${info.level}: ${info.message}`)
    ),
    transports: [
        new winston.transports.Console(),
        new winston.transports.File({ filename: '../logs/combined.log' }),
        new winston.transports.File({ filename: '../logs/error.log', level: 'error' })
    ],
});

module.exports = logger;
