import "../styles/globals.css";

import MainLayout from "../layout/mainLayout";
import { useRouter } from "next/router";


function MyApp({ Component, pageProps }) {
  const router = useRouter()

  return (
    <Component {...pageProps} />
  );
}

export default MyApp;
