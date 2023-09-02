"use client";
import { useEffect, useState } from "react";
import styles from "./login.module.css";
import axios from "axios";
import { setAuthData, userAuthenticatedData } from "../utils/util";
import { useRouter } from "next/navigation";

export default function Login() {
  console.log("came to login.tsx file");
  const router = useRouter();
  useEffect(() => {
    !!userAuthenticatedData() && router.push("/");
  }, []);

  const [state, setState] = useState({
    email: "",
    password: "",
    error: "",
    success: "",
    buttonText: "login",
  });

  const { email, password, error, success, buttonText } = state;

  const handleChange = (val: string) => (e: any) => {
    setState({
      ...state,
      [val]: e.target.value,
      error: "",
      success: "",
      buttonText: "login",
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setState({ ...state, buttonText: "logining" });
    try {
      const response = await axios.post(
        `${process.env.NEXT_PUBLIC_SERVER_URL}/app/login`,
        {
          email,
          password,
        }
      );

      setAuthData(response, () =>
        userAuthenticatedData() && userAuthenticatedData().role === "admin"
          ? router.push("/admin")
          : router.push("/user")
      );

      // setState({
      //   ...state,
      //   name: "",
      //   email: "",
      //   password: "",
      //   buttonText: "Submitted",
      //   success: response.data.message,
      // });
    } catch (error) {
      console.log(error);
      setState({
        ...state,
        buttonText: "login",
        error: error.response.data.error,
      });
    }
  };

  return (
    <div className={styles.login}>
      <form onSubmit={handleSubmit} className={styles.form}>
        <label className={styles.label}>Email</label>
        <input
          className={styles.input}
          onChange={handleChange("email")}
          type="email"
          placeholder="Email"
        />
        <label className={styles.label}>Password</label>
        <input
          className={styles.input}
          onChange={handleChange("password")}
          type="password"
          placeholder="Password"
        />
        <button className={styles.submit} type="submit">
          login
        </button>
      </form>
    </div>
  );
}
