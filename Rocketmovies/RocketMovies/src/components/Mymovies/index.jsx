import { Container } from './styles';
import { Rating } from "../Rating";
import { Tag } from '../Tag';

export function Mymovies({ data, ...rest}){


  return (
    <Container {...rest}>
      <h1>{data.title}</h1>
      <Rating rate={data.rating}/>
      <p>{data.description}</p>
      {
        data.tags &&
        <footer>
          {
            data.tags.map(tag => <Tag key={tag.id} title={tag.name} />)
          }
        </footer>
      }
    </Container>
  )
}