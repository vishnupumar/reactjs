import React from 'react'

export default function TodoItems({ele, handleDelete}) {

    function btnDelete(){
        handleDelete(ele.id)
    }
  return (
    <div className='todo-item' style={{display:"flex"}}>
        <p>{ele.task} </p>
        <button className='todo-item-delete' onClick={btnDelete}>Delete</button>
    </div>
  )
}
