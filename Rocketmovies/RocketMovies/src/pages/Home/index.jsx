import { FiPlus } from 'react-icons/fi'
import { Container, Content, NewMovie } from './styles';
import { useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { api } from '../../services/api';
import { Header } from '../../components/Header';
import { Mymovies } from '../../components/Mymovies';

export function Home(){
  const [films, setFilms] = useState([]);
  const [search, setSearch] = useState("");
  const navigate = new useNavigate();

  function handleNew(){
    navigate("/new");
  }

  function handleReviews(id){
    navigate(`/review/${id}`);
  }

  useEffect(() => {
    async function fetchFilms() {
        const response = await api.get(`/films?title=${search}`)
        setFilms(response.data)
    }
    fetchFilms();
}, [search])



  return(
    <Container>
      <Header  onChange={(e) => setSearch(e.target.value)}/>
      <header>
        <h1>Meus Filmes</h1>
        <NewMovie onClick={handleNew}>
          <FiPlus />Adicionar Filme
        </NewMovie>
      </header>
      <main>
        <Content>
          {
            films.map(films => (
            <Mymovies
              key={String(films.id)}
              data={films}
              onClick={() => handleReviews(films.id)}
          />
          ))
          }
        </Content>
      </main>
    </Container>
  )
}