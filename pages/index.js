import React, { useEffect } from "react";
import Head from "next/head";
import styles from "../styles/Home.module.css";
import { useMixpanel } from "../contexts/mixpanel.context";
export default function Home() {
  const mixpanel = useMixpanel();

  useEffect(() => {
    mixpanel.track("Home page loaded");
  }, [mixpanel]);

  return (
    <div className={styles.container}>
      <Head>
        <title>I Like Farts</title>
        <meta
          name="description"
          content="I mean come on who doesn't. Farts rule."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <iframe
          className={styles.video}
          src="https://www.youtube.com/embed/Z7NzSHDSJg8"
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        ></iframe>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://nick.tobol.ski"
          target="_blank"
          rel="noopener noreferrer"
          onClick={() => mixpanel.track("Linky boi clicked")}
        >
          Powered by tobo &amp; Frontlanders
        </a>
      </footer>
    </div>
  );
}
