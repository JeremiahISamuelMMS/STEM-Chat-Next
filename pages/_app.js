import "../styles/auth.css";
import "../styles/chats.css";
import "../styles/index.css";
import Head from 'next/head'
import { ContextProvider } from "../context";

export default function App({ Component, pageProps }) {
  return (
    <Head>
    <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png">
    <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png">
    <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png">
    <link rel="shortcut icon" href="/favicon.ico">
    <title>STEM Club Chat App</title>
    <link rel="manifest" href="/site.webmanifest">
    <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#0000ff">
    <meta name="apple-mobile-web-app-title" content="STEM Club Chat App">
    <meta name="application-name" content="STEM Club Chat App">
    <meta name="msapplication-TileColor" content="#2d89ef">
    <meta name="theme-color" content="#0000ff">
    </Head>
    <ContextProvider>
      <Component {...pageProps} />
    </ContextProvider>
  );
}
