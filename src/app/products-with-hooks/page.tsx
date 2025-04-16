"use client";
import Image from "next/image";
import Link from "next/link";
import styles from "../page.module.css";
import { useCallback, useEffect, useState } from "react";
import { getProducts, Products } from "@/services/products";

export default function Home() {
  const [products, setProducts] = useState<Products[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  const fetchProducts = useCallback(async () => {
    try {
      setIsLoading(true);
      const data = await getProducts();
      setProducts(data);
    } catch (error) {
      console.error("Failed to fetch products:", error);
    } finally {
      setIsLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchProducts();
  }, [fetchProducts]);

  return (
    <div style={{ padding: "20px" }}>
      <h1 style={{ textAlign: "center" }}>React Traditional Hooks Example</h1>
      <p style={{ textAlign: "center", color: "#ffffff80" }}>
        Below is a list of products fetched using <code>useState</code>,{" "}
        <code>useEffect</code>, and <code>useCallback</code>.
      </p>

      <ol
        style={{
          margin: "20px auto",
          maxWidth: "600px",
          padding: "0 20px",
          listStyle: "decimal",
        }}
      >
        {isLoading && products.length === 0 && (
          <p style={{ textAlign: "center" }}>Loading...</p>
        )}

        {!isLoading && products.length === 0 ? (
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
