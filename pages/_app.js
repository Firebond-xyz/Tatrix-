import "../styles/globals.css";
import { useRouter } from "next/router";
import MainLayout from "../layout/mainLayout";
import {
  LivepeerConfig,
  ThemeConfig,
  createReactClient,
  studioProvider,
} from '@livepeer/react';
import * as React from 'react';

const livepeerClient = createReactClient({
  provider: studioProvider({
    apiKey: process.env.NEXT_PUBLIC_STUDIO_API_KEY,
  }),
});

const theme = {
  colors: {
    accent: 'rgb(0, 145, 255)',
    containerBorderColor: 'rgba(0, 145, 255, 0.9)',
  },
  fonts: {
    display: 'Inter',
  },
};


function MyApp({ Component, pageProps }) {
  const router = useRouter()
  // console.log("NEXT_PUBLIC_STUDIO_API_KEY:", process.env.NEXT_PUBLIC_STUDIO_API_KEY)

  return (
    <LivepeerConfig client={livepeerClient} theme={theme}>
      <MainLayout>
        <Component {...pageProps} />
      </MainLayout>
    </LivepeerConfig>
  );
}

export default MyApp;
