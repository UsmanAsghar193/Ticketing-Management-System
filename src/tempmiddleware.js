// "use server"
// import { NextResponse } from 'next/server'
// import axios from 'axios'
// import { API } from '@/actions/api'
// import { cookies } from 'next/headers'

// import NextAuth from 'next-auth'
// import { authConfig } from './lib/auth.config'

// export default NextAuth(authConfig).auth




// export async function middleware(request){
// }

// export const config = {
//     matcher: ['/((?!api|_next/static|_next/image|.*\\.png$).*)'],
// }

// export async function middleware(request) {
    // Set cookie
    // cookies().set('name', 'Delba')

    // Delete cookie
    // cookies().delete('name')

    // const value = cookies().get('name')?.value
    // console.log(value)

    // const currentUser = request.cookies.get('session')?.value;
    // const userRole = request.headers.get('role'); // Accessing role from request headers

    // console.log("Current User:", currentUser);
    // console.log("User Role:", userRole);


    // try {
        // const response = await fetch(`${API}/auth/current-user` , {
        //     headers:{
        //         session: request.cookies.get('session')?.value
        //     }
        // })
        // const response = await fetch(`${API}/auth/current-user` , {
        //     method: "GET",
        //     credentials: "include"
        // })
        // console.log(response.status)
        // console.log(response.statusText)
    //     const currentUser = request.cookies.get('session')?.value

    //     console.log(currentUser)
    // } catch (error) {
    //     console.log(error)
    // }
    //   if (currentUser) {
    //     return NextResponse.redirect(new URL('/dashboard', request.url))
    //   }
    //   return NextResponse.redirect(new URL('/login', request.url))
// }



// import { useRouter } from "next/navigation";
// import { _useAuth } from "./context/Auth";
// import { useEffect } from "react";
// import { usePathname } from "next/navigation";

// export function middleware() {
//     const router = useRouter();
//     const pathname = usePathname();
//     const [auth] = _useAuth();

//     useEffect(() => {
//         console.log("I am authMiddleware");
//         if (!auth) {
//             window.location.href = '/'; // Redirect to homepage if not authenticated
//         } else {
//             // If admin is logged in
//             if (auth.role === 'admin') {
//                 if (!pathname.startsWith('/admin')) {
//                     router.push('/admin') // Redirect admin to /admin if they try to access other routes
//                 }
//             }
//             // If agent is logged in
//             else if (auth.role === 'agent') {
//                 if (!pathname.startsWith('/agent')) {
//                     router.push('/agent')  // Redirect agent to /agent if they try to access other routes
//                 }
//             }
//             // If client is logged in
//             else if (auth.role === 'client') {
//                 // You can handle client-specific routes here if needed
//             }
//         }
//     }, [auth, pathname]);

//     return auth;
// }