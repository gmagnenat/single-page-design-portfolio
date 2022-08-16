import './App.scss';
import Header from './components/Header/Header';
import Intro from './components/Intro/Intro';
import Skills from './components/Skills/Skills';
import Cta from './components/CtaSection/Cta';
import BookCall from './components/BookCall/BookCall';
import Footer from './components/Footer/Footer';

function App() {
    return (
        <div className="app">
            <Header />
            <Intro />
            <Skills />
            <Cta />
            <BookCall />
            <Footer />
        </div>
    );
}

export default App;
