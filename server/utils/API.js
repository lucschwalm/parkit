// save book data for a logged in user
export const savePark = (ParkData, token) => {
    return fetch('/api/users', {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(parkData),
    });
  };
  
  // remove saved book data for a logged in user
  export const deletePark = (parkId, token) => {
    return fetch(`/api/users/parks/${parkId}`, {
      method: 'DELETE',
      headers: {
        authorization: `Bearer ${token}`,
      },
    });
  };
  
  // make a search to google books api
  // https://www.googleapis.com/books/v1/volumes?q=harry+potter
  export const searchParks = (query) => {
    // return fetch(`https://www.googleapis.com/books/v1/volumes?q=${query}`);
    return fetch(`https://developer.nps.gov/api/v1/parks?q=${query}`)
  };
  