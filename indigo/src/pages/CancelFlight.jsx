import { Container, Row, Col, Form, FormGroup, Button } from 'reactstrap';
import { useState } from 'react';
import './cancelFlight.css'; // Ensure you have this CSS file

const CancelFlight = () => {
  const [flightNumber, setFlightNumber] = useState('');
  const [ticketNumber, setTicketNumber] = useState('');
  const [reason, setReason] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    try {
      const response = await fetch('http://localhost:5000/api/flights/cancel', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          flightNumber,
          ticketNumber,
          reason
        })
      });

      const data = await response.json();
      if (response.ok) {
        console.log('Cancellation successful:', data);
      } else {
        console.error('Cancellation failed:', data);
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <Container>
      <Row>
        <Col md="12">
          <div className="cancel__flight">
            <h2>Cancel Flight</h2>
            <Form onSubmit={handleSubmit}>
              <FormGroup>
                <label htmlFor="flightNumber">Flight Number</label>
                <input
                  type="text"
                  id="flightNumber"
                  name="flightNumber"
                  value={flightNumber}
                  onChange={(e) => setFlightNumber(e.target.value)}
                  placeholder="Enter Flight Number"
                />
              </FormGroup>
              <FormGroup>
                <label htmlFor="ticketNumber">Ticket Number</label>
                <input
                  type="text"
                  id="ticketNumber"
                  name="ticketNumber"
                  value={ticketNumber}
                  onChange={(e) => setTicketNumber(e.target.value)}
                  placeholder="Enter Ticket Number"
                />
              </FormGroup>
              <FormGroup>
                <label htmlFor="reason">Cancellation Reason</label>
                <textarea
                  id="reason"
                  name="reason"
                  rows="4"
                  value={reason}
                  onChange={(e) => setReason(e.target.value)}
                  placeholder="Enter reason for cancellation"
                ></textarea>
              </FormGroup>
              <Button type="submit">Submit Cancellation</Button>
            </Form>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default CancelFlight;
