import { getCookieFromServer } from "../utils/serverUtils";
import axios from "axios";

const validateAdmin = async () => {
  const token = getCookieFromServer("token");
  let user = null;
  try {
    const response = await axios.post(
      `${process.env.NEXT_PUBLIC_SERVER_URL}/app/admin`,
      {},
      {
        headers: {
          authorization: `Bearer ${token?.value}`,
          contentType: "application/json",
        },
      }
    );

    user = response?.data;
  } catch (error: any) {
    if (error.response.status === 401) {
      user = null;
    }
  }

  return { user, token };
};

export default async function Admin() {
  const { user, token } = await validateAdmin();
  return { user, token };
}
