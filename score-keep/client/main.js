import React  from "react";
import ReactDOM from 'react-dom';
import {Meteor} from 'meteor/meteor';

const players = [
  {
    _id: '1',
    name: 'Lauren',
    score: 99
  },
  {
    _id:'2',
    name: 'Corey',
    score: -1
  },
  {
    _id:'3',
    name: 'Andrew',
    score: -12
  }
];

const renderPlayer = function(playersList){
  return playersList.map(item => {
    return <p key={item._id}>Player name: {item.name} and Score: {item.score} </p>;
  })
};

// A function to run on startup.
Meteor.startup(function () {
  let jsx = (
    <div>
      <p>This is from main.js</p>
      {renderPlayer(players)}
    </div>
  )
  ReactDOM.render(jsx, document.getElementById('app'));
})

