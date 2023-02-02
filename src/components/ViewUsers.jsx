import React from "react";
import Button from "./Button";
import classes from "./ViewUsers.module.css";

const ViewUsers = (props) => {
  return (
    <ul>
      <header>
        <span className={classes.columnLeft}>ID</span>
        <span className={classes.columnLeft}>Name</span>
        <span className={classes.columnRight}>Username</span>
        <span className={classes.columnBtn}>Actions</span>
      </header>
      <li>
        <span className={classes.columnLeft}>1</span>
        <span className={classes.columnLeft}>milad</span>
        <span className={classes.columnRight}>milad beygi</span>
        <span className={classes.columnBtn}>
          <Button className={classes.btn}>DELETE</Button>
          <Button className={classes.btn}>EDIT</Button>
        </span>
      </li>
      <li>
        <span className={classes.columnLeft}>1</span>
        <span className={classes.columnLeft}>milad</span>
        <span className={classes.columnRight}>milad beygi</span>
        <span className={classes.columnBtn}>
          <Button className={classes.btn}>DELETE</Button>
          <Button className={classes.btn}>EDIT</Button>
        </span>
      </li>
    </ul>
  );
};

export default ViewUsers;
