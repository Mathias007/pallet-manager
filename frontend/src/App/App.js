import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import { notifications } from "../_store/_actions";

import "./App.css";

function App() {
    const notificationsList = useSelector(
        (state) => state.notifications.notificationsList
    );

   const dispatch = useDispatch();

    useEffect(() => {
        dispatch(notifications.showNotificationsList());
    }, [dispatch]);

    return (
        <div className="App">
            <header className="App-header">
                <button
                    aria-label="Increment value"
                    onClick={() => console.log(notificationsList)}
                >
                    START
                </button>
                <span>123</span>
            </header>
        </div>
    );
}

export default App;
