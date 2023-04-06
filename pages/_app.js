import "../styles/globals.css";
import Head from "next/head";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Submit Your Research Project </title>
        <meta
          name="description"
          content="A Form to upload information regarding biotech projects"
        />
        {/* Facebook Meta Tags */}
        <meta property="og:url" content="" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Upload your Research Project" />
        <meta
          property="og:description"
          content="A Form to upload information regarding biotech projects"
        />
        <meta
          property="og:image"
          content="" //https://www.desci.global/api/og-image
        />
        {/* Twitter Meta Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta property="twitter:domain" content="desci.global" />
        <meta property="twitter:url" content="bio.xyz/submission" /> 
        <meta name="twitter:title" content="Upload your biotech project" />
        <meta
          name="twitter:description"
          content="A Form to upload information regarding biotech projects"
        />
        <meta
          name="twitter:image"
          content="" // https://www.desci.global/api/og-image
        />
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
