// import { NextResponse } from "next/server";

// export const authConfig = {
//     pages: {
//         signIn: '/login',
//         // clientPanel:'/client/dashboard' ,//Client dashboard page
//         // agentPanel: "/agent/dashboard",  //Agent dashboard page
//         // adminPanel: "/admin/dashboard", //Admin dashboard page
//     },
//     providers: [],
//     callbacks: {
//         async jwt({ token, user }) {
//             // console.log('======= Before =======')
//             // console.log('Token = ',token)
//             // console.log('User = ',user)
//             if (user) {
//                 token.id = user.id
//                 token.role = user.role
//             }
//             // console.log('======= After =======')
//             // console.log('Token = ',token)
//             // console.log('User = ',user)
//             return token;
//         },
//         async session({ session, token }) {
//             // console.log('======= Before =======')
//             // console.log('session = ',session)
//             // console.log('token = ',token)
//             if (token) {
//                 session.user.id = token.id;
//                 session.user.role = token.role;
//                 switch (session.user.role) {
//                     case "client":
//                         session.redirect = { url: "/client/dashboard" };
//                         break;
//                     case "agent":
//                         session.redirect = { url: "/agent/dashboard" };
//                         break;
//                     case "admin":
//                         session.redirect = { url: "/admin/dashboard" };
//                         break;
//                     default:
//                         session.redirect = { url: "/" };
//                         break;
//                 }

//             }
//             // console.log('======= After =======')
//             // console.log('session = ',session)
//             // console.log('token = ',token)
//             return session;

//         },
//         authorized({ auth, request }) {
//             // return false
//             // console.log(auth)
//             // return true
//             const user = auth?.user;
//             // console.log('USER = ', user)
//             const { origin } = request.nextUrl
//             // console.log('PATHNAME = ', pathname)
//             const clientPath = '/client/dashboard'
//             // console.log('REQUEST = ', request)
//             // console.log(request.nextUrl.pathname)
//             // return true



//             // if (user) {
//             //     // If a user is authenticated, deny access to login, home, and register pages
//             //     const restrictedRoutes = ['/login', '/', '/register'];
//             //     // if (restrictedRoutes.includes(origin)) {
//             //     //     // If the requested route is in the restricted list, deny access
//             //     //     return false;
//             //     // }

//             //     // Redirect users to their respective dashboards
//             //     if (user.role === 'client') {
//             //         return NextResponse.redirect(new URL('/client/dashboard', request.nextUrl));
//             //     } else if (user.role === 'agent') {
//             //         return NextResponse.redirect(new URL('/agent/dashboard', request.nextUrl));
//             //     } else if (user.role === 'admin') {
//             //         return NextResponse.redirect(new URL('/admin/dashboard', request.nextUrl));
//             //     }
//             // } else {
//             //     // If no user is authenticated, allow access only to login, home, and register pages
//             //     // const allowedRoutes = ['/login', '/', '/register'];
//             //     // if (!allowedRoutes.includes(pathname)) {
//             //     //     // If the requested route is not in the allowed list, deny access
//             //     //     return false;
//             //     // }
//             // }


//             // if (user) {
//             //     // If a user is authenticated, deny access to login, home, and register pages
//             //     const restrictedRoutes = ['/login', '/', '/register'];
//             //     if (restrictedRoutes.includes(origin)) {
//             //         // If the requested route is in the restricted list, deny access
//             //         return false;
//             //     }else if (user.role === 'client' && !origin.startsWith('/client')) {
//             //         // If the user's role is client and the pathname does not start with /client, deny access
//             //         NextResponse.redirect(new URL("/client/dashboard", request.nextUrl));

//             //         // return clientPath
//             //         // return false
//             //     } else if (user.role === 'agent' && !origin.startsWith('/agent')) {
//             //         // If the user's role is agent and the pathname does not start with /agent, deny access
//             //         NextResponse.redirect(new URL("/agent/dashboard", request.nextUrl));
//             //         // return false;
//             //     } else if (user.role === 'admin' && !origin.startsWith('/admin')) {
//             //         // If the user's role is admin and the pathname does not start with /admin, deny access
//             //         NextResponse.redirect(new URL("/admin/dashboard", request.nextUrl));
//             //         // return false;
//             //     }

//             // } else {
//             //     // If no user is authenticated, allow access only to login, home, and register pages
//             //     const allowedRoutes = ['/login', '/', '/register'];
//             //     if (!allowedRoutes.includes(origin)) {
//             //         // If the requested route is not in the allowed list, deny access
//             //         return false;
//             //     }
//             // }

//             // Apply role-based restrictions for authenticated users

//             // Allow access for all other cases
//             // const clientPaths= new URL("/client", request.nextUrl);
//             // console.log('Client Path is', clientPaths)
//             // return Response.redirect(new URL('http://localhost:3000/', pathname))



//             // const isClient = request.nextUrl?.startsWith('/client')
//             // const isAgent = request.nextUrl?.startsWith('/agent')
//             // const isAdmin = request.nextUrl?.startsWith('/admin')

//             // Authenticated User upen click Logo move to their respective dashboard
//             // Only Client can reach the client Panel
//             // Only Agent can reach the agent Panel
//             // Only Admin can reach the admin Panel
//             // Only unauthenticated users can reach the login/register/home pages {DONE}
//             return true;

//         }

//     }
// }