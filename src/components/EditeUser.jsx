import React, { Fragment } from "react";
import Button from "./Button";
import classes from "./EditeUser.module.css";

const EditeUser = (props) => {
  return (
    <Fragment>
      <div className={classes.editUser}>
        <div className={classes.inpouts}>
          <div>
            <label htmlFor="name">Name</label>
            <input id="name" type="text"></input>
          </div>
          <div>
            <label htmlFor="userName">Username</label>
            <input id="userName" type="text"></input>
          </div>
        </div>
        <div className={classes.buttons}>
          <Button className={classes.buttonLeft}>Edit User</Button>
          <Button className={classes.buttonRight}>Cancel</Button>
        </div>
      </div>
    </Fragment>
  );
};

export default EditeUser;
