import {SettingsValueType} from "../redux/counter-reducer";
import {AppStateType} from "../redux/store";


export const loadSettingsValue = () => {
    debugger
    try {
        const serializedState = localStorage.getItem('stateAll');
        if (serializedState === null) {
            return undefined;
        }
        return JSON.parse(serializedState);
    } catch (err) {
        return undefined;
    }
};


export const saveSettingsValue = (counter: AppStateType) => {
    try {
        const serializedState = JSON.stringify(counter);
        localStorage.setItem('stateAll', serializedState);
    } catch {
        // ignore write errors
    }
};
