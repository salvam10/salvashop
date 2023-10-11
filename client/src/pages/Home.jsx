import React from "react";
import Navbar from "../features/Navbar/Navbar";
import Announcement from "../features/Announcement/Announcement";
import Slider from "../features/Slider/Slider";
import Categories from "../features/Categories/Categories";
import Products from "../features/Products/Products";
import Newsletter from "../features/Newsletter/Newsletter";
import Footer from "../features/Footer/Footer";


const Home = () => {

  return (
    <div>
      <Announcement />
      <Navbar />
      <Slider />
      <Categories />
      <Newsletter />
      <Footer/>
    </div>
  );
};

export default Home;
