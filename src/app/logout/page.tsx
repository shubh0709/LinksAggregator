"use client";
import styles from "./logout.module.css";
import axios from "axios";
import { logout, setCookie, setLocalStorage } from "../utils/util";
import { useRouter } from "next/navigation";

export default function Logout() {
  const router = useRouter();
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("fired");
    logout();
    router.push("/");
  };

  return (
    <div className={styles.login}>
      <div onClick={handleSubmit} className={styles.submit}>
        Logout
      </div>
    </div>
  );
}
