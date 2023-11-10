import axios from 'axios';
import { useEffect, useState, useMemo } from 'react';
import { Header } from './components/Header';
import './App.css';

interface PlanetProps {
  id: string;
  englishName: string;
  gravity: number;
  density: number;
  isPlanet: boolean;
}

function Home() {
  const [planets, setPlanets] = useState<PlanetProps[]>([]);
  const [loading, setLoading] = useState(false);
  const [search, setSearch] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 20; 

  useEffect(() => {
    setLoading(true);
    axios
      .get('https://api.le-systeme-solaire.net/rest/bodies/')
      .then((result) => {
        setPlanets(result.data.bodies.map((planet: PlanetProps) => planet));
        setLoading(false);
      })
      .catch((err) => {
        console.error('Something went wrong ', err);
        setLoading(false);
      });
  }, []);

  const filteredPlanets = useMemo(() => {
    let filteredList = planets;

    if (search !== '') {
      const searchLower = search.toLowerCase();
      filteredList = planets.filter(
        (planet) => planet.englishName.toLowerCase().includes(searchLower)
      );
    }

    return filteredList;
  }, [search, planets]);

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = filteredPlanets.slice(indexOfFirstItem, indexOfLastItem);

  const paginate = (pageNumber: number) => {
    setCurrentPage(pageNumber);
    window.scrollTo({ top: 0, behavior: 'smooth' }); 
  };

  return (
    <>
      <Header
        title="Solar System"
        subtitle="Discover the stars in our solar system"
        input="Search..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        loading={loading}
      />

      {currentItems.length > 0 ? (
        <>
          <div className="card-container">
            {currentItems.map(({ id, englishName, gravity, density, isPlanet }) => (
              <div key={id} className="planet-card">
                <h2>{englishName}</h2>
                <ul>
                  <li><strong>⭐ ID:</strong> {id}</li>
                  <li><strong>⭐ Gravity:</strong> {gravity}</li>
                  <li><strong>⭐ Density:</strong> {density}</li>
                  <li><strong>⭐ Is it a Planet?</strong> {isPlanet ? 'Yes' : 'No'}</li>
                </ul>
              </div>
            ))}
          </div>
          <div className="pagination">
            {Array.from({ length: Math.ceil(filteredPlanets.length / itemsPerPage) }).map(
              (_, index) => (
                <button key={index + 1} onClick={() => paginate(index + 1)}>
                  {index + 1}
                </button>
              )
            )}
          </div>
        </>
      ) : (
        <p>Loading...</p>
      )}

    <footer><small>&copy; Desenvolvido por Jéssica Sobreira, 2023.</small></footer>
    </>
  );

}

export default Home;