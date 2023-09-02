import Link from "next/link";

const Admin = () => (
  <>
    <h1>Admin Dashboard</h1>
    <br />
    <Link href="/admin/create">Create category</Link>
  </>
);

export default Admin;
