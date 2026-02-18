import Header from "../components/Header";
import About from "../components/About";
import Products from "../components/Products";
import Contact from "../components/Contact";
import LanguageProvider from "../LanguageProvider";

export async function generateStaticParams() {
  return [{ lng: "en" }, { lng: "hy" }];
}

export default async function Home({
  params,
}: {
  params: Promise<{ lng: string }>;
}) {
  const { lng } = await params;
  return (
    <LanguageProvider lng={lng}>
      <main>
        <Header />
        <About />
        <Products />
        <Contact />
      </main>
    </LanguageProvider>
  );
}
