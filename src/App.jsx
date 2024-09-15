import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';
import About from './components/AboutUs/About';
import { Outlet } from 'react-router-dom';
import ScrollTop from './components/scroll/ScrollToTop'
function App() {
  return (
    <div>
      <ScrollTop />
      <Header />
      <Outlet />
        <Footer />
        {/* </ScrollTop> */}
      {/* <About /> */}
    </div>
  );
}

export default App; 
