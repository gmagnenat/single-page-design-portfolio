import './App.scss';
import Header from './components/Header/Header';
import Intro from './components/Intro/Intro';
import Skills from './components/Skills/Skills';
import Cta from './components/CtaSection/Cta';
import BookCall from './components/BookCall/BookCall';
import Carousel from './components/Carousel/Carousel';
import imageData from './components/Slides/Slides';

function App() {
    return (
        <div className="app">
            <Header />
            <Intro />
            <Skills />
            <Cta />
            <Carousel slides={imageData} />
            <BookCall />
        </div>
    );
}

export default App;
