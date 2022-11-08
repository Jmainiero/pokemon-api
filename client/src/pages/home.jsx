import React from 'react';
import { Nav } from '../components/pages/home/nav';
import { Search } from '../components/pages/home/primary-form';
import { Pikachu } from '../components/pages/home/pikachu';


export const Home = () => {
    return(
        <div className="App">
          <Nav />
          <p className="silhouette">Pikachu</p>
          <div className="float-container">
            <Search />
            <Pikachu />
          </div>
        </div>
    );
}
