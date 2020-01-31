import React, { Component } from "react";

class Travels extends Component {
  state = {};
  render() {
    const destinations = [
      {
        location: "Paris",
        country: "France",
        photo:
          "https://www.telegraph.co.uk/content/dam/Travel/hotels/europe/france/paris/paris-cityscape-overview-guide.jpg?imwidth=450",
        distance: "200 miles"
      },

      {
        location: "Berlin",
        country: "Germany",
        photo:
          "https://www.telegraph.co.uk/content/dam/Travel/hotels/europe/france/paris/paris-cityscape-overview-guide.jpg?imwidth=450",
        distance: "300 miles"
      },

      {
        location: "Stockholm",
        country: "Sweden",
        photo:
          "https://www.telegraph.co.uk/content/dam/Travel/hotels/europe/france/paris/paris-cityscape-overview-guide.jpg?imwidth=450",
        distance: "400 miles"
      },

      {
        location: "lisbon",
        country: "Portugal",
        photo:
          "https://www.telegraph.co.uk/content/dam/Travel/hotels/europe/france/paris/paris-cityscape-overview-guide.jpg?imwidth=450",
        distance: "250 miles"
      },

      {
        location: "Moscow",
        country: "Russia",
        photo:
          "https://www.telegraph.co.uk/content/dam/Travel/hotels/europe/france/paris/paris-cityscape-overview-guide.jpg?imwidth=450",
        distance: "600 miles"
      }
    ];

    const eachDestination = destinations.map((destination, i) => {
      return (
        <div key={i}>
          {destination.location}
          {destination.country}
          {destination.distance}
          <br></br>
          <img src={destination.photo} alt="destination" />
        </div>
      );
    });


    return (
      <div>
        {eachDestination}
      </div>
    );
  }
}

export default Travels;
