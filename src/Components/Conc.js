import React, {useState} from 'react';
import {Card} from 'react-bootstrap';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';

/* Main connections are called in here for that purpose dynamic cards are used . */
function Conc () {
  const [input, setInput] = useState('');
  let cardInfo = [
    {image: 'https://thumbs.dreamstime.com/b/recharge-network-icon-premium-style-design-urbanism-collection-ui-ux-pixel-perfect-web-apps-software-printing-usage-146950444.jpg', name: 'Mobile Recharge', text: 'Prepaid Payment in one Click'},



  ];

  let abcInfo = [
    {image: 'https://cdn.iconscout.com/icon/free/png-512/dth-6-288168.png', name: 'Dth Recharge', text: 'Dth Payments in one click'},



  ];

  let pqrInfo = [
    {image: 'https://www.kindpng.com/picc/m/111-1111044_advance-payment-computer-icons-money-indian-money-transfer.png', name: 'Payouts', text: 'Bank To Bank Transfers'},



  ];

  let fqrInfo = [
    {image: 'https://www.kindpng.com/picc/m/61-618335_transparent-electricity-icon-png-power-over-coax-hikvision.png', name: 'Electricity Bills', text: 'Mseb Bill Payments'},



  ];


      const handleChange = (e) => {
        e.preventDefault();
        setInput(e.target.value);
      };

      if(input.length > 0) {
        cardInfo = cardInfo.filter((i) => {
          return i.name.toLowerCase().match(input);
        })
      }

    const rendercard = (card, index) => {
      return(
          
            <Card style={{ width: "200px"}} key={index} className='card-container row'>
            <Card.Img variant="top"  src={card.image}/>
              <Card.Body>
                <Card.Title style={{color:"black"}}>{card.name}</Card.Title>
                  <Card.Text style={{color:"black"}}>
                    {card.text}
                  </Card.Text>
              </Card.Body>
            </Card>
          
            
      )
    }



    return(
      <>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <Container>
      <Row>
        
      <Col>
      <div className='grid'>
            {cardInfo.map(rendercard)}
          </div>
      <br></br>
      </Col>
      <Col>
      <div className='grid'>
            {abcInfo.map(rendercard)}
        </div>
        <br></br>
      
      </Col>
      <Col>
      <div className='grid'>
            {pqrInfo.map(rendercard)}
        </div>
      
      </Col>

      <Col>
      <div className='grid'>
            {fqrInfo.map(rendercard)}
        </div>
      
      </Col>
      
       
       

        
      </Row>
      
      </Container>
      <hr></hr>
      


      
        <article>
          <p style={{color:"black"}} width="1000px">
         Swami Samarth Multi Recharge is India's No. 1 recharge site that delivers next generation instant online pre-paid recharge solutions to end users. Conceived to deliver a simplified recharge experience online, Swami Samarth Multi Recharge has been the front runner in this domain. It has secured direct relationships with service providers and has singularly focused on investing in developing a strong technical backbone to make the recharge experience reliable, secure, intuitive and seamless for the end user
          </p>
        </article>
       
      

         

        

     
       
          
      

      
      
          
      
      
      </>
    )
}
export default Conc;