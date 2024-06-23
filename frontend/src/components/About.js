import React from 'react';
import { Row, Col } from 'react-bootstrap';
import Mission from './Mission.jpg'
import meth from './meth.jpg'

const About = () => {
  return (
    <div style={{paddingLeft:'30px',paddingTop:'30px'}}>
      <section>
        <Row>
          <Col xs={12} md={6}>
            <h2 style={{paddingTop:'40px'}}>Mission</h2>
            <p style={{paddingTop:'20px'}}>Our mission is to make a difference in the world of disability. We believe in human potential and its expression. Our emphasis is on education and its accessibility, regardless of caste, creed, race, religion and ethnicity.
            We help the challenged people and help them give a proper education, vocational training and therapies which could help them in making their life successful
            </p>
          </Col>
          <Col xs={12} md={6}>
            <img src={Mission} alt="Mission Image" style={{maxWidth:'80%', height:'auto'}} />
          </Col>
        </Row>
      </section>
      <section>
        <Row>
        <Col xs={12} md={3}>
            <img src={meth} alt="Mission Image" style={{Width:'300px', height:'auto',marginTop:'50px'}} />
          </Col>
          <Col xs={12} md={9}>
            <h2 style={{paddingTop:'40px'}}>Methodology</h2>
            <p style={{paddingTop:'20px'}}>NGOs focused on children with disabilities prioritize inclusive education and healthcare access, offering specialized services such as therapies and assistive devices. They foster community engagement through support networks and capacity-building initiatives for caregivers and educators. Advocacy efforts promote policy changes and public awareness to combat stigma and ensure the rights and inclusion of children with disabilities, empowering them to lead independent and fulfilling lives.
            </p>
          </Col>
        </Row>
      </section>

      {/* Repeat the above pattern for Vision, Core Values, Our Team, Services and Programs, Impact and Success Stories, Partnerships and Collaborations, and Contact Us sections */}

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

export default About;