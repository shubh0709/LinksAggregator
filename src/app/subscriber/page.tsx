"use client";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { userAuthenticatedData } from "../utils/util";

export default function Register() {
  const router = useRouter();

  useEffect(() => {
    userAuthenticatedData() &&
      userAuthenticatedData().role !== "subscriber" &&
      router.push("/");
  }, []);

  return <div>User</div>;
}
