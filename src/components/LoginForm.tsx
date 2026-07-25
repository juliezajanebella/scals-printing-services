"use client"; // this requires interactive behaviors or browsers actions, therefore it is a CLIENT COMPONENT

import { useState, useActionState} from "react";
import { login } from "@/app/scals-admin/actions";

type LoginState = {
    error: string | null;
};

const initialState: LoginState = {
    error: null,
};

export default function LoginForm() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const [state, formAction, pending] = useActionState(
        login, 
        initialState
    ); // this is a hook that allows us to track the state of the form submission]

    return (
        <form action={formAction}>
            <h1>Login to SCALS Admin</h1>
            <input 
                type="text" 
                name="username"
                placeholder="Username"
                value={username}
                onChange={(event) => setUsername(event.target.value)}
                required
            />
            <input 
                type="password" 
                name="password"
                placeholder="Password"
                value={password}
                onChange={(event) => setPassword(event.target.value)}
                required
            />

            <button type="submit" disabled={pending}>
                {pending ? "Logging in..." : "Login"}
            </button>
            
            {state.error && (
                <p style={{color: "red"}}>{state.error}</p>
            )}
        </form>
    );
}