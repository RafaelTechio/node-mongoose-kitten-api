module.exports = class Connection {
    connected = false;

    constructor(user, pass, ip, database) {
        this.user = user;
        this.pass = pass;
        this.ip = ip;
        this.database = database;
    }

    async connect() {}
};
