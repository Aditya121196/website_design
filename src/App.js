import React from 'react';
import Home from './Components/Home/Home';
import Products from './Components/Product/Products';
import Careers from './Components/Careers/Careers';
import Blogs from './Components/Blog/Blogs';
import Contacts from './Components/Contacts/Contacts';
import { Route, Routes } from 'react-router-dom';
import BlogInsider from './Components/Blog/BlogInsider';
import BlogInsider2 from './Components/Blog/BlogInsider2';
import BlogInsider3 from './Components/Blog/BlogInsider3';
import BlogInsider4 from './Components/Blog/BlogInsider4';
import BlogInsider5 from './Components/Blog/BlogInsider5';
import BlogInsider6 from './Components/Blog/BlogInsider6';
import Footer from './Components/Footer/Footer';
import CustomNavbar from './Components/CustomNavbar/CustomNavbar';

function App() {
  return (
    <div>
      <CustomNavbar />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/products" element={<Products />}></Route>
        <Route path="/careers" element={<Careers />}></Route>
        <Route path="/blogs" element={<Blogs />}></Route>
        <Route path="/bloginsider" element={<BlogInsider />}></Route>
        <Route path="/bloginsider2" element={<BlogInsider2 />}></Route>
        <Route path="/bloginsider3" element={<BlogInsider3 />}></Route>
        <Route path="/bloginsider4" element={<BlogInsider4 />}></Route>
        <Route path="/bloginsider5" element={<BlogInsider5 />}></Route>
        <Route path="/bloginsider6" element={<BlogInsider6 />}></Route>
        <Route path="/contacts" element={<Contacts />}></Route>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
