"use client";

import { useTranslation } from "react-i18next";
import { useRouter, usePathname } from "next/navigation";
import Link from "next/link";

const Header = () => {
  const { t, i18n } = useTranslation("common");
  const router = useRouter();
  const pathname = usePathname();

  const changeLanguage = (lng: string) => {
    const newPath = `/${lng}${pathname.replace(/^\/(en|hy)/, "")}`;
    router.push(newPath);
  };

  const handleScroll = (
    e: React.MouseEvent<HTMLAnchorElement>,
    targetId: string,
  ) => {
    e.preventDefault();
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      window.scrollTo({
        top: targetElement.offsetTop,
        behavior: "smooth",
      });
    }
  };

  return (
    <>
      <style>{`
        .nav-link:hover {
          color: #A0522D !important;
        }
        .lang-btn:hover:not(:disabled) {
          background-color: #A0522D !important;
        }
      `}</style>
      <header
        style={{
          display: "flex",
          justifyContent: "space-between",
          padding: "1rem",
          borderBottom: "1px solid #D2B48C",
          position: "fixed",
          width: "100%",
          top: 0,
          backgroundColor: "white",
          zIndex: 1000,
          color: "#8B4513",
          boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
          alignItems: "center",
          boxSizing: "border-box",
        }}
      >
        <div>
          {/* Logo Placeholder */}
          <span style={{ fontWeight: "bold", color: "#8B4513" }}>
            {t("company_name")}
          </span>
        </div>
        <nav>
          <Link
            href="#about"
            onClick={(e) => handleScroll(e, "about")}
            className="nav-link"
            style={{
              margin: "0 1rem",
              color: "#8B4513",
              textDecoration: "none",
              transition: "color 0.3s",
            }}
          >
            {t("about")}
          </Link>
          <Link
            href="#products"
            onClick={(e) => handleScroll(e, "products")}
            className="nav-link"
            style={{
              margin: "0 1rem",
              color: "#8B4513",
              textDecoration: "none",
              transition: "color 0.3s",
            }}
          >
            {t("products")}
          </Link>
          <Link
            href="#contact"
            onClick={(e) => handleScroll(e, "contact")}
            className="nav-link"
            style={{
              margin: "0 1rem",
              color: "#8B4513",
              textDecoration: "none",
              transition: "color 0.3s",
            }}
          >
            {t("contact")}
          </Link>
        </nav>
        <div>
          <button
            onClick={() => changeLanguage("en")}
            disabled={i18n.language === "en"}
            className="lang-btn"
            style={{
              marginRight: "0.5rem",
              backgroundColor: i18n.language === "en" ? "#A0522D" : "#8B4513",
              color: "white",
              border: "none",
              padding: "0.5rem",
              cursor: "pointer",
              transition: "background-color 0.3s",
            }}
          >
            {t("lang_en")}
          </button>
          <button
            onClick={() => changeLanguage("hy")}
            disabled={i18n.language === "hy"}
            className="lang-btn"
            style={{
              backgroundColor: i18n.language === "hy" ? "#A0522D" : "#8B4513",
              color: "white",
              border: "none",
              padding: "0.5rem",
              cursor: "pointer",
              transition: "background-color 0.3s",
            }}
          >
            {t("lang_hy")}
          </button>
        </div>
      </header>
    </>
  );
};

export default Header;
