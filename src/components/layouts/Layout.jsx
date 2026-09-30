import { Outlet } from "react-router";
import Header from "./Header";
import Sidebar from "./Sidebar";
import Footer from "./Footer";

const Layout = () => {
  return (
    <>
      <Header />

      <div className="d-flex">

        <Sidebar />

        <main className="container">
          <Outlet />
        </main>
        <Footer/>
      </div>
    </>
  );
};

export default Layout;