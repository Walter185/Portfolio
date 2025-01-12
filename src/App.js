import { ToastContainer } from 'react-toastify';
import Footer from './components/Footer';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import { Loginpage } from './components/Login/Loginpage';
import NotFound from './pages/ErrorPage';

function App(props) {
  return (
    <>
      <ToastContainer autoClose={2000} hideProgressBar />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Loginpage />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
      <Footer />

    </>
  );
}

export default App;