import React, { useState,useEffect } from 'react'
import "./Users.css"
import { deleteData, getData, sendData, updateData } from './Api';

const Users = () => {
    const [person, setPerson] = useState("");
    const [gender, setGender] = useState("");
    const [state, setState] = useState([]);
    const [isEdit, setIsEdit] = useState(false);
    const [usernum,setUsernum] = useState("");

    function handleUser(){
        const userObj = {
            name:person,
            gender:gender
        }
        sendData(userObj,setState,setPerson)
    }
    // useEffect(()=>{
    //   getData(setState)
    // },[])
    function handleData(){
      getData(setState)
    }
    function handleDelete(id){
      deleteData(id,setState)
    }
    function handleEdit(id){
      setIsEdit(true)
      setUsernum(id)
    }
    function handleUpdate(){
      const userObj = {
        name:person,
        gender:gender
    }
    updateData(usernum,userObj,setState,setPerson,setIsEdit)
    }
  return (
    <div className='create-user'>
        <h2>New User</h2>
        <input type='text' 
              value={person} 
              onChange={(e)=>{setPerson(e.target.value)}} 
                placeholder={isEdit === true ? "Update me...":"Enter Something..."}
              />
        <div>
        <input type='radio'
               name='gender'
                value="male" 
                onChange={(e)=>{setGender(e.target.value)}}/><span>Male</span>
        <input type='radio' 
                name='gender' 
                value="female" 
                onChange={(e)=>{setGender(e.target.value)}}
                /><span>Female</span>
        </div>
        <div>
        {
          isEdit === false ? 
          <button className='create-btn' onClick={handleUser}>Create User</button>
          : 
          <button className='create-btn' onClick={handleUpdate}>Update User</button>
        }
        
        {
          state.length === 0 && <button className='get-data-btn' onClick={handleData}>Get Data</button> 
        }
        </div>
        {state.length > 0 && <table border="box" rules='all' style={{width:"100%"}}>
          <thead>
            <tr>
              <th>Name</th>
              <th>gender</th>
            </tr>
          </thead>
          <tbody>
            {
              state.map((ele)=>{
                return <tr>
                  <td>{ele.name}</td>
                  <td>{ele.gender}</td>
                  <td><button onClick={()=>{
                    handleEdit(ele.id)
                  }}>Edit</button></td>
                  <td><button onClick={()=>{
                    handleDelete(ele.id)
                  }}>Delete</button></td>

                </tr>
              })
            }
          </tbody>
        </table>}
    </div>
  )
}

export default Users;