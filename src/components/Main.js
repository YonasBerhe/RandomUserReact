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
        <div style={styles.image}>
          <img src={this.state.picture}/>
        </div>
            <input value={this.state.name}>
            </input>

          <input value={this.state.lastName}>
          </input>

          <input value={this.state.location}>
          </input>

          <input value={this.state.gender}>
          </input>
          <input value={this.state.city}>
          </input>
          <input value={this.state.email}>
          </input>
        </div>

      </div>
    );
  }
});

document.body.style.backgroundColor = "#3B5998";
var styles = {

  image: {
    background: "#fff",

  },
  font: {
    fontSize: 50
  }

};

ReactDOM.render(
  <FakeUser source="https://randomuser.me/api/"/>, document.getElementById('app'));

export default (FakeUser);
// export default Radium(FakeUser);
