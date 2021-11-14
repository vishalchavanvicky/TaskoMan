import React, { useEffect, useState } from 'react';
import TaskItem from "./TaskItem";

const axios = require('axios');

function TaskList() {
    const [taskList, setTaskList] = useState([]);
    var listItems = [];

    useEffect(() => {
        getAllTasks();
    },[]);
            
    function getAllTasks(){
        // Make a request for a user with a given ID
        axios.get('/task/getAllTasks/1')
        .then(function (response) {
            setTaskList({ taskList: response.data});
        })
        .catch(function (error) {
            console.log(error);
        })
    }
    if(taskList.length === 0){
        return (
            <React.Fragment>
                ...Loading
            </React.Fragment>
        );
    }else{
        return ( 
            <React.Fragment>
               {taskList.taskList.map((d) => <TaskItem key={d.name}>{d.name}</TaskItem>)}
            </React.Fragment>
        )
    }
}

export default TaskList;