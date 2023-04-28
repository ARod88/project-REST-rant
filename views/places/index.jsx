const React = require('react');
const Def = require("../default");

const Index = (data) => {
    let placesFormatted = data.places.map((place) => {
        return (
            <div>
                <h2>{place.name}</h2>
                <img src={place.pic} alt={place.name} />
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