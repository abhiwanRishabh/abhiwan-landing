"use client";
import { useCallback, useEffect, useMemo, useState } from "react";
import Image from "next/image";
import styles from "../../components/styles/Portfolio.module.css";
import { nasalization, helvetica, gravesend } from "@/app/font/Fonts";
import LinearBg from "@/components/ui/LinearBg";
import RactBg from "@/components/ui/RactBg";
import Awards from "@/components/Awards";
import ClientsMarquee from "@/components/ClientsMarquee";
import Footer from "@/components/Footer";
import { portfolioContent } from "@/content/portfolioContent";
import { useRouter } from "next/navigation";
import { goToSection } from "@/components/Hero";
import Link from "next/link";
import axios from "axios";
import useFetchApi from "@/hooks/useFetchApi";
import { BASE_URL } from "@/lib/base_url";
import { ChevronLeft, ChevronRight, Tag } from "lucide-react";
import ProjectSkeleton from "@/components/ui/ProjectSkeleton";

const SUB_CATEGORIES = {
  Gaming: {
    subcategories: [
      "2D Games",
      "3D Games",
      "Card Games",
      "HTML Games",
      "Isometric Games",
      "Racing Games",
      "RPG Games",
    ],
  },
  "Web Development": {
    subcategories: [
      "Gaming Website",
      "Interactive Website",
      "Shopify Website",
      "Wordpress Website",
    ],
  },
};

export default function Page() {
  const [activeTabIndex, setActiveTabIndex] = useState(0);
  const [activeTabIndex2, setActiveTabIndex2] = useState(0);
  const [activeItem, setActiveItem] = useState(null);
  const [activeTab, setActiveTab] = useState("Gaming");
  const [activeTab2, setActiveTab2] = useState("2D Games");
  const [currentPage, setCurrentPage] = useState(1);
  const [tabs, setTabs] = useState([
    "Gaming",
    "Blockchain",
    "Educational Simulator",
    "AR & VR Demo",
    "Industry App Demo",
    "Metaverse",
    "Web Development",
    "Unreal Projects",
    "Mobile App Development",
    "Real Estate",
    "AI",
  ]);
  const [subCategories, setSubCategories] = useState([]);

  const handleBack = () => {
    setActiveItem(null);
  };

  const fetchProjects = useCallback(
    () =>
      axios.get(
        `${BASE_URL}/portfolio/getProjects?page=${currentPage}&subcategory=${activeTab2}&category=${activeTab}`
      ),
    [currentPage, activeTab, activeTab2]
  );
  const { data, loading, totalPages } = useFetchApi(fetchProjects);

  useEffect(() => {
    const subCat = SUB_CATEGORIES[activeTab];
    if (subCat && subCat.subcategories) {
      setSubCategories(subCat.subcategories);
    } else {
      setSubCategories([]);
    }
  }, [activeTab]);

  useEffect(() => {
    if (activeItem) {
      window.scrollBy({
        top: 0,
        behavior: "smooth",
      });
    }
  }, [activeItem]);

  return (
    <div className={styles.container}>
      {/* Header */}
      <Header />

      {activeItem === null ? (
        <ContainerMain
          tabs={tabs}
          activeTabIndex={activeTabIndex}
          activeTabIndex2={activeTabIndex2}
          setActiveTabIndex={setActiveTabIndex}
          setActiveTabIndex2={setActiveTabIndex2}
          setActiveItem={setActiveItem}
          loading={loading}
          data={data}
          totalPages={totalPages}
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
          setActiveTab={setActiveTab}
          setActiveTab2={setActiveTab2}
          subCategories={subCategories}
        />
      ) : (
        <>
          {/* <nav className={styles.navigation}>
            {tabs.map((item, index) => (
              <button
                key={index}
                className={`${styles.navItem} ${
                  index === activeTabIndex ? styles.tabACtive : ""
                }`}
                onClick={() => setActiveTabIndex(index)}
              >
                <h3 className={gravesend.className}>{item}</h3>
              </button>
            ))}
          </nav> */}
          <ActiveProject
            activeItem={activeItem}
            handleBack={handleBack}
            setActiveTab2={setActiveTab2}
            setActiveTabIndex2={setActiveTabIndex2}
          />
        </>
      )}

      <LinearBg />
      {/* <div className={styles.awardSection}>
        <Awards title={false} />
      </div> */}
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
  activeTabIndex2,
  setActiveTabIndex,
  setActiveItem,
  loading,
  data,
  currentPage,
  totalPages,
  setCurrentPage,
  setActiveTab,
  setActiveTab2,
  subCategories,
  setActiveTabIndex2,
}) {
  const totalVisiblePages = 5;
  const half = Math.floor(totalVisiblePages / 2);

  const startPage = Math.max(
    1,
    Math.min(currentPage - half, totalPages - totalVisiblePages + 1)
  );
  const endPage = Math.min(totalPages, startPage + totalVisiblePages - 1);

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
            onClick={() => {
              setActiveTabIndex(index);
              setActiveTab(item === "AR & VR Demo" ? "ARVR Demo" : item);
              setActiveTabIndex2(0);
              setActiveTab2("");
            }}
          >
            <h3 className={gravesend.className}>{item}</h3>
          </button>
        ))}
      </nav>

      {/* sub categor */}
      {subCategories?.length > 0 && (
        <nav className={styles.navigation}>
          {subCategories.map((item, index) => (
            <button
              key={index}
              className={`${styles.navItem} ${
                index === activeTabIndex2 ? styles.tabACtive : ""
              }`}
              onClick={() => {
                setActiveTabIndex2(index);
                setActiveTab2(item);
              }}
            >
              <h3 className={gravesend.className}>{item}</h3>
            </button>
          ))}
        </nav>
      )}

      {/* Portfolio Grid */}
      <div className={styles.portfolioGridContainer}>
        {/* Project Cards */}

        <div className={styles.portfolioGrid}>
          {loading &&
            [...Array(9)].map((_, index) => <ProjectSkeleton key={index} />)}
        </div>

        {loading === false && (
          <div className={styles.portfolioGrid}>
            {data?.map((project, index) => (
              <div
                className={styles.projectCard}
                key={project._id}
                onClick={() => setActiveItem({ ...project, index: index })}
              >
                <div
                  className={`${styles.projectImage} ${styles.projectImage1}`}
                >
                  <img
                    src={
                      project?.thumbnail ||
                      `/webp/portfolio/project${index + 1}.webp`
                    }
                    alt="Unbounded Earth"
                    className={styles.image}
                  />
                </div>
                <h3 className={`${styles.projectTitle} ${helvetica.className}`}>
                  {project.projectName}
                </h3>
                <p
                  className={`${styles.projectDescription} ${helvetica.className}`}
                  style={{ textAlign: "center" }}
                >
                  {project?.shortDescription2?.length > 200
                    ? `${project?.shortDescription2?.substring(0, 200)}...`
                    : project?.shortDescription2}
                </p>
                <div className={styles.dots}>
                  <div className={`${styles.dot}`}></div>
                </div>
              </div>
            ))}
          </div>
        )}

        {loading === false && data?.length === 0 && (
          <div className="">
            <h2 className={`${styles.noProjects} ${helvetica.className} `}>
              No projects found for this category.
            </h2>
          </div>
        )}

        {loading === false && data?.length > 0 && (
          <div className={styles.paginationSection}>
            <button
              className={styles.pageButton}
              onClick={() => setCurrentPage(currentPage - 1)}
              disabled={currentPage === 1}
            >
              <ChevronLeft size={18} />
              Previous
            </button>

            <div className={styles.pageNumbers}>
              {/* First page */}
              {currentPage > 3 && (
                <>
                  <button
                    className={`${styles.pageNumber} ${
                      1 === currentPage ? styles.active : ""
                    }`}
                    onClick={() => setCurrentPage(1)}
                  >
                    1
                  </button>
                  {currentPage > 4 && (
                    <span className={styles.ellipsis}>...</span>
                  )}
                </>
              )}

              {/* Pages around current page */}
              {Array.from({ length: endPage - startPage + 1 }, (_, i) => {
                const pageNum = startPage + i;

                return (
                  <button
                    key={pageNum}
                    className={`${styles.pageNumber} ${
                      pageNum === currentPage ? styles.active : ""
                    }`}
                    onClick={() => setCurrentPage(pageNum)}
                  >
                    {pageNum}
                  </button>
                );
              })}

              {/* Last page */}
              {currentPage < totalPages - 2 && (
                <>
                  {currentPage < totalPages - 3 && (
                    <span className={styles.ellipsis}>...</span>
                  )}
                  <button
                    className={`${styles.pageNumber} ${
                      totalPages === currentPage ? styles.active : ""
                    }`}
                    onClick={() => setCurrentPage(totalPages)}
                  >
                    {totalPages}
                  </button>
                </>
              )}
            </div>

            <button
              className={styles.pageButton}
              onClick={() => setCurrentPage(currentPage + 1)}
              disabled={currentPage >= totalPages}
            >
              Next
              <ChevronRight size={18} />
            </button>
          </div>
        )}
        {/* <RactBg /> */}
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

function ActiveProject({
  activeItem,
  handleBack,
  setActiveTabIndex2,
  setActiveTab2,
}) {
  function handleRedirect() {
    // if (activeItem?.subcategory) {
    // debugger;
    // setActiveTab2(activeItem?.subcategory);
    // let activeSubCat = activeItem?.subcategory;
    // const subCat = SUB_CATEGORIES[activeItem.category];
    // if (subCat.subcategories) {
    //   const findIndex = subCat?.subcategories?.findIndex(
    //     (it) => it == activeSubCat
    //   );
    //   setActiveTabIndex2(findIndex);
    //   }
    // } else {
    //   setActiveTab2("");
    // }
    handleBack();
  }

  function getEmbedUrl(url) {
    if (!url) return "https://www.youtube.com/embed/XceElLFdKiw";

    // Handle youtu.be short links
    if (url?.includes("youtu.be")) {
      const videoId = url.split("youtu.be/")[1]?.split("?")[0];
      return `https://www.youtube.com/embed/${videoId}`;
    }

    // Handle youtube.com/watch?v= links
    if (url?.includes("watch?v=")) {
      const videoId = new URL(url).searchParams.get("v");
      return `https://www.youtube.com/embed/${videoId}`;
    }

    // Handle youtube.com/watch?v= links
    if (url?.includes("shorts")) {
      let id = url.split("shorts")[1];
      return `https://www.youtube.com/embed${id}`;
    }

    // Already an embed link
    return url;
  }
  console.log("activeItem", activeItem, getEmbedUrl(activeItem.video));
  return (
    <div className={styles.activeProjectContainer}>
      <div className={styles.project}>
        <div className={styles.activeprojectImage}>
          <iframe
            src={
              getEmbedUrl(activeItem?.video) ||
              `https://www.youtube.com/embed/XceElLFdKiw`
            }
            title="YouTube video"
            // frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            style={{
              width: "100%",
              height: "400px",
            }}
          ></iframe>
        </div>
        <h3 className={`${styles.projectTitle} ${helvetica.className}`}>
          {activeItem.projectName}
        </h3>
        <div
          className={`${styles.projectDescription} ${helvetica.className}`}
          dangerouslySetInnerHTML={{ __html: activeItem?.shortDescription }}
        >
          {/* {activeItem?.shortDescription} */}
        </div>

        {activeItem.subcategory && (
          <div className={styles.tags}>
            <Tag color="gray" size={20} />{" "}
            <span onClick={handleRedirect}>{activeItem?.subcategory}</span>
          </div>
        )}

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
            fillOpacity=".5"
            d="M48.27 0H19.764C7.382 0 0 7.378 0 19.754v28.458C0 60.622 7.382 68 19.764 68h28.472C60.618 68 68 60.622 68 48.246V19.754C68.034 7.378 60.652 0 48.27 0Zm-7.722 48.042H23.812a2.57 2.57 0 0 1-2.551-2.55 2.57 2.57 0 0 1 2.55-2.55h16.737c4.354 0 7.926-3.536 7.926-7.922a7.91 7.91 0 0 0-7.926-7.922H23.302l.884.884a2.575 2.575 0 0 1-.034 3.638c-.51.51-1.157.748-1.803.748a2.524 2.524 0 0 1-1.803-.748l-5.34-5.372a2.564 2.564 0 0 1 0-3.604l5.34-5.338a2.567 2.567 0 0 1 3.606 0 2.564 2.564 0 0 1 0 3.604l-1.123 1.122h17.52c7.177 0 13.028 5.848 13.028 13.022s-5.851 12.988-13.029 12.988Z"
          />
        </svg>
      </div>

      {/* <div className={styles.ractBg3}></div> */}
    </div>
  );
}
