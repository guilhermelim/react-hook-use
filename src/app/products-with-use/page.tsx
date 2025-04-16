"use client";
import Image from "next/image";
import Link from "next/link";
import styles from "../page.module.css";
import { use } from "react";
import { getProducts } from "@/services/products";

export default function Home() {
  const shouldThrowError = false; // Change this to true to simulate an error
  const products = use(getProducts(shouldThrowError));

  return (
    <div style={{ padding: "20px" }}>
      <h1 style={{ textAlign: "center" }}>React Hook use() Example</h1>
      <p style={{ textAlign: "center", color: "#ffffff80" }}>
        Below is a list of products fetched using the <code>use()</code> hook.
      </p>
      <ol
        style={{
          margin: "20px auto",
          maxWidth: "600px",
          padding: "0 20px",
          listStyle: "decimal",
        }}
      >
        {products.length === 0 ? (
          <li style={{ textAlign: "center" }}>No products found</li>
        ) : (
          products.map((product) => (
            <li key={product.id} style={{ margin: "10px 0" }}>
              {product.name}
            </li>
          ))
        )}
      </ol>

      <BackToHome />
    </div>
  );
}

const BackToHome = () => (
  <div className={styles.ctas}>
    <Link href="/" className={styles.primary} rel="noopener noreferrer">
      <Image
        className={styles.logo}
        src="/vercel.svg" // Keep the original arrow icon
        alt="Arrow"
        width={20}
        height={20}
        color="#ffffff"
      />
      Go to Home
    </Link>
  </div>
);
