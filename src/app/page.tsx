import axios from "axios";
import HomeClient from "./pageClient";
import { AllCategories } from "./types/category";

const listAllCategories = async (): Promise<AllCategories[]> => {
  try {
    const response = await axios.get(
      `${process.env.NEXT_PUBLIC_SERVER_URL}/app/listCategories`
    );

    return response?.data ?? [];
  } catch (error) {
    console.log(error);
    return [];
  }
};

export default async function Home() {
  const allCategories = await listAllCategories();

  return <HomeClient data={allCategories} />;
}
