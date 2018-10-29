import React  from "react";
import ReactDOM from 'react-dom';
import {Meteor} from 'meteor/meteor';
import {Tracker} from 'meteor/tracker';

import {Players} from './../imports/api/players';

// Run a function now and rerun it later whenever its dependencies change.
// Returns a Computation object that can be used to stop or observe the rerunning.

const renderPlayer = function(playersList){
  return playersList.map(item => {
    return <p key={item._id}>Player name: {item.name} and Score: {item.score} </p>;
  })
};

// A function to run on startup.
Meteor.startup(function () {
//
  Tracker.autorun(function(){
    let players = Players.find().fetch();
    let jsx = (
      <div>
        <p>This is from main.js</p>
        {renderPlayer(players)}
      </div>
    )
    ReactDOM.render(jsx, document.getElementById('app'));
  })
})

