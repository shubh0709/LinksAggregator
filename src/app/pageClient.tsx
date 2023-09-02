"use client";

import React from "react";
import { AllCategories } from "./types/category";
import Image from "next/image";

export default function HomeClient({ data }: { data: AllCategories[] }) {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="flex w-full flex-col">
      <div className="mx-auto px-2">
        <div className="flex flex-col space-y-8 pb-10 pt-12 md:pt-24">
          <p className="text-3xl font-bold text-gray-900 md:text-5xl md:leading-10">
            Resources and insights
          </p>
          <p className="max-w-4xl text-base text-gray-600 md:text-xl">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore
            veritatis voluptates neque itaque repudiandae sint, explicabo
            assumenda quam ratione placeat?
          </p>
          {/* <div className="mt-6 flex w-full items-center space-x-2 md:w-1/3">
            <input
              className="flex h-10 w-full rounded-md border border-black/30 bg-transparent px-3 py-2 text-sm placeholder:text-gray-600 focus:outline-none focus:ring-1 focus:ring-black/30 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
              type="text"
              placeholder="Search Topics"
            ></input>
            <button
              type="button"
              className="rounded-md bg-black px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
            >
              Search
            </button>
          </div> */}
        </div>
        {/* <div className="mt-10 hidden w-full flex-col justify-between space-y-4 md:flex md:flex-row">
          <div className="flex w-full items-end border-b border-gray-300">
            {[
              "Design",
              "Product",
              "Software Engineering",
              "Customer Success",
            ].map((filter, index) => (
              <div
                className="cursor-pointer px-4 py-2 text-base font-semibold leading-normal text-gray-700 first:border-b-2 first:border-black"
                key={filter}
              >
                {filter}
              </div>
            ))}
          </div>
        </div> */}
        {/* posts */}
        <div className="grid gap-6 gap-y-10 py-6 md:grid-cols-2 lg:grid-cols-3">
          {data.map((category) => (
            <div key={category.name} className="border">
              <img
                src={category.image.url}
                className="aspect-video w-full rounded-md"
                alt=""
              />
              <div className="min-h-min p-3">
                <p className="mt-4 w-full text-xs font-semibold leading-tight text-gray-700">
                  #{category.name}
                </p>
                <p className="mt-4 flex-1 text-base font-semibold text-gray-900">
                  {category.name}
                </p>
                <p className="mt-4 w-full text-sm leading-normal text-gray-600">
                  {category.content}
                </p>
                <div className="mt-4 flex space-x-3 ">
                  <img
                    className="h-full w-10 rounded-lg"
                    src={category.image.url}
                    alt={""}
                  />
                  {/* <div>
                    <p className="text-sm font-semibold leading-tight text-gray-900">
                      {category.author}
                    </p>
                    <p className="text-sm leading-tight text-gray-600">
                      {category.date}
                    </p>
                  </div> */}
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="w-full border-t border-gray-300">
          <div className="mt-2 flex items-center justify-between">
            <div className="hidden md:block">
              <p>
                showing <strong>1</strong> to <strong>10</strong> of
                <strong>20</strong> results
              </p>
            </div>
            <div className="space-x-2">
              <button
                type="button"
                className="rounded-md bg-black px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
              >
                &larr; Previous
              </button>
              <button
                type="button"
                className="rounded-md bg-black px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
              >
                Next &rarr;
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* footer */}
      <div className="mt-1 bg-gray-50 ">
        <footer className="px-4 py-10">
          {/* <div className="flex flex-col md:flex-row md:items-center">
            <span>
              <svg
                width="40"
                height="46"
                viewBox="0 0 50 56"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M23.2732 0.2528C20.8078 1.18964 2.12023 12.2346 1.08477 13.3686C0 14.552 0 14.7493 0 27.7665C0 39.6496 0.0986153 41.1289 0.83823 42.0164C2.12023 43.5449 23.2239 55.4774 24.6538 55.5267C25.9358 55.576 46.1027 44.3832 48.2229 42.4602C49.3077 41.474 49.3077 41.3261 49.3077 27.8158C49.3077 14.3055 49.3077 14.1576 48.2229 13.1714C46.6451 11.7415 27.1192 0.450027 25.64 0.104874C24.9497 -0.0923538 23.9142 0.00625992 23.2732 0.2528ZM20.2161 21.8989C20.2161 22.4906 18.9835 23.8219 17.0111 25.3997C15.2361 26.7803 13.8061 27.9637 13.8061 28.0623C13.8061 28.1116 15.2361 29.0978 16.9618 30.2319C18.6876 31.3659 20.2655 32.6479 20.4134 33.0917C20.8078 34.0286 19.871 35.2119 18.8355 35.2119C17.8001 35.2119 9.0233 29.3936 8.67815 28.5061C8.333 27.6186 9.36846 26.5338 14.3485 22.885C17.6521 20.4196 18.4904 20.0252 19.2793 20.4196C19.7724 20.7155 20.2161 21.3565 20.2161 21.8989ZM25.6893 27.6679C23.4211 34.9161 23.0267 35.7543 22.1391 34.8668C21.7447 34.4723 22.1391 32.6479 23.6677 27.9637C26.2317 20.321 26.5275 19.6307 27.2671 20.3703C27.6123 20.7155 27.1685 22.7864 25.6893 27.6679ZM36.0932 23.2302C40.6788 26.2379 41.3198 27.0269 40.3337 28.1609C39.1503 29.5909 31.6555 35.2119 30.9159 35.2119C29.9298 35.2119 28.9436 33.8806 29.2394 33.0424C29.3874 32.6479 30.9652 31.218 32.7403 29.8867L35.9946 27.4706L32.5431 25.1532C30.6201 23.9205 29.0915 22.7371 29.0915 22.5892C29.0915 21.7509 30.2256 20.4196 30.9159 20.4196C31.3597 20.4196 33.6771 21.7016 36.0932 23.2302Z"
                  fill="black"
                />
              </svg>
            </span>
            <div className="mt-4 grow md:ml-12 md:mt-0">
              <p className="text-base font-semibold text-gray-700">
                © 2023 DevUI Component Library
              </p>
            </div>
          </div> */}
          <div className="mt-16 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
            <div className="mb-8 lg:mb-0">
              <p className="mb-6 text-lg font-semibold text-gray-700">
                Company
              </p>
              <ul className="flex flex-col space-y-4 text-[14px] font-medium text-gray-500">
                <li>About us</li>
                <li>Company History</li>
                <li>Our Team</li>
                <li>Our Vision</li>
                <li>Press Release</li>
              </ul>
            </div>
            <div className="mb-8 lg:mb-0">
              <p className="mb-6 text-lg font-semibold text-gray-700">
                Our Stores
              </p>
              <ul className="flex flex-col space-y-4 text-[14px] font-medium text-gray-500">
                <li>Washington</li>
                <li>New Hampshire</li>
                <li>Maine</li>
                <li>Texas</li>
                <li>Indiana</li>
              </ul>
            </div>
            <div className="mb-8 lg:mb-0">
              <p className="mb-6 text-lg font-semibold text-gray-700">
                Services
              </p>
              <ul className="flex flex-col space-y-4 text-[14px] font-medium text-gray-500">
                <li>UI / UX Design</li>
                <li>App Development</li>
                <li>API reference</li>
                <li>API status</li>
                <li>Documentation</li>
              </ul>
            </div>
            <div className="mb-8 lg:mb-0">
              <p className="mb-6 text-lg font-semibold text-gray-700">Legal</p>
              <ul className="flex flex-col space-y-4 text-[14px] font-medium text-gray-500">
                <li>Privacy Policy</li>
                <li>Terms of Service</li>
                <li>Cookie Policy</li>
                <li>Disclaimer</li>
                <li>Media Policy</li>
              </ul>
            </div>
            <div className="mb-8 lg:mb-0">
              <p className="mb-6 text-lg font-semibold text-gray-700">
                Social Links
              </p>
              <ul className="flex flex-col space-y-4 text-[14px] font-medium text-gray-500">
                <li>Facebook</li>
                <li>Twitter</li>
                <li>Instagram</li>
                <li>Linkedin</li>
                <li>YouTube</li>
              </ul>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}
