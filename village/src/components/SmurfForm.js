import React, { Component } from 'react';
import axios from 'axios';

class SmurfForm extends Component {
  state = {
    smurf: this.props.activeSmurf || {
      name: '',
      age: '',
      height: '',

    }
  };

  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log(">>>>> CDU prevProps", prevProps);
    console.log(">>>>> CDU prevState", prevState);
    console.log(">>>>> CDU snapshot", snapshot);

    if(
      this.props.activeSmurf && prevProps.activeSmurf
      !== this.props.activeSmurf

    ) {
      this.setState({
        friend: this.props.activeSmurf
      })
    }

  }





 /*
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      age: '',
      height: ''
    };
  }



  addSmurf = event => {
    //event.preventDefault();
    // add code to create the smurf using the api

    axios
      .post("http://localhost:3333/smurfs", {
        name: this.state.name,
        age: this.state.age,
        height: this.state.height,
        })
      .then(res => {
        this.setState({smurfs: res.data})
      })
      .catch(err => {
        console.log(err);
      });

      this.setState({
        name: '',
        age: '',
        height: ''
      });

  };

  handleInputChange = e => {
    this.setState({ [e.target.name]: e.target.value });

    console.log("e.target.name",e.target.name );
    console.log("e.target.value", e.target.value);
  };


  */

  handleInputChange = ev => {
    ev.persist();

    let value = ev.target.value;

    if(ev.target.name === 'age') {
      value = parseInt(value, 10);
    }

    // use prevSTATE !!!!!!
    this.setState(prevState => ({
      smurf: {
        ...prevState.smurf,
        [ev.target.name]: value
      }
    }))

  };

  handleSubmit = e => {
    if(this.props.activeSmurf) {
      this.props.updateSmurf(e, this.state.smurf)
    } else {
      this.props.addSmurfBetter(e, this.state.smurf)
    }
    this.setState({
      friend: {
        name: '',
        age: '',
        height: '',

      }


    })
  };






  render() {
    return (
      <div className="SmurfForm">
        <form onSubmit={this.handleSubmit}>
          <input
            onChange={this.handleInputChange}
            placeholder="name"
            value={this.state.name}
            name="name"
          />
          <input
            onChange={this.handleInputChange}
            placeholder="age"
            value={this.state.age}
            name="age"
          />
          <input
            onChange={this.handleInputChange}
            placeholder="height"
            value={this.state.height}
            name="height"
          />
          <button type="submit">Add to the village</button>
        </form>
      </div>
    );
  }
}

export default SmurfForm;
