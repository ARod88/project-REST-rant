const React = require('react');
const Def = require("../default");

const Index = (data) => {
    
        let placesFormatted = data.places.map((place) => {
            return (
              <div className="col-sm-6">
                <h2>
                  <a href={`/places/${place.id}`} >
                    {place.name}
                  </a>
                </h2>
                <p className="text-center">
                  {place.cuisines}
                </p>
                <img src={place.pic} alt={place.name} />
                <p className="text-center">
                  Located in {place.city}, {place.state}
                </p>
              </div>
            );
          });
          
    return (
        <Def>
            <main>
                <h1>Places Index Page</h1>
                <p>Welcome to the places index page!</p>
                {placesFormatted}
            </main>
        </Def>
    );
};

module.exports = Index;