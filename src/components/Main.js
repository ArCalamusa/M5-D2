import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { useEffect } from 'react';
import SingleCard from './SingleCard';
import data from '../data/fantasy.json'

const Main = () => {

    // const getProductData = async () => {
    //     try {
    //         const data = await fetch("https://dummyjson.com/products");
    //         return await data.json();
    //     } catch (error) {
    //         if (error) throw new Error("Errore di caricamento");
    //     }
    // }
    // useEffect(() => {
    //     getProductData().then(res => console.log(res));
    // }, []);

    return (
        <Container className='my-5'>
            <Row>
                <Col sm={12} className='d-flex flex-wrap justify-content-center gap-3'>
                    {data.map((item) => {
                        return (
                            <SingleCard
                                title={item.title}
                                img={item.img}
                                asin={item.asin}
                                price={item.price}
                                category={item.category}
                            />
                        )
                    })}
                </Col>
            </Row>
        </Container>
    )
}

export default Main;