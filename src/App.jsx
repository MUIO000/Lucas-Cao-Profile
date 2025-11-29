import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import './styles/index.css';

function App() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <About />
      <Projects />
      
      {/* TODO: Add more sections */}
      {/* <Skills /> */}
      {/* <Experience /> */}
      {/* <Contact /> */}
      
      {/* Footer */}
      <footer className="py-8 text-center">
        <div className="container mx-auto px-6">
          <p className="text-gray-600">
            Made with 💜 by Lucas Cao • © 2024
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;
