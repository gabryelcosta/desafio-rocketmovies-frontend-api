import { AiOutlineArrowLeft } from 'react-icons/ai';
import { BiTimer } from 'react-icons/bi';
import { Container, Content } from './styles';
import { useNavigate, useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { api } from '../../services/api';
import { Header } from '../../components/Header';
import { ButtonText } from '../../components/ButtonText';
import { Rating } from '../../components/Rating';
import { Tag } from '../../components/Tag';
import { useAuth } from '../../hooks/auth';
import avatarPlaceholder from '../../assets/avatar_placeholder.svg';


export function ReviewMovie(){
  const { user } = useAuth();
  const [data, setData] = useState(null);
  const params = useParams();
  const navigate = new useNavigate();

  const avatarUrl = user.avatar ? `${api.defaults.baseURL}/files/${user.avatar}` : avatarPlaceholder

  function handleBack(){
    navigate(-1);
  }

  useEffect(() => {
    async function fetchNote(){
      const response = await api.get(`/films/${params.id}`);
      setData(response.data);
    }
    fetchNote();
  }, []);

  return(
    <Container>
      <Header />
        {
          data &&
          <main>
            <Content>
              <ButtonText icon={AiOutlineArrowLeft} title="Voltar" onClick={handleBack}/>
              <div className='movies'>
                <h1>{data.title}</h1>
                <Rating rate={data.rating} isBigSize />
              </div>
              <div className='perfil'>
                <img src={avatarUrl} alt={user.name} />
                <span>Por {user.name}</span>
                <BiTimer />
                <span>{data.created_at}</span>
              </div>
              {
              data &&
                <div className='tags'>
                  {
                    data.tags.map(tag => (
                    <Tag
                      key={String(tag.id)}
                      title={tag.name}
                    />
                    ))
                  }
                </div>
              }
              <div className='description'>
                {data.description}
              </div>
            </Content>
          </main>
        }
    </Container>
  )
}