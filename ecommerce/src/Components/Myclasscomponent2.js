import React, { Component } from 'react';

export class Myclasscomponent2 extends Component {
  // Initializing state in the constructor
  constructor(props) {
    super(props);
    this.state = {
      sname: 'User' // default value for sname
    };
  }

  render() {
    return (
      <div>
        <center>
          <iframe
            title="Embedded example content"
            width="500"
            height="600"
            src="https://www.youtube.com/embed/6nDmtt1I4TY" // Correct YouTube embed URL format
            allowFullScreen
          ></iframe>
          <h3>Welcome {this.state.sname}, to React "State"</h3>
        </center>
      </div>
    );
  }
}

export default Myclasscomponent2;
