

import { Slider } from "@material-ui/core"
import React, { useState,useEffect} from "react";
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";

const Add_todo = (props) => {
    const [todos, setTodos] = useState([]);
    const [age, setAge] = useState();
    //let age;
    const [startDate, setStartDate] = useState(new Date());
    const [hob, setHob] = useState([]);
    const addTodo = (event) => {

        event.preventDefault();
        console.log("age: " + age); 
        console.log(startDate);
        console.log(event.target.taskname.value);
        console.log(event.target.hobby1.value)
       

let todoVar={username:event.target.name.value, gender:event.target.gender.value, age:age,hobby:hob, date:startDate
, taskname:event.target.taskname.value,status:event.target.status.value};

props.add_todo(todoVar);


    }
    useEffect(()=>{console.log(hob)},[hob])

    const handleage = (event, age1) => {
        console.log(age1);
        setAge(age1);
    }
    
    return (
        <div>

            <form onSubmit={addTodo}>
                <h2>      UserName: <input type="string" name="name" maxLength="15" />
                    <br /> Gender: <input type="radio" id="gender1" name="gender" value="male" />
                    <label for="gender1">Male</label>
                    <input type="radio" id="gender2" name="gender" value="female" />
                    <label for="gender2">Female</label><br />

                    Hobbies:<input type="checkbox" id="hobby1"  onChange={(hobby)=>setHob([...hob,hobby.target.value])} name="hobby1" value="sports" />
                    <label for="hobby1"> Sports</label>
                    <input type="checkbox" id="hobby2" onChange={(hobby)=>setHob([...hob,hobby.target.value])}  name="hobby2" value="reading" />
                    <label for="hobby2">Reading</label>
                    <input type="checkbox" id="hobby3"  onChange={(hobby)=>setHob([...hob,hobby.target.value])} name="hobby3" value="singing" />
                    <label for="hobby3">Singing</label><br /><br></br>


                    Age: <div className="bg2">
                    <Slider
                        aria-label="Small steps"
                        defaultValue={35}
                        // getAriaValueText={age}
                        step={1}
                        marks
                        min={18}
                        max={55}
                        valueLabelDisplay="auto"
                        onChange={handleage}
                        value={age}
                    /></div>
                    Date: <DatePicker selected={startDate} onChange={(date) => setStartDate(date)} />
                    
                    Taskname:
                    <input type="text" name="taskname"></input><br />
                    Status:  <select name="status" id="status">
                        <option value="active">Active</option>
                        <option value="inactive">Inactive</option>

                    </select>

                </h2>

                <input type="submit" value="Submit" />
            </form>

        </div>
    );
};



export default Add_todo;











