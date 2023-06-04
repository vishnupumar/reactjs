import React from 'react'

export default function FilterUsers({users, usersFilter}) {

    function displayAll(){
        usersFilter(users);
    }
    function displayMale(){
        
        const list = users.filter((ele)=>ele.gender === "male")
        usersFilter(list);
    }
    function displayFemale(){
        const list = users.filter((ele)=>ele.gender === "female")
        usersFilter(list);
    }
  return (
    <div className='filter-users' style={{textAlign:"center",padding:"20px"}}>
        <input type='radio'
                style={{marginLeft:"50px"}}
                 name='gender' 
                 onChange={displayAll}
                 defaultChecked
                  /><span>All</span>
        <input type='radio'
             name='gender'
              onChange={displayMale}
              style={{marginLeft:"50px"}}
              /><span>Male</span>
        <input type='radio'
             name='gender'
              onChange={displayFemale}
              style={{marginLeft:"50px"}}
              /><span>Female</span>
    </div>
  )
}
