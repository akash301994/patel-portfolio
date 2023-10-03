import { Routes, Route } from 'react-router-dom';
import Navbar from './components/navbar';
import AboutMe from './components/aboutMe';
import ContactMe from './components/contactMe';
import Footer from './components/footer';
import Header from './components/header';
import Home from './components/home';
import Projects from './components/projects';



function App() {
  return (
    <>
      <Navbar />
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about-me" element={<AboutMe />} />
        <Route path="/contact-me" element={<ContactMe />} />
        <Route path="/projects" element={<Projects />} />
        {/* <Route path="/resume" element={<Resume />} /> */}
      </Routes>
      <Footer />
      </>
  );
}

export default App;

