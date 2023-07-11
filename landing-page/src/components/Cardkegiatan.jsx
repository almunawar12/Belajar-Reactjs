import Card from 'react-bootstrap/Card';

const Cardkegiatan = (props)=> {
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={props.image} />
      <Card.Body>
        <Card.Text>
          {props.des}
        </Card.Text>
      </Card.Body>
    </Card>
  );
}

export default Cardkegiatan;