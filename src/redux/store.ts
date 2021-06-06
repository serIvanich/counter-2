import {counterReducer} from "./counter-reducer";
import { combineReducers } from "redux";
import { createStore } from "redux";
import { applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { loadState, saveMin} from "../utility/localStorage";


const rootReducer = combineReducers({
    counter: counterReducer,
})


export const store = createStore(rootReducer)



export type AppStateType = ReturnType<typeof rootReducer>
