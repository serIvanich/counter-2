import {counterReducer} from "./counter-reducer";
import { combineReducers } from "redux";
import { createStore } from "redux";


const rootReducer = combineReducers({
    counter: counterReducer,
})



export const store = createStore(rootReducer)

export type AppStateType = ReturnType<typeof rootReducer>
