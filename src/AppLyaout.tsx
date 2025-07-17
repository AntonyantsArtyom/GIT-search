import { Footer } from "./shared/Footer/Footer";
import { Header } from "./widgets/Header/Header";

export const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Header />
      <div className="page_content">{children}</div>
      <Footer />
    </>
  );
};
