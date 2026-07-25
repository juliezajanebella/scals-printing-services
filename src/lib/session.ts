import "server-only";

import {SignJWT, jwtVerify} from "jose"; // this is a library that allows us to create and verify JSON Web Tokens (JWTs)
import { cookies } from "next/headers"; // this is a Next.js function that allows us to access the cookies in the request

const SESSION_COOKIE_NAME = "scals_session_cookie";
const SESSION_COOKIE_DURATION = 8 * 60 * 60 * 1000;

function getSessionSecretKey() {
    const secret = process.env.SCALS_SESSION_SECRET_KEY;

    if (!secret) {
        throw new Error("SCALS_SESSION_SECRET_KEY is not configured.")
    }
    return new TextEncoder().encode(secret); // converts the secret text into bytes required by jose
}

// creates and signs a new session token
async function createSessionToken(expiresAt: Date) {
    return new SignJWT({
        authenticated: true,
    })
    .setProtectedHeader({alg: "HS256"})
    .setIssuedAt()
    .setExpirationTime(Math.floor(expiresAt.getTime() / 1000))
    .sign(getSessionSecretKey());
}

// creates a session and stores its token in a cookie
export async function createSession() {
    const expiresAt = new Date(Date.now() + SESSION_COOKIE_DURATION); 
    const sessionToken = await createSessionToken(expiresAt);
    const cookieStore = await cookies();

    cookieStore.set(SESSION_COOKIE_NAME, sessionToken, {
        httpOnly: true, // prevents client-side JS from reading it
        secure: process.env.NODE_ENV === "production", // requires https when deployed in production
        sameSite: "strict", // sends the cookie only in same-site contexts
        expires: expiresAt, // ends the cookie when the session token expires
        path: "/", // make it available throught the website, not just the current page
    });
}

// verifies and checks whether the session is valid and not expired
export async function verifySession() {
    const cookieStore = await cookies();
    const sessionToken = cookieStore.get(SESSION_COOKIE_NAME)?.value;

    if (!sessionToken) { 
        return false;
    }

    try {
        const { payload } = await jwtVerify(
            sessionToken,
            getSessionSecretKey(),
            {
                algorithms: ["HS256"],
            }
        );
        return payload.authenticated === true;
    } catch {
        return false; // run when the token is invalid or expired
    }
}

// removes the session cookie and logs out the user
export async function deleteSession() {
    const cookieStore = await cookies();
    cookieStore.delete(SESSION_COOKIE_NAME);
}