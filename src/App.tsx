import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';
import {CounterContainer} from "./components/CounterContainer/CounterContainer";
import {Button} from "./components/Button";
import { SettingsContainer } from './components/SettingsContainer/SettingsContainer';



function App() {

    const [value, setValue] = useState(0)
    const [onOffSet, setOnOffSet] = useState(false)

    const changeValue = () => setValue(value + 1)
    const changeSettings = () => setOnOffSet(!onOffSet)

    return (
        <div className="App">
            {onOffSet
            ?<CounterContainer value={value} changeValue={changeValue} changeSettings={changeSettings}/>
            :<SettingsContainer />}


        </div>
    );
}

export default App;
