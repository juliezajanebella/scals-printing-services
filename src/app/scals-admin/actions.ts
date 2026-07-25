// ACTIONS FUNCTIONS FOR SCALS ADMIN LOGIN PAGE
// this file will receive the form submission from the SCALS Admin Login page and handle the login logic

"use server"; // functions in this file run on the server

import { redirect } from "next/navigation"; // this is a Next.js function that allows us to redirect the user to another page
import { createSession } from "@/lib/session"; // this is a function that creates a session and stores its token in a cookie

export type LoginState = {
    error: string | null; // means that the login state can either be an error message (string) or null (no error)
}

export async function login(_previousState: LoginState, formData: FormData): Promise<LoginState> {
    // store the username and password from the form submission
    const username = formData.get("username");
    const password = formData.get("password");


    // first: check that the fields are not empty
    if (!username || !password) {
        return {error: "Username and password are required."};
    }

    // then: check if the username and password are correct\

    const correctCredentials = 
        username === process.env.SCALS_ADMIN_USERNAME && 
        password === process.env.SCALS_ADMIN_PASSWORD;
        
    if (correctCredentials) {
        await createSession();
        redirect("/scals-admin/dashboard");
    } else if (!correctCredentials) {
        return {error: "Invalid username or password."};
    }
    return {error: null}; // if the login is successful, return null error
}