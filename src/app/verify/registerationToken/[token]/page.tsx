"use client";
import { useEffect, useState } from "react";
import styles from "./auth.module.css";
import axios from "axios";

interface AuthProps {
  params: { token: string };
}

export default function Auth({ params }: { params: { token: string } }) {

  async function validateToken() {
    try {
      const { data } = await axios.post(
        `${process.env.NEXT_PUBLIC_SERVER_URL}/app/verify/registerationToken`,
        {
          token: params.token,
        }
      );
    } catch (error) {
      console.log("error found: ", JSON.stringify(error));
    }
  }

  useEffect(() => {
    validateToken();
  }, []);

  return <div className={styles.login}>came here {params.token}</div>;
}
