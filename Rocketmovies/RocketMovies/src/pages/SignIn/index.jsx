import { Container, Form, Background, ToEnter } from './styles';
import { FiMail, FiLock } from 'react-icons/fi';
import { useNavigate } from 'react-router-dom';
import { ButtonText } from '../../components/ButtonText'
import { useState } from 'react'
import { useAuth } from '../../hooks/auth';
import { Button } from '../../components/Button';
import { Input } from '../../components/Input';

export function SignIn(){
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = new useNavigate();

  const { signIn } = useAuth();

  function handleSignUp(){
    navigate("/register")
  }

  function handleSignIn(){
    signIn({ email, password })
  }

  return(
    <Container>
      <Form>
        <h1>RocketMovies</h1>
        <p>Aplicação para acompanhar tudo que assistir.</p>
        <h2>Faça seu login</h2>
        <div className='inputs'>
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
        <ToEnter to="/">
        <Button title="Entrar" onClick={handleSignIn}/>
        </ToEnter>
          <ButtonText title="Criar Conta" onClick={handleSignUp}/>
      </Form>
      <Background />
    </Container>
  )
}