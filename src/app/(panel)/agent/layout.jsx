"use client";

import { _useAuth } from "@/context/Auth";
import Layout from "../../../components/layouts/Layout";
// import Layout from "@/components/layouts/Layout"
// import { redirect } from "next/navigation";
import { useRouter } from "next/navigation";

const Agent = ({ children }) => {
  const router = useRouter();
  const [auth, setAuth, loading] = _useAuth();

  console.log("From Agent Layout.jsx", auth)
  // return auth?.role !== "agent" ? redirect('/') : <Layout>{children}</Layout>;
  // return  <Layout>{children}</Layout>;
  if (auth?.role === "agent") {
    return <Layout> {children}</Layout>;
  }
  else {
    setTimeout(() => {
      // router.push(`/${auth?.role}`)
      router.push("/login")
    }, 1000);
  }
};

export default Agent;
