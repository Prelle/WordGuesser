import './App.css';
import { Outlet } from 'react-router-dom';

import Header from './components/Header';
import Footer from './components/Footer';

// add a comment to test the pipeline
function App() {
  return (
    <div className="flex-column justify-flex-start min-100-vh">
      <Header />
      <div className="container">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
}

export default App;
