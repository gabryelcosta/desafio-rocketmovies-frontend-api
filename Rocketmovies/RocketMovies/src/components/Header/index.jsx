import { Container, Profile} from './styles';
import { FcSearch } from 'react-icons/fc';
import { Input } from '../../components/Input';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../hooks/auth';
import avatarPlaceholder from '../../assets/avatar_placeholder.svg';
import { api } from '../../services/api';

export function Header(){
  const { signOut, user } = useAuth();
  const navigate = new useNavigate();

  function handleBackHome(){
    navigate("/");
  }

  function handleProfile(){
    navigate("/profile");
  }

  function handleLogOut(){
    navigate("/");
    signOut();
  }

  const avatarUrl = user.avatar ? `${api.defaults.baseURL}/files/${user.avatar}` : avatarPlaceholder;

  return(
    <Container>
      <h1 onClick={handleBackHome}>RocketMovies</h1>
      <Input placeholder="Pesquisar pelo título" icon={FcSearch} />
      <Profile>
        <div>
          <strong onClick={handleProfile}>{user.name}</strong>
          <span onClick={handleLogOut}>Sair</span>
        </div>
        <img src={avatarUrl} alt={user.name} onClick={handleProfile}/>
      </Profile>
    </Container>
  )
}