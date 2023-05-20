module.exports = function loggerMiddleware(req, res, next) {
    console.log(`Requested ${req.url} at ${new Date().toISOString()}`);
    next();
};
