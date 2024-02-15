import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Helmet } from "react-helmet";
import Nav from "./componenets/common/Nav";
import Footer from "./componenets/common/Footer";
import Home from "./componenets/home/Home";
import About from "./componenets/home/About";
import Menu from "./componenets/menu/Menu";
import BookTable from "./componenets/bookTable/BookTable";
import OrderOnline from "./componenets/orderOnline/OrderOnline";
import Logo from "./assets/Logo.svg"

const App = () => {
  return (
    <Router>
      <div>
        <Helmet>
        <meta name="og:Title" content="Little Lemon"/>
          <meta
            name="og:description"
            content="A tasty resturant that serves delicious food."
          />
          <meta name="og:image" content={Logo}/>
        </Helmet>
        <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/book-table" element={<BookTable />} />
          <Route path="/order-online" element={<OrderOnline />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
