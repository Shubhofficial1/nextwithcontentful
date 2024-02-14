import Footer from "./Footer";
import Header from "./Header";

const Layout = ({ children }) => {
  return (
    <div className="flex flex-col">
      <Header />
      <main className="p-5 min-h-screen">{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
