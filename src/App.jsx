import './App.scss';
import Header from './components/Header/Header';
import Intro from './components/Intro/Intro';
import Skills from './components/Skills/Skills';

function App() {
    return (
        <div className="app">
            <Header />
            <Intro />
            <Skills />
        </div>
    );
}

export default App;
