import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import { pallets } from "../_store/_actions";

import "./App.css";

function App() {
    const welcome = useSelector((state) => state.pallets.welcome);

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(pallets.showWelcomeData());
    });

    return (
        <div className="App">
            <header className="App-header">
                <button
                    aria-label="Increment value"
                    onClick={() => console.log(welcome)}
                >
                    START
                </button>
                <span>{welcome}</span>
            </header>
        </div>
    );
}

export default App;
