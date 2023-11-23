import React, { FC, useEffect, useState } from 'react';
import './style.scss';
import { Link, useParams } from 'react-router-dom';
import Profile from '../../components/CharacterDetails/Profile';
import Information from '../../components/CharacterDetails/Informations';
import CharacterService from '../../services/CharacterService';
import { CharactersModels } from '../../models/CharacterModels';
import EpisodesService from '../../services/EpisodesService';
import { EpisodeModels } from '../../models/EpisodesModels';
import EpisodeCart from '../../components/CharacterDetails/EpisodeCart';


const CharactersDetails: FC = () => {
  const { id } = useParams<string>();
  const [character, setCharacter] = useState<CharactersModels | null>(null);
  const [episodes, setEpisodes] = useState<EpisodeModels[]>([]);
  const [loading, setLoading] = useState<boolean>(true);


  async function fetchCharacters() {
    try {
      // Fetch character details
      const response = await CharacterService.characterDetailsProfile(`${id}`);
      setCharacter(response.data);
  
      if (response.data.episode) {
        const episodeArray: EpisodeModels[] = await Promise.all(
          response.data.episode.map(async (episodeId: string) => {
            try {
              const episodesResponse = await CharacterService.sortEpisodes(episodeId);
              return episodesResponse.data;
            } catch (error) {
              console.error('Error fetching episode:', error);
              return null;
            }
          })
        );
  
        setEpisodes(episodeArray.filter(Boolean));
        console.log(episodeArray);
        console.log(episodes);
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
      if (character) {
       
      }
    } catch (error) {
      console.error('Error fetching episodes:', error);
    }
  }
  useEffect(() => {
   

    fetchCharacters();
    sortEpisodes()
  }, [id]);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="character-details">
      <div className="container">
      {character && (
        <div key={character.id}>
          <Profile name={character.name} image={character.image} />
          <div className="info-episodes">

            <Information
              gender={character.gender}
              status={character.status}
              species={character.species}
              type={character.type}
              location={character.location}
              origin={character.origin}
            />

              <section className="episodesDetails">
                  <div className="head">
                      <h3>Episodes</h3>
                  </div>
                  <ul className="episodes-item">
                
                {
                 episodes.map((obj:EpisodeModels, i:number) => (
                  <li>
                  <Link className='linkEpisode' to={`/episodes/:${obj.url}`}>
                    <EpisodeCart key={obj.id} name={obj.name} num={obj.episode} airDate={obj.air_date}/>
                  </Link>
                  </li>
                ))
                }
                    </ul>
              </section>
          </div>
        </div>
      )}
    </div>
    </div>
  );
};

export default CharactersDetails;
