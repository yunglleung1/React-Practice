import React, { Component } from 'react';
import CardList from '../components/CardList';
import {robots} from '../robots';
import SearchBox from '../components/SearchBox';
import './App.css';
import Scroll from '../components/Scroll';

class App extends Component {
  constructor(){
    super();//brings in Component

    this.state = {
      robots: [],
      searchfield: ''
    }
  }

  componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => {
      return response.json();
    })
    .then((robots) => {
      this.setState({
        robots: robots
      })
    })
  }

  onSearchChange = (event) => {
    this.setState({
      searchfield: event.target.value
    })
  }

  render(){
    const {robots, searchfield} = this.state;//destructuring
    // let robots = this.state.robots;
    // let searchfield = this.state.searchfield.toLowerCase();
    const filteredBots = robots.filter((bot) => {
      return bot.name.toLowerCase().includes(searchfield.toLowerCase());
    });

    if(robots.length){
      return (
        <div className = 'App'>
          <h1>RoboFriends</h1>
          <SearchBox onSearchChange = {this.onSearchChange}/>
          <Scroll>
            <CardList bots = {filteredBots}/>
          </Scroll>
        </div>
      );
    } else{
      return 'LOADING...PLEASE WAIT'
    }
  }
}

export default App;
