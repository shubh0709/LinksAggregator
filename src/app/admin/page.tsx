"use client";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { userAuthenticatedData } from "../utils/util";

export default function Register() {
  const router = useRouter();

  useEffect(() => {
    userAuthenticatedData() &&
      userAuthenticatedData().role !== "admin" &&
      router.push("/");
  }, []);

  return <div>Admin</div>;
}
