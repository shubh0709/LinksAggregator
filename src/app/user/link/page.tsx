import { getCookieFromBrowser } from "@/app/utils/util";
import axios from "axios";
import React, { useState } from "react";
import { ArrowRight } from "lucide-react";
import { Checkbox } from "@/components/ui/checkbox";

export default function AddLink() {
  const [state, setState] = useState({
    title: "",
    url: "",
    error: "",
    success: "",
    buttonText: "Register",
  });

  const { title, url } = state;

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
    const token = getCookieFromBrowser("token");
    setState({ ...state, buttonText: "Registering" });
    try {
      const response = await axios.post(
        `${process.env.NEXT_PUBLIC_SERVER_URL}/app/register`,
        {
          title,
          url,
          type: "",
          medium: "",
          categories: "",
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
        }
      );

      return response?.data ?? [];
    } catch (error) {
      console.log(error);
      setState({
        ...state,
        buttonText: "Register",
        error: error.response.data.error,
      });

      return [];
    }
  };

  return (
    <form onSubmit={handleSubmit} className="mt-8">
      <div className="w-full md:w-1/3">
        <label
          className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
          htmlFor="name"
        >
          Title
        </label>
        <input
          className="flex h-10 w-full rounded-md border border-black/30 bg-transparent px-3 py-2 text-sm placeholder:text-gray-600 focus:outline-none focus:ring-1 focus:ring-black/30 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
          type="text"
          placeholder="Enter your name"
          id="name"
          onChange={handleChange("title")}
        ></input>
        <p className="mt-1 text-xs text-gray-500">*This field is required</p>
        <label
          className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
          htmlFor="name"
        >
          URL
        </label>
        <input
          className="flex h-10 w-full rounded-md border border-black/30 bg-transparent px-3 py-2 text-sm placeholder:text-gray-600 focus:outline-none focus:ring-1 focus:ring-black/30 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
          type="text"
          placeholder="Enter your name"
          id="url"
          onChange={handleChange("url")}
        ></input>
        <p className="mt-1 text-xs text-gray-500">*This field is required</p>
        {/* <Checkbox />
        <Checkbox /> */}
        <button
          type="submit"
          className="inline-flex w-full items-center justify-center rounded-md bg-black px-3.5 py-2.5 font-semibold leading-7 text-white hover:bg-black/80"
        >
          Submit Link <ArrowRight className="ml-2" size={16} />
        </button>
      </div>
    </form>
  );
}
