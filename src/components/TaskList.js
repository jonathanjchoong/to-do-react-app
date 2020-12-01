import React, {useState} from 'react';
import TaskItem from './TaskItem';
import TodoButton from './TodoButton';
import '../App.css';

function TaskList() {
    const [tasks, setTasks] = useState([]); //set default state to empty array of tasks
    
    const addTask = task => {
        const newTasks = [task, ...tasks]; //add new task to array of old tasks
        setTasks(newTasks); //set the state to the new array
    }    

    const removeTasks = id => {
        const tasksRemoved = [...tasks].filter( function(task){
            return task.id !== id; //filter out task with the id passed in
        }); //tasksRemoved is updated array with the removed tasks 
        setTasks(tasksRemoved); //update the current tasks with the filtered array
    }

    const completeTasks = comptask => { 
        const compArr = [...tasks];
        compArr.find(function(task){
            return task.id === comptask;
        }).complete = "true";
        setTasks(compArr);
    }
    
    // returns array of items which are marked incomplete
    const itemIncomplete = () => {
        const taskIncomplete = [...tasks].filter(function(task) {
            return task.complete !== "true";
        });
        return taskIncomplete;
    }

    //returns array of items which are marked complete
    const itemComplete = () => {
        const taskComplete = [...tasks].filter(function(task) {
            return task.complete === "true";
        });
        return taskComplete;
    }

    return (
        <div>
            {/* task bar */}
            <TodoButton onSubmit={addTask}/>
            
            {/* (incomplete) task list */}
            <div className="to-do">
                <h2>Things To Do</h2>
                <div className="activityList">
                    <TaskItem tasks={itemIncomplete()} removeTasks={removeTasks} completeTasks={completeTasks}/>     
                </div>
            </div>  
            
            {/* completed tasks */}
            <div className="completed">
                <h2>Completed</h2>
                <TaskItem tasks={itemComplete()} removeTasks={removeTasks} completeTasks={completeTasks}/>
            </div>
            
        </div>
    )
}

export default TaskList

