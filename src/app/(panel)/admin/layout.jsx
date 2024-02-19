'use client'

import Layout from "@/components/layouts/Layout";
import { _useAuth } from "@/context/Auth";
// import { redirect } from "next/navigation";
// import { useEffect } from "react"
import { useRouter } from "next/navigation";


const layout = ({ children }) => {
  // redirect to home page if he hasnt any tokens
  const router = useRouter()
  const [auth, setAuth, loading] = _useAuth();
  console.log("From Admin Layout.jsx ", auth)
  // return auth?.role === "admin" ? setTimeout(() => {
  //   router.push(`/${userRole}`)
  // }, 1000) : <Layout> {children}</Layout>;

  if (auth?.role === "admin") {
    return <Layout> {children}</Layout>;
  }
  else {
    setTimeout(() => {
      // router.push(`/${auth?.role}`)
      router.push("/login")
    }, 1000);
  }
  
};

export default layout;
