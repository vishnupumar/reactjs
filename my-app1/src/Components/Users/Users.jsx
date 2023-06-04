import { useState } from "react";
import FilterUsers from "./FilterUsers";

function Users(){
    const [users, setUsers] = useState([]);
    const [allusers, setAllusers] = useState([])

    const getUsers = ()=>{
        fetch("https://randomuser.me/api/?results=30")
        .then((res)=>res.json())
        .then((res)=> {
            setUsers(res.results)
            setAllusers(res.results)
        })
    }

    function usersFilter(state){
        setUsers(state)
    }
    return (
        <div>
            <h2>Users Information</h2>
            <button onClick={getUsers}>Get Users</button>

            {
                users.length > 0 && <FilterUsers users={allusers} usersFilter={usersFilter} />
            }

            {users.length > 0 && <table width="100%" frame="box" rules="all">
                <thead>
                    <tr>
                        <th>Image</th>
                        <th>Name</th>
                        <th>Gender</th>
                        <th>Email</th>
                        <th>City</th>
                    </tr>
                </thead>
                <tbody align="center">
                    {users.map((ele)=>{
                        return (<tr>
                            <td><img src={ele.picture.large} alt="person" style={{width:"100px", height:"100px"}} /></td>
                            <td>{ele.name.first}</td>
                            <td>{ele.gender}</td>
                            <td>{ele.email}</td>
                            <td>{ele.location.city}</td>
                        </tr>)
                    })}
                </tbody>
            </table>}
        </div>
    )
}

export default Users;