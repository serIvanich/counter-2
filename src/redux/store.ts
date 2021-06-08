import {counterReducer} from "./counter-reducer";
import {combineReducers, createStore} from "redux";


const rootReducer = combineReducers({
    counter: counterReducer,
})


export const store = createStore(rootReducer)



export type AppStateType = ReturnType<typeof rootReducer>
