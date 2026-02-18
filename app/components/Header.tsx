"use client";

import { useTranslation } from "react-i18next";
import { useRouter, usePathname } from "next/navigation";
import Link from "next/link";
import { useState } from "react";

const Header = () => {
  const { t, i18n } = useTranslation("common");
  const router = useRouter();
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

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
      const headerHeight = 80;
      window.scrollTo({
        top: targetElement.offsetTop - headerHeight,
        behavior: "smooth",
      });
      setIsMenuOpen(false);
    }
  };

  const navLinks = [
    { id: "about", label: t("about") },
    { id: "products", label: t("products") },
    { id: "contact", label: t("contact") },
  ];

  return (
    <header className="fixed top-0 left-0 w-full bg-white text-brown-800 shadow-md z-50 border-b border-tan-200" style={{ color: "#8B4513" }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 sm:h-20">
          {/* Logo Section */}
          <div className="flex-shrink-0 flex items-center">
            <Link href="/" className="font-bold text-xl sm:text-2xl tracking-tight" style={{ color: "#8B4513" }}>
              {/* This span will be replaced by an <img> in the future */}
              <span>{t("company_name")}</span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-4 lg:space-x-8 items-center">
            {navLinks.map((link) => (
              <Link
                key={link.id}
                href={`#${link.id}`}
                onClick={(e) => handleScroll(e, link.id)}
                className="hover:text-brown-600 transition-colors duration-200 font-medium"
              >
                {link.label}
              </Link>
            ))}
            <div className="flex space-x-2 ml-4">
              <button
                onClick={() => changeLanguage("en")}
                disabled={i18n.language === "en"}
                className={`px-3 py-1 text-sm rounded transition-colors duration-200 ${
                  i18n.language === "en" ? "bg-brown-600 text-white" : "bg-brown-800 text-white hover:bg-brown-700"
                }`}
                style={{ backgroundColor: i18n.language === "en" ? "#A0522D" : "#8B4513" }}
              >
                {t("lang_en")}
              </button>
              <button
                onClick={() => changeLanguage("hy")}
                disabled={i18n.language === "hy"}
                className={`px-3 py-1 text-sm rounded transition-colors duration-200 ${
                  i18n.language === "hy" ? "bg-brown-600 text-white" : "bg-brown-800 text-white hover:bg-brown-700"
                }`}
                style={{ backgroundColor: i18n.language === "hy" ? "#A0522D" : "#8B4513" }}
              >
                {t("lang_hy")}
              </button>
            </div>
          </nav>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-brown-800 hover:bg-tan-100 transition-colors"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              {!isMenuOpen ? (
                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              ) : (
                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu, show/hide based on menu state */}
      <div className={`${isMenuOpen ? "block" : "hidden"} md:hidden bg-white border-b border-tan-200`}>
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          {navLinks.map((link) => (
            <Link
              key={link.id}
              href={`#${link.id}`}
              onClick={(e) => handleScroll(e, link.id)}
              className="block px-3 py-2 rounded-md text-base font-medium hover:bg-tan-50 transition-colors"
            >
              {link.label}
            </Link>
          ))}
          <div className="flex space-x-4 px-3 py-3 border-t border-tan-100 mt-2">
            <button
              onClick={() => { changeLanguage("en"); setIsMenuOpen(false); }}
              disabled={i18n.language === "en"}
              className={`flex-1 px-3 py-2 text-center rounded text-sm font-medium transition-colors ${
                i18n.language === "en" ? "bg-brown-600 text-white" : "bg-brown-800 text-white"
              }`}
              style={{ backgroundColor: i18n.language === "en" ? "#A0522D" : "#8B4513" }}
            >
              {t("lang_en")}
            </button>
            <button
              onClick={() => { changeLanguage("hy"); setIsMenuOpen(false); }}
              disabled={i18n.language === "hy"}
              className={`flex-1 px-3 py-2 text-center rounded text-sm font-medium transition-colors ${
                i18n.language === "hy" ? "bg-brown-600 text-white" : "bg-brown-800 text-white"
              }`}
              style={{ backgroundColor: i18n.language === "hy" ? "#A0522D" : "#8B4513" }}
            >
              {t("lang_hy")}
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
