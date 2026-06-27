import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Modalidades from './components/Modalidades';
import Planos from './components/Planos';
import Galeria from './components/Galeria';
import Contato from './components/Contato';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-kombat-white text-kombat-black">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Modalidades />
        <Planos />
        <Galeria />
        <Contato />
      </main>
      <Footer />
    </div>
  );
}

export default App;
