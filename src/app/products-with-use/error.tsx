"use client";
import { useEffect } from "react";
import Image from "next/image";
import styles from "../page.module.css";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error("Error: ", error);
  }, [error]);

  return (
    <div>
      <h2>An error occurred:</h2>
      <pre>{error.message}</pre>
      <div className={styles.ctas}>
        <button className={styles.primary} onClick={() => reset()}>
          <Image
            className={styles.logo}
            src="/vercel.svg"
            alt="Vercel logomark"
            width={20}
            height={20}
          />
          Try Again
        </button>
      </div>
    </div>
  );
}
