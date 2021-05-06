import React, {useState} from 'react';
import './App.css';
import {ButtonsContainer} from "./components/ButtonsContainer";
import {ScreensContainer} from "./components/ScreensContainer";
import {CounterContainer} from "./components/CounterContainer";


function App() {

    const [value, setValue] = useState(0)
    const [minValue, setMinValue] = useState(3)
    const [maxValue, setMaxValue] = useState(5)

    const [settings, setSettings] = useState(false)


    return (
        <div className="App2">

            <CounterContainer settings={settings} value={value}
                              changeValue={() => setValue(value + 1)}
                              onSettings={() => setSettings(!settings)}
                              minValue={minValue} maxValue={maxValue}
                              resetValue={() => setValue(minValue)}
            />
            {/*<CounterContainer settings={settings}/>*/}

        </div>
    );
}

export default App;
