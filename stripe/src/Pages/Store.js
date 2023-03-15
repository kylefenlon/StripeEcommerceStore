import { Row, Col } from 'react-bootstrap'
import { products } from '../productsStore';
import ProductCard from '../Components/ProductCard';

const Store = () => {
    return (
        <>
            <h1 align="center" className='p-3'>Welcome to Fenlon Store</h1>
            <Row xs={1} md={3} className="g-4">
                {products.map((product, id) => (
                    <Col align="center" key={id}>
                        <ProductCard product={product} />
                    </Col>
                ))}


            </Row>
        </>
    )
}

export default Store;