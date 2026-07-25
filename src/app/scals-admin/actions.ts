// ACTIONS FUNCTIONS FOR SCALS ADMIN LOGIN PAGE
// this file will receive the form submission from the SCALS Admin Login page and handle the login logic

"use server"; // this requires server-side behaviors or server actions, therefore it is a SERVER COMPONENT

import { redirect } from "next/navigation"; // this is a Next.js function that allows us to redirect the user to another page


type LoginState = {
    error: string | null; // means that the login state can either be an error message (string) or null (no error)
}

export async function login(previousState: LoginState, formData: FormData) {
    // store the username and password from the form submission
    const username = formData.get("username") as string;
    const password = formData.get("password") as string;


    // logic to check if the username and password are correct
    if (username == process.env.SCALS_ADMIN_USERNAME && password == process.env.SCALS_ADMIN_PASSWORD) {
        redirect("/scals-admin/dashboard");
    } else if (username != process.env.SCALS_ADMIN_USERNAME || password != process.env.SCALS_ADMIN_PASSWORD) {
        return {error: "Invalid username or password."}; 
    }
    return {error: "Username and password are required."};
}