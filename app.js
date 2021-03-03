const express = require('express');
const app = express();
const mongoose = require('mongoose');
const TaskModel = require('./model/taskmodel');
const ClientModel = require('./model/clientmodel');
const ProjectModel = require('./model/projectmodel');
require('dotenv/config');

//Middleware
app.use(express.urlencoded({ extended: true })); // parse url-encoded bodies
app.use(express.json()); //to parse the JSON requests.

app.all('*', function (req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header(
        'Access-Control-Allow-Headers',
        'Content-Type, Content-Length, Authorization, Accept, X-Requested-With'
    );
    res.header('Access-Control-Allow-Methods', 'PUT, POST, GET, DELETE');
    next();
});

//Routes
app.get('/', async (req, res) => {

    res.json("We are HOME!!")
});

app.get('/taskslist', async (req, res) => {
    try {
        const tasks = await TaskModel.find();
        res.json(tasks);
    }
    catch (err) {
        res.json({ message: err });
    }
})

app.get('/projectlist', async (req, res) => {
    try {
        const projects = await ProjectModel.find();
        res.json(projects);
    } catch (err) {
        res.json({ message: err });
    }
});
app.get('/clientlist', async (req, res) => {
    try {
        const clients = await ClientModel.find();
        res.json(clients);
    } catch (err) {
        res.json({ message: err });
    }
});
app.get('/task/:name', (req, res) => {

    TaskModel.findOne({ taskname: req.params.name })
        .populate("ProjectSchema")
        .then(function (dbTasks) {
            res.json(dbTasks)
        })
        .catch(function (err) {
            res.json(err)
        })

});

app.post('/NewTask', async (req, res) => {
    let tname = req.body.TaskName;
    let tDesc = req.body.TaskDescription;
    let proID = req.body.Project;
    let client = req.body.Client;
    let sdate = req.body.StartDate;
    let stime = req.body.StartTime;
    let eTime = req.body.EndTime;
    let remarks = req.body.Remarks;
    const taskData = new TaskModel({
        taskname: tname,
        description: tDesc,
        project: proID,
        client: client,
        startDate: sdate,
        startTime: stime,
        endTime: eTime,
        remarks: remarks
    });
    try {
        const savedTask = await taskData.save();
        res.json({ message: true });
    } catch (err) {
        res.json({ message: err });
    }
});


app.post('/CreateProject', async (req, res) => {
    let id = req.body.ProjectID;
    let name = req.body.ProjectName;
    let desc = req.body.Desc;

    const project = new ProjectModel({
        projectID: id,
        projectName: name,
        projectDescription: desc
    });
    try {
        const savedProject = await project.save();
        res.json(project);

    } catch (err) {
        res.json({ message: err });
    }
});

app.post('/CreateClient', async (req, res) => {
    let id = req.body.ClientID;
    let name = req.body.ClientName;


    const client = new ClientModel({
        clientID: id,
        clientName: name
    });
    try {
        const savedClient = await client.save();
        res.json(client);

    } catch (err) {
        res.json({ message: err });
    }
});


//connect to DB

mongoose.connect(process.env.DB_CONNECTION,
    { useNewUrlParser: true, useUnifiedTopology: true },
    () => {
        console.log("Connected to MongoDB Atlas - free DB hosting");
    });



//listen

app.listen(process.env.PORT);
console.log(`Server is up running at port:${process.env.PORT}`);
