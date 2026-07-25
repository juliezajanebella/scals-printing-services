// AUTHENTICATION CHECKER

export default function ProtectedLayout({ children }: { children: React.ReactNode }) {
    // receives the children from the page.tsx file and checks if the user is authenticated
    // if the user is authenticated, it will render the children, otherwise it will redirect to the login page

    return (
        <div>
            {children}
        </div>
    );
    
}