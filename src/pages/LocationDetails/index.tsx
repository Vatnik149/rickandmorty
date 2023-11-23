import React, { FC, useEffect, useState } from 'react';
import './style.scss';
import { Link, useParams } from 'react-router-dom';
import Profile from '../../components/LocationDetails/Profile';
import Information from '../../components/CharacterDetails/Informations';
import Episodes from '../Episodes/Episodes';
import CharacterService from '../../services/CharacterService';
import { CharactersModels } from '../../models/CharacterModels';
import EpisodesService from '../../services/EpisodesService';
import { LocationModels } from '../../models/LocationModels';
import LocationsService from '../../services/LocationService';
import CharacterCard from '../../components/CharacterCard';

const LocationDetails: FC = () => {
  const { id } = useParams<string>();
  const [location, setLocation] = useState<LocationModels | null>(null);
  const [resedents, setResedents] = useState<CharactersModels[]>([]);
  const [loading, setLoading] = useState<boolean>(true);


  async function fetchLocation() {
    try {
      const response = await LocationsService.locationProfile(`${id}`);
      setLocation(response.data);
  
      if (response.data.residents) {
        const resedentsArray: CharactersModels[] = await Promise.all(
          response.data.residents.map(async (resedentId: string) => {
            try {
              const resedentResponse = await CharacterService.sortEpisodes(resedentId);
              return resedentResponse.data;
            } catch (error) {
              console.error('Error fetching episode:', error);
              return null;
            }
          })
        );
  
        setResedents(resedentsArray.filter(Boolean));
        console.log(resedentsArray);
        console.log(resedents);
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
      if (location) {
        
      }
    } catch (error) {
      console.error('Error fetching episodes:', error);
    }
  }
  useEffect(() => {
    fetchLocation();
    sortEpisodes()
  }, [id]);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="infoEp-details">
    <div className="container">
      {location && (
        <div key={location.id}>
          <Profile  name={location.name} dimension={location.dimension} type={location.type} />
          <div className="charactersList">
              <div className="head">
                  <h1>Residents</h1>
              </div>
              <section className="cardblock">
                {
                 resedents.map((obj:CharactersModels, i:number) => (
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

export default LocationDetails;
