import React, { Component } from 'react';
import axios from 'axios';
import {Route, NavLink} from 'react-router-dom';


import './App.css';
import SmurfForm from './components/SmurfForm';
import Smurfs from './components/Smurfs';
import Smurf from './components/Smurf';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeSmurf: null,
      smurfs: [],
      error: '',

    }
  }
  // add any needed code to ensure that the smurfs collection exists on state and it has data coming from the server
  // Notice what your map function is looping over and returning inside of Smurfs.
  // You'll need to make sure you have the right properties on state and pass them down to props.

  componentDidMount() {
    console.log("CDM running...");

    axios
      .get("http://localhost:3333/smurfs")
      .then(res =>{
        console.log("res is ", res.data);
        this.setState({ smurfs: res.data });
      })
      .catch(err =>{
        this.setState({error: err});
      })

  }

  addSmurfBetter = (e, smurf) => {
    e.preventDefault();

    if( smurf.name && smurf.age && smurf.height) {
      axios
        .post('http://localhost:3333/smurfs', smurf)
        .then(res => {
          this.setState({ smurfs: res.data })
        })
        .catch(err => {
          console.log(err);
        })
    } else {
      console.log("You entered no smurf info")
    }
  };


  updateSmurf = (e, smurf) => {
    e.preventDefault();
    axios
      .put(`http://localhost:3333/smurfs/${smurf.id}`, smurf)
      .then(res => {
        this.setState({
          activeSmurf: null,
          smurf: res.data
        });
        this.props.history.push("/smurf-list");
      })
      .catch(err => {
        console.log(err);
      })
  };
/*
  deleteSmurf = (e, id) => {
    e.preventDefault();
    console.log(">>>> check deleteSmurf id ", this.props);

    axios
      .delete(`http://localhost:3333/smurfs/${id}`)
      .then(res => {
        this.setState({ smurfs: res.data });
        this.props.history.push("/smurf-list");
      })
      .catch(err => {
        console.log(err);
      })
  };
*/

  setUpdateForm = (e, smurf) => {
    console.log("setUpdateForm friend is ", smurf);
    e.preventDefault();
    this.setState({ activeSmurf: smurf });

    this.props.history.push("/smurf-form");
  };

  render() {
    return (
      <div className="App">

        <nav>
          <NavLink exact to = "/"> Smurf Village</NavLink>
          <NavLink to = "/smurf-form"> Add a Smurf!</NavLink>
        </nav>


        <Route
          path = "/smurf-list/:id"
          render = { props => (
            <Smurf
              {...props}
              smurfs = {this.state.smurfs}
            //  deleteSmurf = {this.deleteSmurf}
              setUpdateForm = {this.setUpdateForm}
            />
          )}
        />




        <Route
          path = "/smurf-form"
          render = {props =>
            <SmurfForm
              {...props}
              activeSmurf = {this.state.activeSmurf}
              addSmurfBetter = {this.addSmurfBetter}
              updateSmurf = {this.updateSmurf}
            />
          }

        />


        <Route
          path = "/"
          render = {props =>
            <Smurfs
              {...props}
              smurfs={this.state.smurfs}
            />
          }
        />


      </div>
    );
  }
}

export default App;
