import axios from "axios";

export const sendData = (userObj,setState,setPerson) =>{
    axios.post("http://localhost:5001/results",userObj)
    .then((res)=>{
        alert("User Successfully created")
        getData(setState)
        setPerson("");
        console.log(res.data)
    })
}

export const updateData = (id,userObj,setState,setPerson,setIsEdit) =>{
    axios.put(`http://localhost:5001/results/${id}`,userObj)
    .then((res)=>{
        alert("User Successfully Updated")
        getData(setState)
        setPerson("");
        setIsEdit(false)
        console.log(res.data)
    })
}

export const getData = (setState) => {
        axios.get("http://localhost:5001/results")
        .then((res)=>{
            setState(res.data)
            console.log(res.data)
        })
}

export const deleteData = (id,setState)=>{
    axios.delete(`http://localhost:5001/results/${id}`)
    .then((res)=>{
        alert("Successfully Deleted ")
        getData(setState)
    })
    .catch((error)=>{
        console.log("Error while deleting ",error)
    })
}