 const initialState={todos:[{username:"indrajit", gender:"male", age:23, hobby:["sports   ","singing   "] ,date:"Sun Dec 05 2021 17:11:37 GMT+0530 (India Standard Time)"
 , taskname:"todotest",status:"active"}]};
const TodosReducer=(state=initialState, action)=>
{
    console.log(state);
    console.log(action);
   let newTodos=null;
switch(action.type)
{
    case "todo_add":
         newTodos=[...state.todos, action.todo];
        return {...state, todos: newTodos,
        };
        // break;


    case "todo_delete":
         newTodos=state.todos.filter((val,index)=>{
            if(index==action.indexToDelete)
            return false;
            return true;
        })
        
        return {...state,todos:newTodos,};
        // break;

    case "add_clear":
        //code;
        break;

default:
    return state;
    }
};

export default TodosReducer;

