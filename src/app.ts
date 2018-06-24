import express from 'express';
import {createColonyTokenRequest} from "./service/colony/ColonyRequestService";
import {listPrrojectsRequest} from "./request/project/ListProjectsRequest";
import {getProjectDetailsRequest} from "./request/project/GetProjectDetails";
import {createTask} from "./request/task/CreateTask";
import {listTasksRequest} from "./request/task/ListTasksRequest";

const app: express.Express = express();

const PORT = 8080;

app.use(function(request: express.Request, response: express.Response, next) {
    response.header("Access-Control-Allow-Origin", "*");
    response.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

app.use("/app", express.static('app/'));

app.use("/landing", express.static('dev/'));

app.get('/', (request: express.Request, response: express.Response) => {
    response.status(200).send("Hello App Engine").end();
});

app.post("/colonies/create", createColonyTokenRequest);

app.get("/projects/:projectId", getProjectDetailsRequest);

app.post("/tasks/create", createTask);

app.get("/projects", listPrrojectsRequest);

app.get("/tasks", listTasksRequest);

app.listen(PORT, () => {
    console.log(`App started on port: ${PORT}`);
});

const returnDummyData = async (request : express.Request, response: express.Response) => {

    const dummyData = {projectList: [{projectName: "Project 1", projectSomething: "SomeMore"}]};

        response.status(200).send(JSON.stringify(dummyData)).end();
};

app.get("/data", returnDummyData);
