import './App.scss';
import Header from './components/Header/Header';
import Intro from './components/Intro/Intro';
import Skills from './components/Skills/Skills';
import Cta from './components/CtaSection/Cta';

function App() {
    return (
        <div className="app">
            <Header />
            <Intro />
            <Skills />
            <Cta />
        </div>
    );
}

export default App;
