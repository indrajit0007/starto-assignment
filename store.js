//import { store } from "@material-ui/icons";
import {createStore,combineReducers, applyMiddleware} from "redux";
import CountReducer from "./reducers/CountReducer";
import TodosReducer from "./reducers/TodosReducer";
import songReducers from "./reducers/songReducers"
//import rootReducerob1 from "./cart/rootReducer";
import thunk from "redux-thunk";
//import rootReducerob from "./cart/rootReducer";

let combineReducersObject=combineReducers({
    count:CountReducer,
    todos:TodosReducer,
    songs:songReducers,
});
const store=createStore(combineReducersObject,applyMiddleware(thunk));
export default store;