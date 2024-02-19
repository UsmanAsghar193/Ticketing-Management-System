"use client"
import { useRouter } from "next/navigation";
import { useState } from "react"
import axios from "axios";
import { API } from "./api";
import { Errs } from "@/helpers/Errs";
import { _useAuth } from "@/context/Auth";

// import { cookies } from 'next/headers'




const initValues = {
    email: "",
    password: "",
}


export const useCommon = () => {
    const [auth, setAuth] = _useAuth();
    const [loginData, setLoginData] = useState(initValues);
    const [loading, setLoading] = useState(false);

    const router = useRouter();

    const changeHandler = (e) => {
        const { name, value } = e.target;
        setLoginData((prev) => ({ ...prev, [name]: value }))
    }
    // console.log(`Login Data From Common.js Email = ${loginData.email} Password = ${loginData.password}`)
    const Login = async () => {
        // console.log('This is Event = ',e)
        // e.preventDefault();
        setLoading(true);
        try {
            const { data } = await axios.post(`${API}/auth/signin`, loginData, { withCredentials: 'true' });
            console.log(data)
            setAuth(data.user);
            setTimeout(() => {
                router.push(`/${data.user.role}`);
            }, 5000);

            // const res = await axios.get(`${API}/auth/current-user`, { withCredentials: 'true' })
            // console.log(res)
            // console.log(data.user.role)
            // const role = data.user.role
            // const res = getCurrentUser()

            // const redirectToDashboard = (role) => {
            //     switch (role) {
            //         case 'client':
            //             router.push('/client/dashboard');
            //             break;
            //         case 'agent':
            //             router.push('/agent/dashboard');
            //             break;
            //         case 'admin':
            //             router.push('/admin/dashboard');
            //             break;
            //         default:
            //             router.push('/')
            //             break;
            //     }
            // }
            // if (res.data.user !== undefined) {
            //     redirectToDashboard(role);
            // }

        } catch (error) {
            console.log(`Error During Login ${error}`);
        } finally {
            setLoading(false);
        }
    };

    const Logout = async ()=> {
        setLoading(true);
        try {
            const {data} = await axios.post(`${API}/auth/logout`, {}, {withCredentials: true});
            setAuth(null);
            setTimeout(() => {
                router.push("/");
            }, 5000);
        } catch (error) {
            console.log(`Error During Logout ${error}`);
        }finally {
            setLoading(false);
        }
    };
    return {
        loading,
        loginData,
        changeHandler,
        Login,
        Logout,
    };
}

