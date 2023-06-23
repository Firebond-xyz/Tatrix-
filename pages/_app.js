import "../styles/globals.css";
import { useRouter } from "next/router";
import MainLayout from "../layout/mainLayout";


function MyApp({ Component, pageProps }) {
  const router = useRouter()

  return (
    <MainLayout>
      <Component {...pageProps} />
    </MainLayout>
  );
}

export default MyApp;
