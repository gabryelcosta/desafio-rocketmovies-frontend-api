import { AiOutlineArrowLeft } from 'react-icons/ai'
import { Container, Content } from './styles'
import { TagMarcadores } from '../../components/TagMarcadores'
import { useNavigate } from 'react-router-dom'
import { ButtonText } from '../../components/ButtonText'
import { TextArea } from '../../components/TextArea'
import { useState } from 'react';
import { Header } from '../../components/Header'
import { Button } from '../../components/Button'
import { Input } from '../../components/Input'
import { api } from '../../services/api';


export function NewMovies(){
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [rating, setRating] = useState("");
  const [tags, setTags] = useState([]);
  const [newTag, setNewTag] = useState("");
  const navigate = new useNavigate();

  function handleBack(){
    navigate(-1)
  }

  function handleAddTag(){
    setTags(prevState => [...prevState, newTag]);
    setNewTag("")
  }

  function handleRemoveTag(deleted){
    setTags(prevState => prevState.filter(tag => tag !== deleted));
  }

  async function handleNewFilms(){
    if(!title){
      return alert("Digite o título do filme.");
    }

    if(!rating){
      return alert("De uma nota para o filme.");
    }

    if(newTag){
      return alert("Você deixou uma tag no campo para adicionar, mas não clicou em adicionar. Clique para adicionar ou deixe o campo vázio.");
    }

  await api.post("/films", {
    title,
    description,
    rating,
    tags
  })

  alert("Review do filme criado com sucesso!");
  navigate(-1)
  }

  return(
    <Container>
      <Header />
      <main>
        <Content>
            <ButtonText icon={AiOutlineArrowLeft}  title="voltar" onClick={handleBack}/>
          <h1>Novo Filme</h1>

          <div className="input">
            <Input placeholder="Título" onChange={e => setTitle(e.target.value)}/>
            <Input placeholder="Sua nota (de 0 a 5)" onChange={e => setRating(e.target.value)}/>
          </div>

          <TextArea placeholder="Observações" onChange={e => setDescription(e.target.value)}/>

          <h2>Marcadores</h2>
          <div className="marcadores">
            {
              tags.map((tag, index) => (
            <TagMarcadores
              key={String(index)}
              value={tag}
              onClick={() => handleRemoveTag(tag)}
              />
            ))
            }
            {
            <TagMarcadores
              isNew
              placeholder="Nova Tag"
              onChange={e => setNewTag(e.target.value)}
              value={newTag}
              onClick={handleAddTag}
            />
            }
          </div>

          <div className='buttons'>
            <Button title="Excluir Filme" onClick={handleBack}/>
            <Button title="Salvar alterações" onClick={handleNewFilms}/>
          </div>
        </Content>
      </main>
    </Container>
  )
}