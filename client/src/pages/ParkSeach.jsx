import { Link } from 'react-router-dom';
import { useQuery } from '@apollo/client';
import { QUERY_PARKS } from '../utils/queries'; 

function ParkList() {
  const { loading, data } = useQuery(QUERY_PARKS);

  if (loading) {
    return <div>Loading...</div>;
  }

  const parks = data.parks;

  return (
    <div className="container my-1">
      <Link to="/">← Back to Home</Link>

      <h2>National Parks</h2>
      {parks.map((park) => (
        <div key={park._id} className="my-2">
          <h3>{park.name}</h3>
        </div>
      ))}
    </div>
  );
}

export default ParkList;
