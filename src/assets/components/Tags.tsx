import Badge from 'react-bootstrap/Badge';
import Stack from 'react-bootstrap/Stack';

interface Tags {
    color:string;
    text:string;
}

const Tags: React.FC<Tags> = ({color, text}) =>{
  return (
    <Stack direction="horizontal" gap={2}>
      <Badge bg={color}>{text}</Badge>
    </Stack>
  );
}

export default Tags;