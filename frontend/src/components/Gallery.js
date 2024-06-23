import React from 'react';
import { Card, Row, Col } from 'react-bootstrap';
import distance_learning from './distance_learning.jpeg';
import event1 from './event2.jpeg';
import event2 from './event3.jpeg';

const Gallery = () => {
  const images = [
    { src: distance_learning, title: 'Empowering Access: Bridging the Tech Gap for Disabilities', text: 'This initiative addresses these challenges by offering customized learning paths tailored to the diverse needs and abilities of participants. Through hands-on workshops and training sessions, individuals learn how to utilize assistive technologies, adaptive software, and specialized devices that enhance their interaction with digital tools. The program emphasizes a supportive and inclusive learning environment where participants can explore technology at their own pace and in a manner that suits their learning preferences.Central to the' }

,
    { src: event1, title: 
"Limitless Horizons: Embracing Diversity through Ability", text: 'At the heart of this event is a series of activities and presentations that highlight the unique skills and perspectives of participants. These may include performances, art exhibitions, workshops, and interactive sessions where attendees can learn about assistive technologies and adaptive techniques that enhance daily living and engagement in various fields.' },
    { src: event2, title: 
"Unbounded Play: Empowering Abilities Through Fun", text: 'Beyond the enjoyment of play, the event also aims to highlight the physical, social, and emotional benefits that recreational activities can provide. Participants have the opportunity to build confidence, develop skills, and forge connections with peers and supporters alike. Workshops and demonstrations may also be included to educate attendees on adaptive strategies and resources available to enhance their play experiences both during the event and in their everyday lives.' },
    // Add more image objects as needed
  ];

  return (
    <div style={{ padding: '30px' }}>
      <h2 style={{margin:'25px'}}>Gallery</h2>
      <Row>
        {images.map((image, index) => (
          <Col key={index} xs={12} sm={12} md={12}>
            <Card style={{ border:'none', marginBottom: '20px',marginRight:'20px',marginLeft:'20px' }}>
              <Row>
                <Col xs={4}>
                  <Card.Img src={image.src} alt="Image" style={{ width: '90%', height: '90%', padding: '2px', borderRadius: '20px' }} />
                </Col>
                <Col xs={8}>
                  <Card.Body>
                    <Card.Title>{image.title}</Card.Title>
                    <Card.Text>{image.text}</Card.Text>
                  </Card.Body>
                </Col>
              </Row>
            </Card>
          </Col>
        ))}
      </Row>
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

export default Gallery;