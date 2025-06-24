import styles from "../styles/infinite-marquee.module.css";

export function InfiniteMarquee({
  children,
  speed = "normal",
  direction = "left",
  pauseOnHover = false,
  className = "",
}) {
  const marqueeClass = [
    styles.marquee,
    styles[speed],
    styles[direction],
    pauseOnHover ? styles.pauseOnHover : "",
    className,
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <div
      className={`${styles.marquee} ${styles[speed]} ${styles[direction]} ${
        pauseOnHover ? styles.pauseOnHover : ""
      } ${className}`}
    >
      <div className={styles.marqueeContent}>{children}</div>
      <div className={styles.marqueeContent} aria-hidden="true">
        {children}
      </div>
    </div>
  );
}
