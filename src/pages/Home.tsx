import Hero from '../components/Hero';
import Projects from '../components/Projects';
import Contact from '../components/Contact';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import Skills from '../components/Skills';
import Awards from '../components/Awards';

function Home() {
    return <div>
        <Navbar />
        <Hero />
        <Skills />
        <Projects />
        <Awards />
        <Contact />
        <Footer />
    </div>
}

export default Home;