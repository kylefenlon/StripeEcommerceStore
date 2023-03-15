import React from 'react'
import { Card, Button, Form, Row, Col } from 'react-bootstrap'
import { CartContext } from '../CartContext'
import { useContext } from 'react';

const ProductCard = (props) => {
    const product = props.product;
    const cart = useContext(CartContext);
    const productQuantity = cart.getProductQuantity(product.id);


    return (
        <Card>
            <Card.Body>
                <Card.Title>{product.title}</Card.Title>
                <Card.Text>£{product.price}</Card.Text>
                {productQuantity > 0 ?
                    <>
                        <Form as={Row}>
                            <Form.Label coumn="true" sm="6">In Cart: {productQuantity}</Form.Label>
                            <Col sm="6">
                                <Button sm="6" onClick={() => cart.addToCart(product.id)} className='mx-2'>+</Button>
                                <Button sm="6" onClick={() => cart.removeFromCart(product.id)} className='mx-2'>-</Button>
                            </Col>
                        </Form>
                        <Button variant="danger" onClick={() => cart.deleteFromCart(product.id)} className='my-2'>Remove From CART</Button>
                    </>
                    :
                    <Button variant="primary" onClick={() => cart.addToCart(product.id)}>Add to Cart</Button>
                }
            </Card.Body>
        </Card>
    )
}

export default ProductCard
