import Radium from 'radium';

import React from 'react';
import ReactDOM from 'react-dom';
// import Radium, { Style } from 'radium';

var FakeUser = React.createClass({

  getInitialState: function() {
    return {firstname: '', lastName: '', gender: '', location: '', email: '', username: '', password: '', picture: ''};
  },

  componentDidMount: function() {
    $.get(this.props.source, function(result) {
      var fakey = result.results[0].user
      console.log(fakey);

      // var fakey = result.results[0].user;
      if (this.isMounted()) {this.setState({firstname: fakey.name.first, lastName: fakey.name.last, gender: fakey.gender, location: fakey.location.city, email: fakey.email, username: fakey.username, password: fakey.password, picture: fakey.picture.medium});}
    }.bind(this));
  },

  render() {
    return (

<div>
          <Button kind="primary">Radium Button</Button>


        // <div className="picturetype" style={styles.image}>

          <img src={this.state.picture} />



        // <div className="card1" style={styles.body}>
          <span className="firstName" style={styles.font}>
            {this.state.firstname}
          </span>
          <span className="lastName">
            {this.state.lastName}
          </span>
          <span className="genName">
            {this.state.gender}
          </span>
          <span className="locArea">
            {this.state.location}
          </span>

          </div>


    );
  }
});
FakeUser = Radium(FakeUser);

document.body.style.backgroundColor = "#3B5998";
var styles = {

  image:{
    background: "#fff"
  },
  font:{
    fontSize: 50
  }

};

ReactDOM.render(
  <FakeUser source="https://randomuser.me/api/"/>, document.getElementById('app'));

// export default (FakeUser);
export default FakeUser;
