import styles from "./login.module.css";

export default function Login() {
  return (
    <div className={styles.login}>
      <form action="">
        <label>Username</label>
        <input type="text" placeholder="Username" />
        <label>Password</label>
        <input type="password" placeholder="Password" />
        <button type="submit">Login</button>
      </form>
    </div>
  );
}
