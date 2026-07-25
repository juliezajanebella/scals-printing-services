// AUTHENTICATION CHECKER

import { verifySession } from "@/lib/session"; // this is a function that verifies the session token in the cookie
import { redirect } from "next/navigation"; // this is a Next.js function that allows us to redirect the user to another page

export default async function ProtectedLayout({ children }: { children: React.ReactNode }) {
    // receives the children from the page.tsx file and checks if the user is authenticated
    // if the user is authenticated, it will render the children, otherwise it will redirect to the login page


    const isAuthenticated = await verifySession(); // this is a function that verifies the session token in the cookie

    if (!isAuthenticated) {
        redirect("/scals-admin/"); // if the user is not authenticated, redirect to the login page
    } 

    return (
        <div>
            {children}
        </div>
    );
    
}