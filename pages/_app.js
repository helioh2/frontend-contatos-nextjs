import 'bootstrap/dist/css/bootstrap.css'

import "../css/index.css";
import Head from "next/head";
import { useEffect } from "react";

// This default export is required in a new `pages/_app.js` file.
export default function MyApp({ Component, pageProps }) {
    useEffect(() => {
        import("bootstrap/dist/js/bootstrap");
      }, []);

    return (
        <>
        <Head>
           <meta name="viewport" content="width=device-width, initial-scale=1" />
        </Head>
        <Component {...pageProps} />
        </>
        );
}