import { Container, Row, Col, Form, FormGroup, Button, Input } from 'reactstrap';
import DatePicker from 'react-datepicker'; // Import date picker
import 'react-datepicker/dist/react-datepicker.css'; // Import date picker styles
import { useState } from 'react';
import PropTypes from 'prop-types'; // For prop type checking

const Flights = ({ book = { price: 100 } }) => { // Default value for book prop
  const [startDate, setStartDate] = useState(new Date());
  const [flightNumber, setFlightNumber] = useState('');
  const [ticketNumber, setTicketNumber] = useState('');
  const [seats, setSeats] = useState(1); // Default value
  const [users, setUsers] = useState(1); // Default value
  const [selectedPrice, setSelectedPrice] = useState(book.price);

  // Example options for different prices
  const priceOptions = [
    { value: 100, label: '$100 / per person' },
    { value: 150, label: '$150 / per person' },
    { value: 200, label: '$200 / per person' },
  ];

  const handlePriceChange = (e) => {
    setSelectedPrice(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('http://localhost:5000/api/flights/book', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          flightNumber,
          ticketNumber,
          seats,
          users,
          date: startDate.toISOString(),
          price: selectedPrice
        })
      });

      if (response.ok) {
        const data = await response.json();
        console.log('Booking successful:', data);
      } else {
        const errorData = await response.json();
        console.error('Booking failed:', errorData);
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <Container>
      <Row>
        <Col md="6">
          <div className="booking__details">
            <h3>${selectedPrice} <span>/per person</span></h3>
          </div>
        </Col>
        <Col md="6">
          <Form onSubmit={handleSubmit}>
            <FormGroup>
              <label htmlFor="price">Select Price</label>
              <Input
                type="select"
                id="price"
                name="price"
                value={selectedPrice}
                onChange={handlePriceChange}
              >
                {priceOptions.map((option) => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </Input>
            </FormGroup>
            <FormGroup>
              <label htmlFor="flightNumber">Flight Number</label>
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
              <label htmlFor="ticketNumber">Ticket Number</label>
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
              <label htmlFor="seats">Number of Seats</label>
              <Input
                type="number"
                id="seats"
                name="seats"
                min="1"
                max="10"
                value={seats}
                onChange={(e) => setSeats(e.target.value)}
              />
            </FormGroup>
            <FormGroup>
              <label htmlFor="users">Number of Users</label>
              <Input
                type="number"
                id="users"
                name="users"
                min="1"
                max="10"
                value={users}
                onChange={(e) => setUsers(e.target.value)}
              />
            </FormGroup>
            <FormGroup>
              <label htmlFor="date">Flight Date</label>
              <DatePicker
                selected={startDate}
                onChange={(date) => setStartDate(date)}
                dateFormat="yyyy/MM/dd"
                id="date"
                name="date"
              />
            </FormGroup>
            <Button type="submit">Book Flight</Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

Flights.propTypes = {
  book: PropTypes.shape({
    price: PropTypes.number.isRequired,
  }),
};

export default Flights;
