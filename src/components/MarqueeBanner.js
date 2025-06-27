import styles from "./styles/MarqueeBanner.module.css";
import { gravesend, helvetica } from "@/app/font/Fonts";
import { InfiniteMarquee } from "./ui/InfiniteMarquee";
export default function MarqueeBanner() {
  const items = [
    "Game Development",
    "Metaverse",
    // "Metaverse (5 to 6)",
    "Digital Twin",
    "Blockchain / Web 3",
    "Interactive Services",
    "Game Art",
    "3D Animation",
    "Game Design",
    "3D Visualization",
    "3D Modeling",
    "Augmented Reality",
    "Virtual Reality",
    "Web & App Development",
    "Game Development",
    "3D Archive",
  ];

  return (
    <div className={`${styles.marqueeWrapper} my-11`}>
      <InfiniteMarquee speed="normal" pauseOnHover>
        {[...items, ...items].map((text, index) => (
          <div key={index} className={`${styles.item} `}>
            <p className={` ${helvetica.className} text-[24px] text-white`}>
              <span>{text}</span>
            </p>
            <span className={styles.star}>✶</span>
          </div>
        ))}
      </InfiniteMarquee>
      {/* <div className={styles.marqueeContent}>
        
      </div> */}
    </div>
  );
}
