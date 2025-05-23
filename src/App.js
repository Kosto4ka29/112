import React from 'react';
import { Routes, Route } from 'react-router-dom'; 
import Container from './components/Container/Container.js';
import NavBar from './components/NavBar/NavBar.js';
import ListPage from './views/ListPage.js';




// widoki
import Home from './views/Home.js';
import About from './views/About.js';
import Favorite from './views/Favorite.js';
import NotFound from './views/NotFound.js';

const App = () => {
  return (
    <main>
      <NavBar />
      <Container>
        <Routes>
          
          <Route path="/" element={<Home />} />
          <Route path="/favorite" element={<Favorite />} />
          <Route path="/about" element={<About />} />
          <Route path="/list/:listId" element={<ListPage />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Container>
    </main>
  );
};

export default App;
