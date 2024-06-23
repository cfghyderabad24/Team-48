import React from 'react';
import { Card, Row, Col } from 'react-bootstrap';
import Gharaunda from './Gharaunda.jpeg';
import Nirmaya from './Nirmaya.jpeg';
import vikaas from './vikaas.jpeg'
import samarth from './samarth.jpeg'

const Schemes = () => {
  const images = [
    { src: Gharaunda, title: 'Gharaunda-Group Home for Adults Scheme', text: 'Gharaunda-Group Home for Adults scheme, launched by the Department of Empowerment of Persons with Disabilities,aims at setting up Gharaunda Centres or Registered Organisations (RO) for for all Adult PwDs covered under the National Trust Act with adequate and quality care service with acceptable living standards including provision of basic medical care from professional doctors.'
        ,link:'https://www.myscheme.gov.in/schemes/gghas'
     }

,
    { src: Nirmaya, title: 
"The National Trust", text: 'Prescription for Ongoing Therapies- Doctor’s prescription at least once in Six months is essential in which the category of therapy and duration of therapy should be clearly mentioned. Thereafter other documents from Rehabilitation Professional for therapy, and related bills will be acceptable. Doctor who prescribes the prescription should be a valid medical Practitioner with valid license/degree as per Medical council rules.' ,
link:'https://thenationaltrust.gov.in/content/scheme/niramaya.php'},
    { src: vikaas, title: 
"Vikaas-Day Care Scheme For Person with Disability Children", text: 'Vikaas is a Day care scheme, launched by the Department of Empowerment of Persons with Disabilities , Ministry of Social Justice & Empowerment. Govt. of India, primarily to expand the range of opportunities available to a person with disability attaining the age of 10 years for enhancing interpersonal and vocational skills as they are on a transition to higher age groups.Registered Organisation(RO) centre will also offer caregiving support to Person with Disability(PwD) during the time the PwD is in the Vikaas centre. In addition it also helps in supporting family members of the PwDs with disabilities covered under the National Trust Act to get some time during the day to fulfil other responsibilities.',
link:'https://www.myscheme.gov.in/schemes/vdcspds' },
{ src: samarth, title: 
    "Samarth-Respite Care Scheme", text: 'Samarth (Respite Care) scheme was launched by the Department of Empowerment of Persons with Disabilities, Ministry of Social Justice & Empowerment. Govt. of India.The objective of the scheme is to provide respite home for orphans or abandoned PwDs, families in crisis and also for Persons with Disabilities (PwD) from BPL & LIG families including destitutes with at least one of the four disabilities covered under the National Trust Act. It also aims at creating opportunities for family members to get respite time in order to fulfil other responsibilities.',
    link:'https://www.myscheme.gov.in/schemes/srcs'}


,    
// Add more image objects as needed
  ];

  return (
    <div style={{ padding: '30px' }}>
      <h2 style={{margin:'25px'}}>Schemes</h2>
      <Row>
        {images.map((image, index) => (
          <Col key={index} xs={12} sm={12} md={12}>
            <Card style={{ border:'none', marginBottom: '20px',marginRight:'20px',marginLeft:'20px' }}>
              <Row>
                <Col xs={4}>
                  <Card.Img src={image.src} alt="Image" style={{ width: '90%', height: '200px', padding: '2px', borderRadius: '20px' }} />
                </Col>
                <Col xs={8}>
                  <Card.Body>
                    <Card.Title>{image.title}</Card.Title>
                    <Card.Text>{image.text}</Card.Text>
                    <a href={image.link} target="_blank" rel="noopener noreferrer">
                        Visit Official Website
                      </a>
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

export default Schemes;