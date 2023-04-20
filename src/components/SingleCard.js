import Button from "react-bootstrap/Button";
import { Card } from "react-bootstrap";
import { Col } from "react-bootstrap/Col";
import { Row } from "react-bootstrap/Row";


const SingleCard = ({ title, asin, img, catogory, price }) => { //destrutturiamo l'oggetto
    return (
        <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={img} />
            <Card.Body>
                <Card.Title as='h6'>{asin}</Card.Title>
                <Card.Title>{title}</Card.Title>
                <Card.Text>{catogory}</Card.Text>
                <Card.Text>{price}</Card.Text>
                <Button variant="primary">Go somewhere</Button>
            </Card.Body>
        </Card>
    )
}

export default SingleCard;