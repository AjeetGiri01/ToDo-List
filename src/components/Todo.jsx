import { useSelector } from "react-redux";
import AddForm from "./AddForm";
import { useDispatch } from "react-redux";
import { deleteTodo } from "../features/todo/todoSlice";
import { marksAsDone } from "../features/todo/todoSlice";

export default function Todo() {
    const todos = useSelector((state) => state.todos);
    console.log(todos);
    const dispatch = useDispatch();

    const clickHandler = (id) => {
        console.log("delete", id);
        dispatch(deleteTodo(id));
    };

    const markAsDoneHandler = (id) => {
        console.log("Mark As Done", id);
        dispatch(marksAsDone(id));
    }

    return (
        <>
            <AddForm /> 
            <hr />
            <h2>Tasks ToDo</h2>
            <ul>
                {todos.map((todo) => (
                    <li key={todo.id}>
                        <span style={{ textDecoration: todo.isDone ? "line-through" : "none" }}>
                            {todo.task}
                        </span>
                        <button onClick={() => clickHandler(todo.id)}>Delete</button>
                        <button onClick={() => markAsDoneHandler(todo.id)}>{todo.isDone ? "Undo" : "Mark as Done"}</button>
                    </li>
                ))}
            </ul>
        </>
    );
}