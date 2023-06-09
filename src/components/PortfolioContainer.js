import React, { useState } from "react";
import NavTabs from "./NavTabs";
import About from "./pages/About";
import ProjectList from "./pages/MyProjects";
import Contact from "./pages/Contact";
import Header from "./Header"
import Footer from "./Footer";
import '../styles/Container.css'

export default function PortfolioContainer() {
  const [currentPage, setCurrentPage] = useState("About");

  // This method is checking to see what the value of `currentPage` is. Depending on the value of currentPage, we return the corresponding component to render.
  const renderPage = () => {
    if (currentPage === "About") {
      return <About />;
    }
    if (currentPage === "ProjectList") {
      return <ProjectList />;
    }
    return <Contact />;
  };

  const handlePageChange = (page) => setCurrentPage(page);

  return (
    <div id= "page-container">
      <div id = "content-wrapper">
      {/* We are passing the currentPage from state and the function to update it */}
      <Header />
      <NavTabs currentPage={currentPage} handlePageChange={handlePageChange} />
      {/* Here we are calling the renderPage method which will return a component  */}
      {renderPage()}
      <Footer />
      </div>
    </div>
  );
}
