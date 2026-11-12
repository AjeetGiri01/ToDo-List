import { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../features/todo/todoSlice";

export default function AddForm() {
    const [task, setTask] = useState("");
    const dispatch = useDispatch();

    const submitHandler = (evt) => {
        evt.preventDefault();
        console.log(task);
        dispatch(addTodo(task));
        setTask("");
    };

    return (
        <div className="flex justify-center my-6">
            <form onSubmit={submitHandler} className="flex gap-3 w-full max-w-md bg-white p-4 shadow-md rounded-xl">
                <input 
                    type="text" 
                    placeholder="Add a new task..."
                    onChange={(e) => setTask(e.target.value)}
                    className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                />
                <button 
                    type="submit"
                    className="px-5 py-2 bg-indigo-600 text-white font-medium rounded-lg hover:bg-indigo-700 transition-colors"
                >
                    Add Task
                </button>
            </form>
        </div>
    )
}