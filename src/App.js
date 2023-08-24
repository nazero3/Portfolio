import './App.css';
import Navbar from './components/navbar';
//import Heading from './components/heading';
import Contactbar from './components/contactbar';
import Footer from './components/footer'
import Home from './sections/home'
import Experience from './sections/experience';
import About from './sections/about';
import Contact from './sections/contact';
import Work from './sections/work';

function App() {
  return (
    <main className='main'>
      <Navbar />
      <div className='app_section_container'>
        <Home />
        <About />
        <Experience />
        <Work />
        <Contact />
      </div>
      <Contactbar />
      <Footer />
    </main>
  );
}
//

export default App;
