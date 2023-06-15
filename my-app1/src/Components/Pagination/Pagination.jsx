import React, { useEffect, useState } from 'react'
import "./Pagination.css"
import axios from 'axios'

export const Pagination = () => {
    const [users, setUsers] = useState("");
    const [page,setPage] = useState(1);
    useEffect(()=>{
        axios.get(`http://localhost:5001/results?_limit=${4}&_page=${page}`)
        .then((res)=>{
            setUsers(res.data)
        })
    },[page])
  return (
    <div className='pagination'>
        <h1>Pagination</h1>
        <p>Id exercitation aliquip occaecat irure ullamco et duis consequat ea ad ipsum. Esse magna nisi aute fugiat sit cupidatat id sit labore aliquip nulla enim. Qui id magna aliqua dolor ad elit Lorem adipisicing adipisicing deserunt. Ipsum sunt aliqua enim sunt mollit velit Lorem incididunt cillum labore quis nostrud minim minim. Irure in incididunt est est proident minim magna. In nulla deserunt velit esse incididunt. Veniam ipsum dolore do ea.</p>
        <div className='pagination-table'>
            <table frame="box" rules='all' width={500} 
            cellSpacing={100}
            style={{margin:"20px auto"}}>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>NAME</th>
                        <th>GENDER</th>
                    </tr>
                </thead>
                <tbody>
                    {
                       users.length > 0 && users.map((user)=>{
                            return <tr>
                                <td>{user.id}</td>
                                <td>{user.name}</td>
                                <td>{user.gender}</td>
                            </tr>
                        })
                    }
                </tbody>
            </table>
            <button disabled={(page === 1) ? true : false} onClick={()=>{
                setPage(page - 1)
            }}>Prev</button>&nbsp;&nbsp;&nbsp;
            <button>{page}</button>&nbsp;&nbsp;&nbsp;
            <button disabled={(page === 5) ? true : false} onClick={()=>{
                setPage(page + 1)
            }} >Next</button>&nbsp;&nbsp;&nbsp;
        </div>
    </div>
  )
}
