import React from "react";
import Button from "./Button";
import classes from "./ViewUsers.module.css";
import User from './User';
const ViewUsers = (props) => {
  return (
    <ul>
      <header>
        <span className={classes.columnLeft}>ID</span>
        <span className={classes.columnLeft}>Name</span>
        <span className={classes.columnRight}>Username</span>
        <span className={classes.columnBtn}>Actions</span>
      </header>
      <User id='1' firstName='milad' username='milad beygi' />
    </ul>
  );
};

export default ViewUsers;
