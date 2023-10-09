import { Container, Form, Background } from './styles';
import { FiMail, FiLock, FiUser } from 'react-icons/fi';
import { useNavigate } from 'react-router-dom';
import { ButtonText } from '../../components/ButtonText';
import { useState } from 'react';
import { Button } from '../../components/Button';
import { Input } from '../../components/Input';
import { api } from '../../services/api';

export function SignUp(){
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = new useNavigate();

  function handleLogin(){
    navigate("/");
  }

  function handleSignUp(){
    if(!name || !email || !password){
      return alert("Preencha todos os campos!")
    }

    api.post("/users", { name, email, password })
    .then(() => {
      alert("Usuário cadastrado com sucesso!")
      navigate("/")
    })
    .catch(error =>{
      if(error.response){
        alert(error.response.data.message)
      } else {
        alert("Não foi possível cadastrar")
      }
    })
  }

  return(
    <Container>
      <Form>
        <h1>RocketMovies</h1>
        <p>Aplicação para acompanhar tudo que assistir.</p>
        <h2>Crie sua conta</h2>
        <div className='inputs'>
          <Input
          placeholder="Nome"
          type="text"
          icon={FiUser}
          onChange={e => setName(e.target.value)}
          />
          <Input
          placeholder="E-mail"
          type="text"
          icon={FiMail}
          onChange={e => setEmail(e.target.value)}
          />
          <Input
          placeholder="Senha"
          type="password"
          icon={FiLock}
          onChange={e => setPassword(e.target.value)}
          />
        </div>
        <Button title="Cadastrar" onClick={handleSignUp}/>
        <ButtonText title="Voltar para o login" onClick={handleLogin}/>
      </Form>
      <Background />
    </Container>
  )
}