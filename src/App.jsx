import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';
import About from './components/AboutUs/About';
import { Outlet } from 'react-router-dom';

function App() {
  return (
    <div>
      <Header />
      <Outlet />
      <Footer/>
      {/* <About /> */}
    </div>
  );
}

export default App; 
