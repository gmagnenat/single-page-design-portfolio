import './App.scss';
import Header from './components/Header/Header';
import Intro from './components/Intro/Intro';
import Skills from './components/Skills/Skills';
import Cta from './components/CtaSection/Cta';
import BookCall from './components/BookCall/BookCall';

function App() {
    return (
        <div className="app">
            <Header />
            <Intro />
            <Skills />
            <Cta />
            <BookCall />
        </div>
    );
}

export default App;
