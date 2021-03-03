const assert = require('assert');
//const connection = require('./connection');
const ClientModel = require('../model/clientmodel');

describe("Saving Client", function () {
    it("Saves new client to DB", function (done) {
        const client = new ClientModel({
            clientID: 1,
            clientName: "ClientName"
        });
        client.save().then(function () {
            assert(client.isNew === false);
            done();
        })
    })
})