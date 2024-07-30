

import { Container, Row, Col } from 'reactstrap';
import '../styles/home.css'; // Make sure to create this CSS file

const Home = () => {
    return (
        <div className="home">
            <div className="background-image">
                <Container>
                    <Row>
                        <Col md="12" className="description">
                            <h1>Welcome to Indigo Airlines</h1>
                            <p>
                                Welcome aboard Indigo Airlines! We are here to provide you with an exceptional travel experience.
                                Book your tickets with us and embark on a journey of comfort and convenience. Our team is dedicated
                                to ensuring your flight is pleasant and enjoyable. Explore our services, book your tickets, and get
                                ready for an unforgettable journey!
                            </p>
                        </Col>
                    </Row>
                </Container>
            </div>
        </div>
    );
}

export default Home;

