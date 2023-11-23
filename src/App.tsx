import React, { createContext, useState, FC, Dispatch, SetStateAction } from 'react';
import './App.scss';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Characters from './pages/Characters/Characters';
import Episodes from './pages/Episodes/Episodes';
import Locations from './pages/Locations/Locations';
import Footer from './components/Footer';
import CharactersDetails from './pages/CharacterDetails';
import LocationDetails from './pages/LocationDetails';
import EpisodeDetails from './pages/EpisodeDetails';

export interface SearchContextProps {
  searchValue: string;
  setSearchValue: Dispatch<SetStateAction<string>>;
  locationValue: string;
  setLocationValue: Dispatch<SetStateAction<string>>;
  episodesValue: string;
  setEpisodesValue: Dispatch<SetStateAction<string>>;
}

export const SearchContext = createContext<SearchContextProps | null>(null);

const App: FC = () => {
  const [searchValue, setSearchValue] = useState<string>('');
  const [locationValue, setLocationValue] = useState<string>('');
  const [episodesValue, setEpisodesValue] = useState<string>('');

  return (
    <div className="App">
      <Header />
      <SearchContext.Provider value={{ searchValue, setSearchValue,locationValue, setLocationValue, episodesValue,setEpisodesValue }}>

        <Routes>
            <Route path="/characters" element={<Characters />} />
            <Route path="/episodes" element={<Episodes />} />
            <Route path="/locations" element={<Locations />} />
            <Route path="/characters-details/:id" element={<CharactersDetails />} />
            <Route path="/location-details/:id" element={<LocationDetails />} />
            <Route path="/episode-details/:id" element={<EpisodeDetails />} />
        </Routes>

      </SearchContext.Provider>
      <Footer />
    </div>
  );
};

export default App;