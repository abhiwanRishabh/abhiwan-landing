"use client";
import Image from "next/image";
import styles from "../../components/styles/Portfolio.module.css";
import { nasalization, helvetica, gravesend } from "@/app/font/Fonts";
import { useState } from "react";
import LinearBg from "@/components/ui/LinearBg";
import RactBg from "@/components/ui/RactBg";
import Awards from "@/components/Awards";
import ClientsMarquee from "@/components/ClientsMarquee";
import Footer from "@/components/Footer";
import { portfolioContent } from "@/content/portfolioContent";
import { useRouter } from "next/navigation";
import { goToSection } from "@/components/Hero";
import Link from "next/link";

export default function Page() {
  const [activeTabIndex, setActiveTabIndex] = useState(0);
  const [activeItem, setActiveItem] = useState(null);
  const [tabs, setTabs] = useState([
    { name: "ALL WORKS", sup: "30" },
    { name: "GAMING", sup: "12" },
    { name: "METAVERSE", sup: "8" },
    { name: "AR/VR", sup: "6" },
    { name: "BLOCKCHAIN / NFT", sup: "4" },
    { name: "WEB DEVELOPMENT", sup: "10" },
  ]);

  const handleBack = () => {
    setActiveItem(null);
  };

  return (
    <div className={styles.container}>
      {/* Header */}
      <Header />

      {activeItem === null ? (
        <ContainerMain
          tabs={tabs}
          activeTabIndex={activeTabIndex}
          setActiveTabIndex={setActiveTabIndex}
          setActiveItem={setActiveItem}
        />
      ) : (
        <>
          <nav className={styles.navigation}>
            {tabs.map((item, index) => (
              <button
                key={index}
                className={`${styles.navItem} ${
                  index === activeTabIndex ? styles.tabACtive : ""
                }`}
                onClick={() => setActiveTabIndex(index)}
              >
                <h3 className={gravesend.className}>
                  {item.name} <sup className={styles.navSup}>{item.sup}</sup>
                </h3>
              </button>
            ))}
          </nav>
          <ActiveProject activeItem={activeItem} handleBack={handleBack} />
        </>
      )}

      <LinearBg />
      <div className={styles.awardSection}>
        <Awards title={false} />
      </div>
      <div className="bg-black p-3 z-[10]">
        <ClientsMarquee />
      </div>
      <Footer />
    </div>
  );
}

function ContainerMain({
  tabs,
  activeTabIndex,
  setActiveTabIndex,
  setActiveItem,
}) {
  return (
    <main className={styles.main}>
      {/* Hero Text */}
      <div className={styles.heroSection}>
        <h2 className={`${styles.heroText} ${helvetica.className}`}>
          From startups to enterprises, here’s how we turn ideas into real-world
          solutions.
        </h2>
      </div>

      {/* Navigation */}
      <nav className={styles.navigation}>
        {tabs.map((item, index) => (
          <button
            key={index}
            className={`${styles.navItem} ${
              index === activeTabIndex ? styles.tabACtive : ""
            }`}
            onClick={() => setActiveTabIndex(index)}
          >
            <h3 className={gravesend.className}>
              {item.name} <sup className={styles.navSup}>{item.sup}</sup>
            </h3>
          </button>
        ))}
      </nav>

      {/* Portfolio Grid */}
      <div className={styles.portfolioGridContainer}>
        {/* Project Cards */}
        <div className={styles.portfolioGrid}>
          {portfolioContent?.map((project, index) => (
            <div
              className={styles.projectCard}
              key={project.id}
              onClick={() => setActiveItem({ ...project, index: index })}
            >
              <div className={`${styles.projectImage} ${styles.projectImage1}`}>
                <Image
                  src={`/webp/portfolio/project${index + 1}.webp`}
                  alt="Unbounded Earth"
                  width={300}
                  height={200}
                  className={styles.image}
                />
              </div>
              <h3 className={`${styles.projectTitle} ${helvetica.className}`}>
                {project.project_name}
              </h3>
              <p
                className={`${styles.projectDescription} ${helvetica.className}`}
              >
                Lorem Ipsum Dolor Sit Amet, Consectetur Adipiscing Elit. Sed Do
                Eiusmod Tempor Incididunt Ut Labore Et Dolore Magna Aliqua. Ut
                Enim
              </p>
              <div className={styles.dots}>
                <div className={`${styles.dot}`}></div>
              </div>
            </div>
          ))}
        </div>
        <RactBg />
      </div>
    </main>
  );
}

function Header() {
  const router = useRouter();

  function goToHome() {
    router.push("/");
  }

  return (
    <header className={styles.header}>
      <div className={styles.logoSection}>
        <div className={styles.logo} onClick={goToHome}>
          <Image
            src="/AbhiwanLogoPortfolio.png"
            width={80}
            height={80}
            alt="abhiwan_logo"
          />
        </div>
        {/* <span className={styles.logoSubtext}>CLICK TO VISIT US</span> */}
      </div>

      <h1 className={`${styles.mainTitle} ${nasalization.className}`}>
        ABHIWAN'S PORTFOLIO
      </h1>

      <button className={`${styles.contactButton} ${helvetica.className}`}>
        CONTACT US
      </button>
    </header>
  );
}

function ActiveProject({ activeItem, handleBack }) {
  return (
    <div className={styles.activeProjectContainer}>
      <div className={styles.project}>
        <div className={styles.activeprojectImage}>
          <Image
            src={`/webp/portfolio/project${activeItem?.index + 1}.webp`}
            alt="Unbounded Earth"
            width={600}
            height={400}
          />
        </div>
        <h3 className={`${styles.projectTitle} ${helvetica.className}`}>
          {activeItem.project_name}
        </h3>
        <p className={`${styles.projectDescription} ${helvetica.className}`}>
          Lorem Ipsum Dolor Sit Amet, Consectetur Adipiscing Elit. Sed Do
          Eiusmod Tempor Incididunt Ut Labore Et Dolore Magna Aliqua. Ut Enim
          Lorem Ipsum Dolor Sit Amet, Consectetur Adipiscing Elit. Sed Do
          Eiusmod Tempor Incididunt Ut Labore Et Dolore Magna Aliqua. Ut Enim
          Lorem Ipsum Dolor Sit Amet, Consectetur Adipiscing Elit. Sed Do
          Eiusmod Tempor Incididunt Ut Labore Et Dolore Magna Aliqua. Ut Enim
          Lorem Ipsum Dolor Sit Amet, Consectetur Adipiscing Elit. Sed Do
          Eiusmod Tempor Incididunt Ut Labore Et Dolore Magna Aliqua. Ut Enim
          Lorem Ipsum Dolor Sit Amet, Consectetur Adipiscing Elit. Sed Do
          Eiusmod Tempor Incididunt Ut Labore Et Dolore Magna Aliqua. Ut Enim
        </p>

        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="68"
          height="68"
          fill="none"
          className={styles.backButton}
          onClick={handleBack}
        >
          <path
            fill="#9F99E2"
            d="M48.27 0H19.764C7.382 0 0 7.378 0 19.754v28.458C0 60.622 7.382 68 19.764 68h28.472C60.618 68 68 60.622 68 48.246V19.754C68.034 7.378 60.652 0 48.27 0Zm-7.722 48.042H23.812a2.57 2.57 0 0 1-2.551-2.55 2.57 2.57 0 0 1 2.55-2.55h16.737c4.354 0 7.926-3.536 7.926-7.922a7.91 7.91 0 0 0-7.926-7.922H23.302l.884.884a2.575 2.575 0 0 1-.034 3.638c-.51.51-1.157.748-1.803.748a2.524 2.524 0 0 1-1.803-.748l-5.34-5.372a2.564 2.564 0 0 1 0-3.604l5.34-5.338a2.567 2.567 0 0 1 3.606 0 2.564 2.564 0 0 1 0 3.604l-1.123 1.122h17.52c7.177 0 13.028 5.848 13.028 13.022s-5.851 12.988-13.029 12.988Z"
          />
          <path
            fill="#fff"
            fill-opacity=".5"
            d="M48.27 0H19.764C7.382 0 0 7.378 0 19.754v28.458C0 60.622 7.382 68 19.764 68h28.472C60.618 68 68 60.622 68 48.246V19.754C68.034 7.378 60.652 0 48.27 0Zm-7.722 48.042H23.812a2.57 2.57 0 0 1-2.551-2.55 2.57 2.57 0 0 1 2.55-2.55h16.737c4.354 0 7.926-3.536 7.926-7.922a7.91 7.91 0 0 0-7.926-7.922H23.302l.884.884a2.575 2.575 0 0 1-.034 3.638c-.51.51-1.157.748-1.803.748a2.524 2.524 0 0 1-1.803-.748l-5.34-5.372a2.564 2.564 0 0 1 0-3.604l5.34-5.338a2.567 2.567 0 0 1 3.606 0 2.564 2.564 0 0 1 0 3.604l-1.123 1.122h17.52c7.177 0 13.028 5.848 13.028 13.022s-5.851 12.988-13.029 12.988Z"
          />
        </svg>
      </div>

      {/* <div className={styles.ractBg3}></div> */}
    </div>
  );
}
