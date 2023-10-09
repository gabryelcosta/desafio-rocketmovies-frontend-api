import { Container } from "./style";
import { FaStar, FaRegStar } from 'react-icons/fa';

export function Rating({ rate, isBigSize}){
  let stars = []

  for (let i = 1; i <= 5; i++){
    if (i <= rate){
      stars.push(<FaStar key={i} />);
    } else {
      stars.push(<FaRegStar key={i}/>);
    }
  }

  return <Container isBigSize={isBigSize}>{stars}</Container>;
}