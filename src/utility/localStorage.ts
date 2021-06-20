import {AppStateType} from "../redux/store";


export const loadSettingsValue = () => {

    try {
        const serializedState = localStorage.getItem('counter');
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
        localStorage.setItem('counter', serializedState);
    } catch {
        // ignore write errors
    }
};
