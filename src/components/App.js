import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './Header';
import Home from './Pages/home';
import Pokemones from './Pages/Pokemones/Pokemones';
import Tipos from './Pages/Tipos/Type';
import styles from './App.module.css';

const App = () => {
  return (
    <Router>
      <div className={styles.app}>
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/pokemones" element={<Pokemones />} />
            <Route path="/tipos" element={<Tipos />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
};

export default App;
