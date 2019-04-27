import React, {Component} from "react";
import Navbar from "./components/Navbar";
import Jumbotron from "./components/Jumbotron";
import FriendCard from "./components/FriendCard";
import Footer from "./components/Footer";
import band from "./bands.json";
import "./App.css";

//set state to 0
class App extends Component {
  state = {
    band,
    clickedBand: [],
    score: 0
  };
  //when you click on a card ..take band out of array
  imageClick = event => {
    const currentBand = event.target.alt;
    const BandAlreadyClicked =
      this.state.clickedBand.indexOf(currentBand) > -1;
    //if you click on a band that has already been selected , the gaem is reset and the cards reorderd
    if (BandAlreadyClicked) {
      this.setState({
        band: this.state.band.sort(function (a, b) {
          return 0.5 - Math.random();
        }),
        clickedBand: [],
        score: 0
      });
      alert("Sorry you lost. Play again?");
      //if you click on available band, you score is increased and cards reordered
    } else {
      this.setState(
        {
          band: this.state.band.sort(function (a, b) {
            return 0.5 - Math.random();
          }),
          clickedBand: this.state.clickedBand.concat(
            currentBand
          ),
          score: this.state.score + 1
        },
        //if you get the 12 bands you get a congrats message and game resets
        () => {
          if (this.state.score === 12) {
            alert("Yay! You Win!");
            this.setState({
              band: this.state.band.sort(function (a, b) {
                return 0.5 - Math.random();
              }),
              clickedBand: [],
              score: 0
            });
          }
        }
      );
    }
  };

  //the order of components to be rendered: navbar, jumbotron, friendcard, footer
  render() {
    return(
      <div>
        <Navbar
          score = {this.state.score}
          />
          <Jumbotron />
          <div className="wrapper">
          {this.state.band.map(band => (

            <FriendCard
            imageClick={this.imageClick}
            id={band.id}
            key={band.id}
            image={band.image}
            />
          ))}
          </div>
          <Footer />

      </div>
    );
  }
}



export default App;
