import Link from "next/link";

const Admin = () => (
  <>
    <h1>Admin Dashboard</h1>
    <br />
    <Link href="/admin/create">Create category</Link>
    <Link href="/admin/create">Your Links</Link>
    <Link href="/admin/create">Update Profile</Link>
  </>
);

export default Admin;
