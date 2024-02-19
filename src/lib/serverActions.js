// "use server"

// import { API } from '@/actions/api';
// import { signIn, signOut } from '@/lib/auth';
// import axios from 'axios';

// export async function handleGithubLogin() {
//     await signIn("github");
// }
// export async function handleLogout() {
//     await signOut();
// }


// export async function handleRegister(formData){
//     console.log(formData);
//     try {
//         const response = await axios.post(`${API}/auth/signup`,formData);
//         // console.log(response)
//     } catch (error) {
//         console.log(error)
//     }
// }


// export async function handleSignin(formData){
//     // console.log(formData);
    
//     const {email,password} = formData
//     // console.log(email)
//     // console.log(password)
//     try {
//         await signIn('credentials',{email, password});
        
//     } catch (error) {
//         // console.log("+++++ From Server Action +++++")
//         // console.log(error)
//         throw error
//     }
//     // try {
//     //     const response = await axios.post(`${API}/auth/signup`,formData);
//     //     // console.log(response)
//     // } catch (error) {
//     //     console.log(error)
//     // }
// }