import { useState } from "react";
import "./TextBox.css";
import Todo from "./Todo";
import TodoItems from "./TodoItems";

function TextBox(){
    const [todos , setTodos] = useState([]);

    function addTodo(todo){
        if(todo !== ""){
         setTodos([...todos,{
            id:Date.now(),
            task:todo
            }
        ])
        }
        
    }
    const handleDelete = (id)=>{
        setTodos(todos.filter((ele)=>{
            return ele.id !== id
        }))
    }
    
     
    return (<div className="text-box-div">
            <Todo addTodo={addTodo} delete={handleDelete} />
            {todos.map((ele)=><TodoItems ele={ele} handleDelete={handleDelete} />)}
    </div>)
}

export default TextBox;