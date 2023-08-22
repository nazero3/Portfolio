import './App.css';
import Navbar from './components/navbar';
import Heading from './components/heading';
import Contactbar from './components/contactbar';
import Footer from './components/footer'


function App() {
  return (
    <main className='main'>
      <Navbar />
      <Contactbar />
      <Footer />
    </main>
  );
}

export default App;
