import classes from './User.module.css';
import Button from './Button';
function User(props) {
    return <>
        <li>
            <span className={classes.columnLeft}>{props.id}</span>
            <span className={classes.columnLeft}>{props.firstName}</span>
            <span className={classes.columnRight}>{props.username}</span>
            <span className={classes.columnBtn}>
                <Button className={classes.btn}>DELETE</Button>
                <Button className={classes.btn}>EDIT</Button>
            </span>
        </li>
    </>
}
export default User;