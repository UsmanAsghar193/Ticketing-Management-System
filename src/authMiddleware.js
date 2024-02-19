import { useRouter } from "next/navigation";
import { _useAuth } from "./context/Auth";
import { useEffect } from "react";
import { usePathname } from "next/navigation";

export function useAuthMiddleware() {
    const router = useRouter();
    const pathname = usePathname();
    const [auth] = _useAuth();

    useEffect(() => {
        console.log("I am authMiddleware");
        if (!auth) {
            window.location.href = '/'; // Redirect to homepage if not authenticated
        } else {
            // If admin is logged in
            if (auth.role === 'admin') {
                if (!pathname.startsWith('/admin')) {
                    router.push('/admin') // Redirect admin to /admin if they try to access other routes
                }
            }
            // If agent is logged in
            else if (auth.role === 'agent') {
                if (!pathname.startsWith('/agent')) {
                    router.push('/agent')  // Redirect agent to /agent if they try to access other routes
                }
            }
            // If client is logged in
            else if (auth.role === 'client') {
                // You can handle client-specific routes here if needed
            }
        }
    }, [auth, pathname]);

    return auth;
}