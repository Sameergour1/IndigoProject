import { Container, Row, Col, Form, FormGroup, Label, Input, Button } from 'reactstrap';
import { useState } from 'react';
import './update.css';

const Update = () => {
  const [flightNumber, setFlightNumber] = useState('');
  const [ticketNumber, setTicketNumber] = useState('');
  const [seats, setSeats] = useState(1);
  const [users, setUsers] = useState(1);
  const [date, setDate] = useState('');
  const [flightId, setFlightId] = useState(''); // Add state for flight ID

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    try {
      const response = await fetch(`http://localhost:5000/api/flights/update/${flightId}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          flightNumber,
          ticketNumber,
          seats,
          users,
          date
        })
      });
      
      const data = await response.json();
      if (response.ok) {
        console.log('Update successful:', data);
      } else {
        console.error('Update failed:', data);
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <Container className="update-container">
      <Row>
        <Col md="6">
          <h2>Update Your Details</h2>
          <Form onSubmit={handleSubmit}>
            <FormGroup>
              <Label for="flightId">Flight ID</Label>
              <Input
                type="text"
                id="flightId"
                name="flightId"
                value={flightId}
                onChange={(e) => setFlightId(e.target.value)}
                placeholder="Enter Flight ID"
              />
            </FormGroup>
            <FormGroup>
              <Label for="flightNumber">Flight Number</Label>
              <Input
                type="text"
                id="flightNumber"
                name="flightNumber"
                value={flightNumber}
                onChange={(e) => setFlightNumber(e.target.value)}
                placeholder="Enter Flight Number"
              />
            </FormGroup>
            <FormGroup>
              <Label for="ticketNumber">Ticket Number</Label>
              <Input
                type="text"
                id="ticketNumber"
                name="ticketNumber"
                value={ticketNumber}
                onChange={(e) => setTicketNumber(e.target.value)}
                placeholder="Enter Ticket Number"
              />
            </FormGroup>
            <FormGroup>
              <Label for="seats">Number of Seats</Label>
              <Input
                type="number"
                id="seats"
                name="seats"
                min="1"
                max="10"
                value={seats}
                onChange={(e) => setSeats(Number(e.target.value))}
              />
            </FormGroup>
            <FormGroup>
              <Label for="users">Number of Users</Label>
              <Input
                type="number"
                id="users"
                name="users"
                min="1"
                max="10"
                value={users}
                onChange={(e) => setUsers(Number(e.target.value))}
              />
            </FormGroup>
            <FormGroup>
              <Label for="date">Flight Date</Label>
              <Input
                type="date"
                id="date"
                name="date"
                value={date}
                onChange={(e) => setDate(e.target.value)}
              />
            </FormGroup>
            <Button type="submit" color="primary">Update</Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default Update;
