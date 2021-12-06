import axios from "axios";
import { values } from "lodash";
import { useState, useEffect } from "react";
import {useSelector, useDispatch} from "react-redux";
import Add_todo from "./Add_todo";
function TodoContainer() {
let todos1=[];
    const [todos,setTodos]=useState([]);
 
    todos1=useSelector((state)=>{
        console.log("state",state);
 
        
        return state.todos.todos;
    

   })
    const  dispatch=useDispatch();
    
   const add_todo=(todo)=>
   {
       dispatch({type:"todo_add", todo:todo});
   };
   const delete_todo=(index)=>
   {
       dispatch({type:"todo_delete", indexToDelete:index });
   };



    return (
        <div>
<table>
    <thead><tr><th>Usename</th><th>Gender</th><th>Hobby</th><th>Age</th><th>Date</th><th>Taskname</th><th>status</th><th>action</th></tr></thead>
    {todos1.map((val,index)=>{
    return (
     <tbody>   <tr><td>{val.username}</td><td>{val.gender}</td><td>{val.hobby}</td><td>{val.age}</td><td>{val.date.toString()}</td><td>{val.taskname}</td><td>{val.status}</td><td><button onClick={()=>delete_todo(index)}>Delete</button></td></tr></tbody>

    )
})}
    </table>

    <Add_todo add_todo={add_todo} />
        </div>
    )
}
export default TodoContainer;
