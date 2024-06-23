import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Carousel from 'react-bootstrap/Carousel';
import { Row, Col, Card } from 'react-bootstrap';
import logo from './distance_learning.jpeg';
import event2 from './event2.jpeg'
import event3 from './event3.jpeg'
import vision from './vision.jpeg'
const Home= () => {
  return (
    
    <div className="container-fluid" style={{width:'100%'}}>
     
      <br/>
      <Carousel style={{width:'100%'}} >
        {/* Add your carousel slides here */}
        <Carousel.Item>
          <img src={logo} alt="First slide" style={{ width: '100%' ,height:'500px'}}/>
        </Carousel.Item>
        <Carousel.Item>
          <img src={event2} alt="Second slide" style={{ width: '100%' ,height:'500px'}}/>
        </Carousel.Item>
        <Carousel.Item>
        <img src={event3} alt="Second slide" style={{ width: '100%' ,height:'500px'}}/>
        </Carousel.Item>
      </Carousel>
      <section style={{marginTop:'20px'}}>
        <Row>
        <Col xs={12} md={3}>
            <img src={vision} alt="Mission Image" style={{Width:'300px', height:'auto',marginTop:'50px',paddingLeft:'30px'}} />
          </Col>
          <Col xs={12} md={9}>
            <h2 style={{paddingTop:'40px',paddingLeft:'30px'}}>Vision</h2>
            <p style={{paddingTop:'20px',paddingLeft:'30px'}}>Every child should have equitable chance of good quality education.Our moto  is to create a world where every child, regardless of ability, enjoys equal opportunities, full inclusion in society, and access to quality education and healthcare, fostering their independence and well-being.
            </p>
          </Col>
        </Row>
      </section>
      <br></br>
      <section style={{ marginTop: '20px' }}>
        <Row>
          {/* Column 1 */}
          <Col xs={12} md={3}>
            <Card>
              <Card.Body>
                <Card.Title>NIOS Academics</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up the bulk of the card's content.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>

          {/* Column 2 */}
          <Col xs={12} md={3}>
            <Card>
              <Card.Body>
                <Card.Title>Vocal Training</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up the bulk of the card's content.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>

          {/* Column 3 */}
          <Col xs={12} md={3}>
            <Card>
              <Card.Body>
                <Card.Title>Therapies</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up the bulk of the card's content.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>

          {/* Column 4 */}
          <Col xs={12} md={3}>
            <Card>
              <Card.Body>
                <Card.Title>Parents Counsilling</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up the bulk of the card's content.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </section>
      <footer>
        <hr></hr>
        <div style={{marginTop:'50px'}}>
      <b>CONNECT WITH US</b><br/>
      Subhiksha Voluntary Organization<br></br>
Plot No : 112 ,Road No :3 ,Dhanalaxmi Colony ,Mahendra Hills ,East Marredpally ,Secunderabad -500026 <br></br>
Hyderabad ,Telangana ,India<br></br>
Office +91- 9908076899,+919121104609<br></br>
director@subhiksha.org
08:00 am - 06:00 pm Sunday closed
</div>
        <p>&copy; 2022 NGO Name. All rights reserved.</p>
      </footer>
    </div>
  );
};
export default Home;