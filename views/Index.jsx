const React = require("react");
function Index(props) {
    const {flights} = props;
  return (
    <div>
      <h1>Flights Index Page</h1>
      <nav>
        <a href="/flights/new">Create a New Flight</a>
      </nav>
      <ul>
        {flights.map((flight, i) => {
          return (
            <li key={flight._id}>
             Airline Name: {flight.airline}
             <br/>
             Flight Number:{flight.flightNo}{" "}
             <br/>
             Departs On: {new Date(Date(flight.departs)).toLocaleDateString()} 
             {/* Departs On: {(Date(flight.departs))}  */}
             <br/>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

module.exports = Index;