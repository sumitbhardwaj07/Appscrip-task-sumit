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


function App() {
  return (
    <div className="app">
      <Header />
      <div className="main">
      <Sidebar />
        <Routes>
          <Route path='/' element={<ProductList />} exact />
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