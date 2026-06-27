// file system module
const fs = require("fs");
const filepath = "D:\\Web Development\\Node.js\\01_todo\\tasks.json";



const loadTasks = () => {
  // failure is bound to happen to we have to use try and catch
  try {
    const dataBuffer = fs.readFileSync(filepath);      // gives databuffer(something like an object)
    const dataJSON = dataBuffer.toString();            // convert  df into string
    return JSON.parse(dataJSON);                       // convert dataJSON into JSON
  } catch (error) {
    return [];
  }
};

const saveTasks = (tasks) => {
  const dataJSON = JSON.stringify(tasks);
  fs.writeFileSync(filepath, dataJSON);
};

// -- HOMEWORK -- 
const removeTask = (index) => {
  const tasks = loadTasks();
  tasks.splice(index-1, 1);
  saveTasks(tasks);
  console.log(`${index} task deleted`);
  
}

const addTask = (task) => {
  // to add the task we have to first load it
  const tasks = loadTasks();
  tasks.push({ task });          // pushing an object
  // fe have to save it finally
  saveTasks(tasks);
  console.log("Task added ", task);
};

const listTasks = () => {
  const tasks = loadTasks();
  tasks.forEach((task, idx) => console.log(`${idx + 1} - ${task.task}`));
};



// TO grab anything from cli we use {process.argv}
// node filepath add "xyz"
//   0      1     2    3
const command = process.argv[2];
const argument = process.argv[3];



// interface
// console.log(process.argv);
if (command === "add") {
  addTask(argument);
} else if (command === "list") {
  listTasks();
} else if (command === "remove") {
  // anything that comes up from browser or cli comes in string format
  // So we need to convert it into integer
  removeTask(parseInt(argument));
} else {
  console.log("Command Not Found !!");
}
