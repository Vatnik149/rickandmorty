import React, { FC, useEffect, useState } from 'react';
import './style.scss';
import { Link, useParams } from 'react-router-dom';
import Profile from '../../components/EpisodesDetails/Profile';
import Information from '../../components/CharacterDetails/Informations';
import Episodes from '../Episodes/Episodes';
import CharacterService from '../../services/CharacterService';
import { CharactersModels } from '../../models/CharacterModels';
import EpisodesService from '../../services/EpisodesService';
import { EpisodeModels } from '../../models/EpisodesModels';

import { LocationModels } from '../../models/LocationModels';
import LocationsService from '../../services/LocationService';
import CharacterCard from '../../components/CharacterCard';

const EpisodeDetails: FC = () => {
  const { id } = useParams<string>();
  const [episode, setEpisode] = useState<EpisodeModels | null>(null);
  const [cast, setCast] = useState<CharactersModels[]>([]);
  const [loading, setLoading] = useState<boolean>(true);


  async function fetchEpisode() {
    try {
      const response = await EpisodesService.sortEpisode(`${id}`);
      setEpisode(response.data);
      if (response.data.characters) {
        const castArray: CharactersModels[] = await Promise.all(
          response.data.characters.map(async (charactersId: string) => {
            try {
              const charactersResponse = await CharacterService.sortEpisodes(charactersId);
              return charactersResponse.data;
            } catch (error) {
              console.error('Error fetching episode:', error);
              return null;
            }
          })
        );
  
        setCast(castArray.filter(Boolean));
        console.log(castArray);
        console.log(cast);
      } else {
        console.error("No episode data found for this character.");
      }
    } catch (error) {
      console.error('Error fetching characters:', error);
    } finally {
      setLoading(false);
    }
  }

  async function sortEpisodes() {
    try {
      if (episode) {
        
      }
    } catch (error) {
      console.error('Error fetching episodes:', error);
    }
  }
  useEffect(() => {
    fetchEpisode();
    sortEpisodes()
  }, [id]);
  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="infoEp-details">
    <div className="container">
      {episode && (
        <div key={episode.id}>
          <Profile  name={episode.name} episode={episode.episode} air_date={episode.air_date} />
          <div className="charactersList">
              <div className="head">
                  <h1>Residents</h1>
              </div>
              <section className="cardblock">
                {
                 cast.map((obj:CharactersModels, i:number) => (
                  <Link className="linkResedents" to={`/character-details/:${obj.url}`}>
                        <CharacterCard image={obj.image} name={obj.name} gender={obj.gender}/>
                  </Link>
                ))
                }
              </section>
              </div>
        </div>
      )}
    </div>
    </div>
  );
};
export default EpisodeDetails;
