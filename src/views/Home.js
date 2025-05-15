import React from 'react';
import Hero from '../components/Hero/Hero.js';
import SearchForm from '../components/SearchForm/SearchForm.js';
import Lists from '../components/Lists/Lists.js';

const Home = () => {
  return (
    <>
      <Hero />
      <SearchForm />
      <Lists />
    </>
  );
};

export default Home;
