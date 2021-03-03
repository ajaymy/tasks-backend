const assert = require('assert');
//const connection = require('./connection');

const TaskModel = require('../model/taskmodel')

//Describe test
describe("Saving Tasks", function () {

    //create test
    it("Saves records to DB", function (done) {
        let task = new TaskModel({
            taskname: "Test Task1",
            description: "Test Description1",
            project: "Test Project",
            client: "Test Client",
            startDate: "2021-03-01T00:00:00z",
            startTime: "0800",
            endTime: "0900",
            remarks: "remarks"
        });

        task.save().then(function () {
            assert(task.isNew === false);
            done();
        })
    })

})