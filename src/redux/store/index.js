import {createStore} from "redux";
import { userDataReducer } from "../reducers/reducer";

const store=createStore(userDataReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())
export default store