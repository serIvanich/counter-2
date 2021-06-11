import {ActionType, counterReducer, InitialStateType} from "./counter-reducer";
import {CombinedState, combineReducers, createStore, Reducer} from "redux";
import {loadSettingsValue, saveSettingsValue} from "../utility/localStorage";



const rootReducer: Reducer<CombinedState<{ counter: InitialStateType; }>, ActionType> = combineReducers({
    counter: counterReducer,
})
const persistedState = loadSettingsValue()

export const store = createStore(rootReducer, persistedState)

store.subscribe(() => {

    saveSettingsValue({
        counter: store.getState().counter
    });
});

export type AppStateType = ReturnType<typeof rootReducer>
