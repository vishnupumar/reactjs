import { useState } from "react";

const Todo = ({addTodo}) => {
  const [todo, setTodo] = useState("");

  const handleText =(e) => {
    setTodo(e.target.value)
  }
  const handleSubmit = () =>{
    addTodo(todo)
    setTodo({
      id:"",
      task:""
    })
  }

  return (
    <div>
        <input type="text" name="textBox" value={todo.task} onChange={handleText} placeholder="Enter Some todos..." />
        <button class="textBtn" type="submit" onClick={handleSubmit}>submit</button>
    </div>
  )
}

export default Todo;