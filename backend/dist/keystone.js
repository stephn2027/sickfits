"use strict";
exports.__esModule = true;
var schema_1 = require("@keystone-next/keystone/schema");
require("dotenv/config");
var databaseURL = process.env.DATABASE_URL || 'mongodb://localhost/keystone-sick-fits-tutorial';
var sessionConfig = {
    maxAge: 60 * 60 * 24 * 360,
    secret: process.env.COOKIE_SECRET
};
exports["default"] = schema_1.config({
    server: {
        cors: {
            origin: [process.env.FRONTEND_URL],
            credentials: true
        }
    },
    db: {
        adapter: 'mongoose',
        url: databaseURL
    },
    lists: schema_1.createSchema({
    // schema here
    }),
    // todo change roles here
    ui: {
        isAccessAllowed: function () { return true; }
    }
});
