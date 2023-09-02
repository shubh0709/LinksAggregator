"use client";
import { useEffect, useState } from "react";
import styles from "./register.module.css";
import axios from "axios";
import { userAuthenticatedData } from "../utils/util";
import { useRouter } from "next/navigation";

export default function Register() {
  const router = useRouter();

  useEffect(() => {
    !!userAuthenticatedData() && router.push("/");
  }, []);

  const [state, setState] = useState({
    name: "",
    email: "",
    password: "",
    error: "",
    success: "",
    buttonText: "Register",
  });

  const { name, email, password, error, success, buttonText } = state;

  const handleChange = (name: string) => (e: any) => {
    setState({
      ...state,
      [name]: e.target.value,
      error: "",
      success: "",
      buttonText: "Register",
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setState({ ...state, buttonText: "Registering" });
    try {
      const response = await axios.post(
        `${process.env.NEXT_PUBLIC_SERVER_URL}/app/register`,
        {
          name,
          email,
          password,
        }
      );
    } catch (error) {
      console.log(error);
      setState({
        ...state,
        buttonText: "Register",
        error: error.response.data.error,
      });
    }
  };

  return (
    <div className={styles.login}>
      <form onSubmit={handleSubmit} className={styles.form}>
        <label className={styles.label}>Username</label>
        <input
          className={styles.input}
          onChange={handleChange("name")}
          type="text"
          placeholder="Username"
        />
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
          Register
        </button>
      </form>
    </div>
  );
}
