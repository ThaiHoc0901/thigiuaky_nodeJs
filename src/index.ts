import yargs, { string } from "yargs";
import {
  readAllTask,
  createTask,
  readDetailTask,
  updateTask,
  deleteTask,
} from "./model/task";


yargs.command({
  command: "test",
  handler: () => {
    console.log("test");
  },
});


yargs.command({
  command: "create",
  builder: {
    id: {
      type:"string",
    },
    title: {
      type: "string",
    },
    description: {
      type: "string",
    },
  },
  handler: (args) => {
    const { id,title, description } = args;
    const newTask = createTask(id, title, description);
    console.log("Create success: ", newTask);
  },
});

yargs.command({
  command: "read-all",
  handler: () => {
    const result = readAllTask();
    console.log(("complete : "), result);
  },
});

yargs.command({
  command: "read-detail",
  builder: {
    id: {
      type: "string",
    },
  },
  handler: (args) => {
    const { id } = args;
    const task = readDetailTask(id);
    if (task) {
      console.log("task : ", task);
    } else {
      console.log("Not Found!");
    }
  },
});


yargs.command({
  command: "update",
  builder: {
    id: {
      type: "string",
    },
    title: {
      type: "string",
    },
    description: {
      type: "string",
    },
  },
  handler: (args) => {
    const { id, title, description } = args;
    const task = updateTask(id, title, description);
    if (task) {
      console.log("task updated : ", task);
    } else {
      console.log("Not found");
    }
  },
});

yargs.command({
  command: "delete",
  builder: {
    id: {
      type: "string",
    },
  },
  handler: (args) => {
    const { id } = args;
    const task = deleteTask(id);
    if (task) {
      console.log("delete task : ", task);
    } else {
      console.log("Not Found");
    }
  },
});

yargs.parse();
