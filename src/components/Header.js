import React from "react";

function Header() {
  return (
    <div id="header" className="d-flex align-items-center justify-content-between px-2">
        <h5 id="appName" className="">
          TASKOMAN
        </h5>
      <div className="d-flex justify-content-end w-100">
          {/* <button type="button" className="btn btn-outline-primary">
            Add Task
          </button>
          <button type="button" className="btn btn-outline-success">
            Show Tasks
          </button> */}   
          <img src="./img/men_avtar.png" alt="Avatar" className="avatar" />
      </div>
    </div>
  );
}

export default Header;
