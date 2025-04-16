import styles from "./page.module.css";

export default function Home() {
  return (
    <>
      <div className={styles.ctas}>
        <a
          className={styles.primary}
          href="/products-with-use"
          rel="noopener noreferrer"
        >
          View Products (use Hook)
        </a>

        <a
          href="/products-with-hooks"
          rel="noopener noreferrer"
          className={styles.secondary}
        >
          View Products (Traditional Hooks)
        </a>
      </div>
    </>
  );
}
