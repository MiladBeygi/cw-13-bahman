import React, { Fragment, useContext } from "react";
import Button from "./Button";
import classes from "./EditeUser.module.css";
import { Storage } from "../App";
const EditeUser = (props) => {
  const { fetchTasks, tasks, setTasks, changingObj, setChangingObj, setCurrentObj } = useContext(Storage);
  const editUserHandler = (event) => {
    fetchTasks({
      url: `https://63dcd259df83d549ce9464cd.mockapi.io/data/${changingObj.id}`,
      method: 'PUT',
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
      body: changingObj,
    }, (data) => {
      setCurrentObj(data);
      setChangingObj({ firstName: '', fullName: '' });
    })
  }
  const cancelHandler = (event) => {
    setChangingObj({ firstName: '', fullName: '' });
  }
  const firstNamechangeHandler = (event) => {
    setChangingObj((prevstate) => {
      return { ...prevstate, firstName: event.target.value }
    });
  }
  const fullNameChangeHandler = (event) => {
    setChangingObj((prevstate) => {
      return { ...prevstate, fullName: event.target.value }
    });
  }
  return (
    <Fragment>
      <div className={classes.editUser}>
        <div className={classes.inpouts}>
          <div>
            <label htmlFor="name">Name</label>
            <input onChange={firstNamechangeHandler} value={changingObj.firstName} id="name" type="text" />
          </div>
          <div>
            <label htmlFor="userName">Username</label>
            <input onChange={fullNameChangeHandler} value={changingObj.fullName} id="userName" type="text" />
          </div>
        </div>
        <div className={classes.buttons}>
          <Button onClick={editUserHandler} className={classes.buttonLeft}>Edit User</Button>
          <Button onClick={cancelHandler} className={classes.buttonRight}>Cancel</Button>
        </div>
      </div>
    </Fragment>
  );
};

export default EditeUser;
