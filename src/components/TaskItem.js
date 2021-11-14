import React, { Component } from 'react';

class TaskItem extends Component {
    render() {
        return (
            <div id="taskItem" className="d-flex align-items-center flex-wrap p-1">
                <div id="metaDetails" className="d-flex flex-column px-2">
                    <h6 className="header text-truncate">Add task form</h6>
                    <div className="d-flex justify-content-between flex-wrap font-size-small">
                        <div className="time ">06:00AM - 01:20PM</div>
                        <div className="priority mx-1">High</div>
                    </div>
                </div>
                <div id="actions" className="d-flex">
                    <div id="delete" className="mr-1 ">
                        <button type="button" className="btn btn-outline-danger btnFontScreen">Delete</button>
                    </div>
                    <div id="completed" className="">
                        <button type="button" className=" btn btn-outline-success btnFontScreen">Completed</button>
                    </div>
                </div>

            </div>
        );
    }
}

export default TaskItem;