import Card from 'react-bootstrap/Card';
import Tags from './Tags';

interface MyCard {
    image: string;
    name: string;
    description: string;
    color:string;
    text:string;
}

const MyCard: React.FC<MyCard> = ({image, name, description, color, text}) => {
  return (
    <div className='card'>
     <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={image} />
      <Card.Body>
        <Card.Title>{name}</Card.Title>
        <Card.Text>{description}</Card.Text>
        <Tags color={color} text={text}/>
      </Card.Body>
    </Card>
    </div>
  )
}

export default MyCard


