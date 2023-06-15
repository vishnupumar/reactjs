import React from 'react'

export const Login = ({setIsLogin}) => {
  return (
    <div style={{width:"300px",margin:"10px auto",textAlign:'center'}}>
        <h1>Login</h1>
        <button onClick={()=>{
            setIsLogin(true)
        }}>Login</button>
    </div>
  )
}
