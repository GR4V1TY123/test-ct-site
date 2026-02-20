import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Stats from "./components/Stats";
import About from "./components/About";
import Events from "./components/Events";
import CTA from "./components/CTA";
import Footer from "./components/Footer";
import ImageFlow from './components/ImageFlow';

function App() {
    return (
        <>
            <div className="comic-frame"></div>
            <Navbar />
            <Hero />
            <Stats />
            <About />
            <Events />
            <CTA />
            <ImageFlow/>
            <Footer />
        </>
    );
}

export default App;
