import React from 'react';
import { Nav } from '../components/nav';
import { Search } from '../components/primary-form';
import { Pikachu } from '../components/pikachu';


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
