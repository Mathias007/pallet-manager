import React, { useEffect } from "react";
import { useForm } from "react-hook-form";

import { useSelector, useDispatch } from "react-redux";

import { notifications } from "../_store/_actions";

import "./App.css";

function App() {
    const { register, handleSubmit } = useForm();

    const onSubmit = async (data) => {
        const formData = new FormData();
        formData.append("file", data.file[0]);

        const res = await fetch("http://localhost:5000/notifications/upload", {
            method: "POST",
            body: formData,
        }).then((res) => res.json());
        console.log(JSON.stringify(`${res.message}, status: ${res.status}`));
    };

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
                <form onSubmit={handleSubmit(onSubmit)}>
                    <input type="file" {...register("file")} />

                    <input type="submit" />
                </form>
            </header>
        </div>
    );
}

export default App;
