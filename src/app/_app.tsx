// pages/_app.js
import { useEffect } from "react";
import { Inter, Roboto, Poppins, Raleway, Nunito } from "next/font/google";
// import "tailwindcss/tailwind.css";
import "../styles/global.css"; // Import your global styles

const inter = Inter({ subsets: ["latin"] });
const roboto = Roboto({ subsets: ["latin"], weight: "400" });
const nunito = Nunito({ subsets: ["latin"] });
const raleway = Raleway({ subsets: ["latin"] });

function MyApp({ Component, pageProps }: any) {
  useEffect(() => {
    document.documentElement.style.setProperty(
      "--raleway-font",
      raleway.style.fontFamily
    );
    document.documentElement.style.setProperty(
      "--nunito-font",
      nunito.style.fontFamily
    );
    document.documentElement.style.setProperty(
      "--roboto-font",
      roboto.style.fontFamily
    );
    document.documentElement.style.setProperty(
      "--inter-font",
      inter.style.fontFamily
    );
  }, []);

  return <Component {...pageProps} />;
}

export default MyApp;
