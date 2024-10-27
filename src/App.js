import { Route, Routes } from 'react-router-dom';
import './App.css';
import ProductList from './Components/ProductList';
import ProductDetails from './Components/ProductDetails';
import Sidebar from './Components/Sidebar';
import Footer from './Components/Footer';
import Header from './Components/Header';
import SkillsPage from './Components/Pages/SkillsPage';
import StoriesPage from './Components/Pages/StoriesPage';
import AboutPage from './Components/Pages/AboutPage';
import ContactusPage from './Components/Pages/ContactUsPage';
import { useState } from 'react';


function App() {

  const [selectedCategory, setSelectedCategory] = useState("All");

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
  };

  return (
    <div className="app">
      <Header />
      <div className="main">
      <Sidebar onChange={handleCategoryChange} />
        <Routes>
          <Route path='/' element={<ProductList Category={selectedCategory} />} exact />
          <Route path='/:id' element={<ProductDetails />} />
          <Route path='/skills' element={<SkillsPage />} />
          <Route path='/stories' element={<StoriesPage />} />
          <Route path='/about' element={<AboutPage />} />
          <Route path='/contact' element={<ContactusPage />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );  
}

export default App;