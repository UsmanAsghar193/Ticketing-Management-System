// import NextAuth from "next-auth"
// import GitHub from "next-auth/providers/github"
// import CredentialsProvider from "next-auth/providers/credentials"
// import { API } from "@/actions/api";
// import axios from "axios";
// import { authConfig } from "./auth.config";

// export const { handlers:{GET,POST}, auth, signIn, signOut } = NextAuth({
//     ...authConfig,
//     providers: [
//         GitHub({
//             clientId: process.env.AUTH_GITHUB_ID,
//             clientSecret: process.env.AUTH_GITHUB_SECRET
//         }),
//         CredentialsProvider({
//             async authorize(credentials){
//                 try {
//                     const res = await axios.post(`${API}/auth/signin`, credentials,{withCredentials:'true'})
//                     // console.log(res.data.user)
//                     return res.data.user
//                 } catch (error) {
//                     console.log("*=====* From Auth.js  *=====*")
//                     console.log(error)
//                 }
//             }
//         }),
//     ],
//     callbacks:{
//         ...authConfig.callbacks,
//     }
// });