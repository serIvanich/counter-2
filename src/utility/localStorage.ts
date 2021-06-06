

export const loadState = () => {
    try {
        const serializedState = localStorage.getItem('min value');
        if (serializedState === null) {
            return undefined;
        }
        return JSON.parse(serializedState);
    } catch (err) {
        return undefined;
    }
};

export const loadMaxValue = () => {
    try {
        const serializedState = localStorage.getItem('max value');
        if (serializedState === null) {
            return undefined;
        }
        return JSON.parse(serializedState);
    } catch (err) {
        return undefined;
    }
};

export const saveMin = (minValue: number) => {
    try {
        const serializedState = JSON.stringify(minValue);
        localStorage.setItem('min value', serializedState);
    } catch {
        // ignore write errors
    }
};
export const saveMax = (maxValue: number) => {
    try {
        const serializedState = JSON.stringify(maxValue);
        localStorage.setItem('max value', serializedState);
    } catch {
        // ignore write errors
    }
};
