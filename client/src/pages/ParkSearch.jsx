import { useState } from "react";
import { searchParks } from "../utils/API";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import { Card, Col, Row } from "react-bootstrap";


const ParkSearch = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [searchedParks, setSearchedParks] = useState([]);
  
  const handleSubmit = async (query) => {
    const parks = await searchParks(query, import.meta.env.VITE_PARK_API_KEY);
    setSearchedParks(parks.data);
    for(let i=0; i<parks.total; i++) {
      let name = parks.data[i].fullName;
      console.log(name);
    }
  }

  return(
      <div>
        <TextField onChange={(event) => setSearchTerm(event.target.value)} id="outlined-basic" variant="outlined" />
        <Button variant="contained" onClick={() => handleSubmit(searchTerm)}>Search</Button>
        <Row>
          {searchedParks.map((park, index) => {
            return (
              <Col key={index}>
                <Card>
                  {park.images[0] ? (
                    <Card.Img src={park.images[0].url} />
                  ) : null}
                  <Card.Body>
                    <Card.Title>{park.fullName}</Card.Title>
                    <Button variant="contained">Learn More</Button>
                  </Card.Body>
                </Card>
              </Col>
            )
          })}
        </Row>
      </div>
  )
}

export default ParkSearch;