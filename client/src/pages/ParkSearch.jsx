import { useState } from "react";
import { searchParks } from "../utils/API";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Alert from "@mui/material/Alert";
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { Card, Col, Row } from "react-bootstrap";
import { useMutation, useQuery } from "@apollo/client";

import MapComponent from "../components/MapComponent";
import { GET_USER } from "../utils/queries";
import { ADD_FAVORITE_PARK } from "../utils/mutations";

const ParkSearch = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [searchedParks, setSearchedParks] = useState([]);
  const [mainPark, setMainPark] = useState([]);
  const [errorDisplay, setErrorDisplay] = useState({ display: "none" });
  const [fillIcon, setFillIcon] = useState(false);

  const { data } = useQuery(GET_USER);
  const user = data;

  const [addFavoritePark] = useMutation(ADD_FAVORITE_PARK);
  
  const handleSubmit = async (query) => {
    const parks = await searchParks(query, import.meta.env.VITE_PARK_API_KEY);
    if (parks.data.length === 0) {
      setErrorDisplay({ display: "block" });
      throw new Error("No parks found with that search!");
    }
    setSearchedParks(parks.data);
  }

  const displayPark = async (park) => {
    setSearchedParks([]);
    setMainPark(park);
  }

  const setFavorite = async () => {
    const name = mainPark.fullName;
    const description = mainPark.description;
    if (fillIcon) {
      setFillIcon(false);
    } else if (!fillIcon) {
      setFillIcon(true);

      try{
        // const username = user.me.userName;
        // console.log(username);
        const { data } = await addFavoritePark({ variables: { name, description } });
        return data;
      } catch (err) {
        console.error(err);
      }
    }
  }

  return(
      <div>
        <TextField onChange={(event) => setSearchTerm(event.target.value)} id="outlined-basic" variant="outlined" />
        <Button variant="contained" onClick={() => handleSubmit(searchTerm)}>Search</Button>
        <Alert severity="warning" style={errorDisplay}>No parks found with that search!</Alert>
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
                    <Button onClick={() => displayPark(park)} variant="contained">Learn More</Button>
                  </Card.Body>
                </Card>
              </Col>
            )
          })}
        </Row>
        {mainPark.fullName &&
          <div>
            <h1>{mainPark.fullName}</h1>
            {fillIcon && <FavoriteIcon onClick={setFavorite} />}
            {!fillIcon && <FavoriteBorderIcon onClick={setFavorite} />}
            <img src={mainPark.images[0].url} style={{ width: "100%" }}></img>
            <p>{mainPark.description}</p>
            <MapComponent latitude={mainPark.latitude} longitude={mainPark.longitude}/>
          </div>
        }
      </div>
  )
}

export default ParkSearch;