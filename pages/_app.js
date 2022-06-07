import Head from "next/head";
import Layout from "../Components/home-page/layout/layout";
import "../styles/globals.css";

function MyApp({Component, pageProps}) {
  return (
    <Layout>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
