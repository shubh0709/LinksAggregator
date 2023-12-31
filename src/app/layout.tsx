import "./globals.css";
import Navbar from "./components/navbar/navbar";
import axios from "axios";

// export const metadata: Metadata = {
//   title: "Create Next App",
//   description: "Generated by create next app",
// };


export default  function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {



  return (
    <html lang="en">
      <head>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css"
        />
      </head>
      <body className="animate__animated">
        <>
          <Navbar />
          <div className="bodyContainer">{children}</div>
        </>
      </body>
    </html>
  );
}
