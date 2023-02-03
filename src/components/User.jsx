import classes from './User.module.css';
import Button from './Button';
import { useContext } from 'react';
import { Storage } from '../App';
function User(props) {
    const { fetchTasks, tasks, setTasks, setCurrentObj, setChangingObj } = useContext(Storage);
    const deleteHandler = (event) => {
        console.log(event.target.parentElement.id);
        const deletedId = event.target.parentElement.id;
        fetchTasks({
            url: `https://63dcd259df83d549ce9464cd.mockapi.io/data/${deletedId}`,
            method: 'DELETE',
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
        }, (data) => {
            setCurrentObj(data);
        })
    }
    const editHandler = (event) => {
        console.log(event.target.parentElement.id);
        const changingId = event.target.parentElement.id;
        const changingObj = tasks.find((el) => el.id === changingId);
        // console.log(changingObj)
        setChangingObj(changingObj);
    }
    return <>
        <li>
            <span className={classes.columnLeft}>{props.index}</span>
            <span className={classes.columnLeft}>{props.firstName}</span>
            <span className={classes.columnRight}>{props.fullName}</span>
            <span id={props.id} className={classes.columnBtn}>
                <Button onClick={deleteHandler} className={classes.btn}>DELETE</Button>
                <Button onClick={editHandler} className={classes.btn}>EDIT</Button>
            </span>
        </li>
    </>
}
export default User;