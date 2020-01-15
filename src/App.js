import React, { Component } from "react";
import Travels from "./Travels";

class App extends Component {
  state = {};
  render() {
    return (
      <div>
        <div>
          <Travels
            destination="Paris"
            country="France"
            photo="https://www.telegraph.co.uk/content/dam/Travel/hotels/europe/france/paris/paris-cityscape-overview-guide.jpg?imwidth=450"
            distance="200 miles"
          />
        </div>
        <div>
          <Travels
            destination="Berlin"
            country="Germany"
            photo="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6c/Aerial_view_of_Berlin_%2832881394137%29.jpg/1200px-Aerial_view_of_Berlin_%2832881394137%29.jpg"
            distance="400 miles"
          />
        </div>
      </div>
    );
  }
}

export default App;
