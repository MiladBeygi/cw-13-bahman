import React, { useContext, useEffect } from "react";
import Button from "./Button";
import classes from "./ViewUsers.module.css";
import User from './User';
import { Storage } from "../App";
const ViewUsers = (props) => {
  const { fetchTasks, tasks, setTasks, currentObj } = useContext(Storage);
  useEffect(() => {
    fetchTasks(fetchTasks({ url: 'https://63dcd259df83d549ce9464cd.mockapi.io/data' }, setTasks))
  }, [fetchTasks, currentObj])
  return (
    <ul>
      <header>
        <span className={classes.columnLeft}>ID</span>
        <span className={classes.columnLeft}>Name</span>
        <span className={classes.columnRight}>Full name</span>
        <span className={classes.columnBtn}>Actions</span>
      </header>
      {tasks.map((el, index) => {
        return <User key={el.id} index={index + 1} id={el.id} firstName={el.firstName} fullName={el.fullName} />
      })}

    </ul>
  );
};

export default ViewUsers;
