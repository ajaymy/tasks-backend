const assert = require('assert');
//const connection = require('./connection');
const ProjectModel = require('../model/projectmodel');

describe("Saving Project", function () {
    it("Saves new project to DB", function (done) {
        const project = new ProjectModel({
            projectID: 12,
            projectName: "Projectname",
            projectDescription: "desc"
        });
        project.save().then(function () {
            assert(project.isNew === false);
            done();
        })
    })
})