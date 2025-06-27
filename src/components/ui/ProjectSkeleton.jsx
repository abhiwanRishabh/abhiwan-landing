import styles from "../styles/ProjectSkeleton.module.css";

export default function ProjectSkeleton() {
  return (
    <div className={styles.skeletonCard}>
      <div className={styles.skeletonHeader}>
        <div className={styles.skeletonThumbnail}></div>
        {/* <div className={styles.skeletonBadge}></div> */}
      </div>

      <div className={styles.skeletonContent}>
        <div className={styles.skeletonTitle}></div>
        <div className={styles.skeletonDescription}>
          <div className={styles.skeletonLine}></div>
          <div className={styles.skeletonLine}></div>
          <div className={styles.skeletonLineShort}></div>
        </div>

        <div className={styles.skeletonTags}>
          <div className={styles.skeletonTag}></div>
          <div className={styles.skeletonTag}></div>
          <div className={styles.skeletonTag}></div>
        </div>
      </div>
    </div>
  );
}
