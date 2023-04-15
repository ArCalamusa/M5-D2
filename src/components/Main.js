import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { useEffect } from 'react';

const Main = () => {

    const getProductData = async () => {
        try {
            const data = await fetch("https://dummyjson.com/products");
            return await data.json();
        } catch (error) {
            if (error) throw new Error("Errore di caricamento");
        }
    }
    useEffect(() => {
        getProductData().then(res => console.log(res));
    },[]);

    return (
        <Container>
            <Row>
                <Col>
                </Col>
            </Row>
        </Container>
    )
}

export default Main