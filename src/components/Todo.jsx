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
        <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50 py-10 px-4">
            <div className="max-w-md mx-auto">
                <AddForm />
                
                <div className="mt-8 bg-white/80 backdrop-blur-md rounded-2xl shadow-xl p-6 border border-gray-100">
                    <h2 className="text-xl font-bold text-gray-800 mb-4 pb-2 border-b border-gray-100 flex items-center justify-between">
                        <span>Tasks ToDo</span>
                        <span className="text-xs font-semibold px-2.5 py-1 bg-indigo-100 text-indigo-700 rounded-full">
                            {todos.length} Tasks
                        </span>
                    </h2>
                    
                    <ul className="space-y-3">
                        {todos.map((todo) => (
                            <li 
                                key={todo.id}
                                className="flex items-center justify-between p-3.5 bg-gray-50 hover:bg-gray-100/80 rounded-xl transition-all border border-gray-200/60 shadow-sm"
                            >
                                <span 
                                    className={`flex-1 mr-3 font-medium text-gray-700 ${
                                        todo.isDone ? "line-through text-gray-400" : ""
                                    }`}
                                >
                                    {todo.task}
                                </span>
                                
                                <div className="flex items-center gap-2">
                                    <button 
                                        onClick={() => markAsDoneHandler(todo.id)}
                                        className={`px-3 py-1.5 text-xs font-semibold rounded-lg transition-colors ${
                                            todo.isDone 
                                                ? "bg-amber-100 text-amber-700 hover:bg-amber-200" 
                                                : "bg-emerald-100 text-emerald-700 hover:bg-emerald-200"
                                        }`}
                                    >
                                        {todo.isDone ? "Undo" : "Mark as Done"}
                                    </button>
                                    
                                    <button 
                                        onClick={() => clickHandler(todo.id)}
                                        className="px-3 py-1.5 text-xs font-semibold bg-rose-100 text-rose-700 hover:bg-rose-200 rounded-lg transition-colors"
                                    >
                                        Delete
                                    </button>
                                </div>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
}